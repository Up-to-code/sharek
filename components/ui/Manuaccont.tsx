import { LogIn, Settings, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },

};

const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
};
function Manuaccont() {
    return (
        <>
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={list}
                className="absolute top-12 right-10 rounded bg-background  px-5 py-2 border "
                transition={{ delay: 0.1 }}
            >
                <motion.li variants={item} className="p-1 flex gap-2 items-center justify-center  cursor-pointer t " >
                    <UserCircle2 className="w-4  " /><p className="text-base font-semibold pb-1">account</p>
                </motion.li>
                <motion.li variants={item} className="p-1 flex gap-2 items-center justify-center   cursor-pointer  t " >
                    <Settings className="w-4  " /><p className="text-base font-semibold pb-1">account</p>
                </motion.li >
                <motion.li variants={item} className="p-1 flex gap-2 items-center justify-center text-red-500   cursor-pointer  " >
                    <LogIn className="w-4  " /><p className="text-base font-semibold pb-1">account</p>
                </motion.li>
            </motion.ul>
        </>
    );
}

export default Manuaccont;
