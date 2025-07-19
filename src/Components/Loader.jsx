/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import MyLogo from "../assets/MyLogo.svg";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-white text-black z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 , y: 400}}
      transition={{ duration: 1 }}
    >
        <img src={MyLogo} alt="TheoKode Logo" className=" h-1/4 animate-pulse" />
      <h1 className="text-[64px] font-semibold font-clash-display animate-pulse">TheoKode</h1>
    </motion.div>
  );
}
