import { motion, AnimatePresence } from "framer-motion";

export default function PartnerCarousel() {

    const companyLogo = [];

    return (
        <div className="w-full p-6 overflow-hidden">
        <motion.div className="flex space-x-10 w-max"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
            }}
        >
            {companyLogo.map((logo, index) => (<img
                key={index}
                src={logo}
            />
            ))}
        </motion.div>
        </div>
    )
}