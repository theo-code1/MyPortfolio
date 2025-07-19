/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-black text-white z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl font-bold animate-pulse">Loading...</h1>
    </motion.div>
  );
}
