import { useEffect } from "react";
import Routess from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);
  return (
    <>
      <Routess />
    </>
  );
}

export default App;
