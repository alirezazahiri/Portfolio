import React from "react";

// navigation animation
import { AnimatePresence } from "framer-motion";

// components
import SideBar from "@/components/SideBar";
import { createTheme, ThemeProvider } from "@mui/material";

interface Props {
  children: JSX.Element;
}
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Header /> */}
      <SideBar />
      <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
    </ThemeProvider>
  );
};

export default Layout;
