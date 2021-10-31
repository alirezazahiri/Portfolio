import React from 'react';

// navigation animation 
import { AnimatePresence } from "framer-motion";

interface Props {
    children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            {/* <Header /> */}
            {/* <SideBar /> */}
            <AnimatePresence exitBeforeEnter>
                {children}
            </AnimatePresence>
        </div>
    );
};

export default Layout;