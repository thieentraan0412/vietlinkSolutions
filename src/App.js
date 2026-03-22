import { RouterProvider } from "react-router-dom";
import router from "./route";
import { useEffect } from "react";
import WOW from "wowjs";
import "animate.css/animate.min.css"; // Import animate.css
import MyProvider from "./Context/MyProvider";

function App() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // Activate WOW.js only once
    });
    wow.init();
  }, []);
  return (
    <MyProvider>
        <RouterProvider router={router} />
    </MyProvider>
  );
}
export default App;
