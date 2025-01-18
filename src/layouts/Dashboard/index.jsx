import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="container mx-auto mt-5 text-center">
      <div className="flex flex-wrap">
        {/* Left Menu */}
        <div
          className={`w-full ${isMobile ? "hidden" : "lg:w-1/6"} bg-gray-100 dark:bg-gray-800`}
        >
          <div className="p-4 h-screen">Left Menu</div>
        </div>

        {/* Main Content */}
        <div
          className={`${isMobile ? "w-full" : "lg:w-4/6"} bg-white dark:bg-gray-900`}
        >
          <div className="p-4">
            <Outlet />
          </div>
        </div>

        {/* Right Menu */}
        <div
          className={`w-full ${isMobile ? "hidden" : "lg:w-1/6"} bg-gray-100 dark:bg-gray-800`}
        >
          <div className="p-4 h-screen">Right Menu</div>
        </div>
      </div>
    </div>
  );
};
export default DefaultLayout;
