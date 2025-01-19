import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import SidebarNavigation from "../../components/SideNavbar";

const DefaultLayout = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div id="root" className="bg-gray-200">
      <div className="flex h-screen overflow-hidden">
        <SidebarNavigation />
        <main className="flex-1 overflow-y-auto ml-0 lg:ml-64">
          {/* Your main content goes here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
