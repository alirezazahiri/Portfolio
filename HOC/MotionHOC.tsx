import { motion } from "framer-motion";
import { FC } from "react";

const withMotion = (Component: FC<any>) => {
    return function HOC(props: any) {
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
                <Component {...props}/>
            </motion.div>
        );
    };
};

export default withMotion;
