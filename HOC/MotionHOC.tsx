import { motion } from "framer-motion";
import { FC } from "react";

const withMotion = (Component: FC<{}>) => {
    return function HOC() {
        return (
            <motion.div
                initial={{ y: 500 }}
                animate={{
                    y: 0,
                    transition: { duration: 0.5, type: "spring" },
                }}
                exit={{
                    y: -500,
                    transition: {
                        duration: 0.5,
                        type: "spring",
                    },
                }}
            >
                <Component />
            </motion.div>
        );
    };
};

export default withMotion;
