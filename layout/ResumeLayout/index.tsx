import React from "react";

// mui
import { Container, createTheme, ThemeProvider } from "@mui/material";

// types
import { TResumeLayoutProps } from "@/types/resume";

// components
import Footer from "./Footer";
import Header from "./Header";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function ResumeLayout({ children, ...rest }: TResumeLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          bgcolor: "var(--background-alt)",
          height: "100vh",
          maxWidth: "900px",
        }}
        className="normalize scale-fix"
        component="div"
      >
        <Header {...rest} />
        <main
          style={{ backgroundColor: "var(--light-grey-2)", paddingLeft: "8px" }}
        >
          {children}
        </main>
        <Footer caption={rest.caption} />
      </Container>
    </ThemeProvider>
  );
}

export default ResumeLayout;
