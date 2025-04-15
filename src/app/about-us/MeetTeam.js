import { motion } from "framer-motion";

export default function MeetTeam() {


    const boxVariants = {
        hidden: { height: 0, x: 500 },
        visible: { height: 200, width: 600, opacity: 1, y: 0, x: 500, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <motion.div
            className="max-w-xl h-32 text-center bg-companyBlue p-4 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            variants={boxVariants}
        >
            <h2 className="mt-4 text-white text-2xl font-bold text-center mb-3 relative group inline-block w-fit">
                Meet the Minds Powering Our Success
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </h2>

            <p className="text-center text-base leading-relaxed">
                These are the people who make it all happen. Skilled, driven, and dedicated — our team is the foundation of everything we do and the reason we continue to innovate, inspire, and lead.
            </p>
        </motion.div>
    );


}