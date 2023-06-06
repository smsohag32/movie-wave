import { CirclesWithBar } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-[100vh-120px]">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default Spinner;
