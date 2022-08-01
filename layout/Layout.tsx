import React from 'react';

// navigation animation 
import { AnimatePresence } from "framer-motion";

// components
import SideBar from '@/components/SideBar';

interface Props {
    children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <SideBar />
            <AnimatePresence exitBeforeEnter>
                {children}
            </AnimatePresence>
        </>
    );
};

export default Layout;