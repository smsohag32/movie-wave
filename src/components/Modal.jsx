import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import addToLocalStorage from "../utils/addToLocalStorage";
import { toast } from "react-toastify";
const Modal = ({ closeModal, isOpen, movie }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle booking
  const onSubmit = (data) => {
    const name = data.name;
    const phone = data.phone;
    const schedule = movie?.show?.schedule?.time;
    const movieName = movie?.show?.name;
    const date = new Date();
    const bookingInfo = {
      name,
      phone,
      schedule,
      movieName,
      date,
    };
    if (bookingInfo) {
      addToLocalStorage(bookingInfo);
      reset();
      toast.success(`${name} your booking successful`);
    }
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  <p>Booking now</p>
                  <span className="text-secondary">{movie?.show?.name}</span>
                </Dialog.Title>
                <hr className="mt-8 " />
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name", {
                      required: "Field is empty input your name",
                    })}
                    type="text"
                    name="name"
                    className="input input-bordered w-full max-w-xs"
                    placeholder="Enter Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm">
                      <small>{errors.name?.message} *</small>
                    </p>
                  )}
                  <input
                    {...register("phone", {
                      required: "Field is required",
                    })}
                    type="tel"
                    name="phone"
                    id="name"
                    className="input input-bordered mt-4 w-full max-w-xs"
                    placeholder="Enter Your Number"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm">
                      <small>{errors.phone?.message} *</small>
                    </p>
                  )}
                  <div className="flex justify-around mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >
                      Confirm Book
                    </button>
                    <button
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
