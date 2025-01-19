import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="container mx-auto mt-5 p-4">
      <div className={`flex flex-wrap ${isMobile ? "justify-center" : "justify-between"}`}>
        {/* Main Content */}
        <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
