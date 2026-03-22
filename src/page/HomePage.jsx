import { motion } from "framer-motion";

import Blog from "../component/Home/Blog";
import Contact from "../component/Home/Contact";
import Info from "../component/Home/Info";
import Info2 from "../component/Home/Info2";
import Info3 from "../component/Home/Info3";
import Info4 from "../component/Home/Info4";
import Slice from "../component/Home/Slice";

const HomePage = () => {
  return (
    <main className="bg-white pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Vị trí và độ mờ ban đầu
        animate={{ opacity: 1, y: 0 }} // Vị trí và độ mờ khi animation kết thúc
        transition={{ duration: 0.8, ease: "easeOut" }} // Thời gian animation
      >
        <Slice />
        <Info />
        <Info2 />
        <Info3 />
        <Info4 />
        <Blog />
        <Contact />
      </motion.div>
    </main>
  );
};
export default HomePage;
