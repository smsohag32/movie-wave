import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      <div className="border-b-2 border-stone-500">
        <Header />
      </div>
      {/* outlet section */}
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
