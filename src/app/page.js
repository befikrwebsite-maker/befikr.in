import UnderDevelopment from "./components/UnderDevelopment";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/NavBar";
import ExpandableCard from "./components/Card";


export default function Home() {

  const pageVariants = {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100vw" },
  };

  return (
    <div>
        <UnderDevelopment />
    </div>
  );
}
