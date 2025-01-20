import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetMessages } from "./store/userSlice.js";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetMessages()); // Reset messages on route change
  }, [location.pathname, dispatch]); // Trigger when route changes

  useEffect(() => {
    document.title = import.meta.env.VITE_APP_TITLE || "Splitzy";
  }, []);

  return (
    <>
      {/* <GlobalProvider> */}
      <main>
        <Outlet />
      </main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3500,
        }}
      />
    </>
  );
}

export default App;