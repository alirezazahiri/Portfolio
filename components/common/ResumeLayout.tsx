import React, { FC } from "react";

// mui
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  Avatar,
  Grid,
} from "@mui/material";

// icons
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface Props {
  children: JSX.Element;
}

const Header: FC = () => {
  return (
    <AppBar
      sx={{
        bgcolor: "var(--midnight-blue)",
        height: 200,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        borderBottom: "1px solid var(--prog-bar-light-blue)",
      }}
      position="sticky"
    >
      <Container
        maxWidth="lg"
        sx={{ minHeight: "fit-content" }}
        className="normalize"
      >
        <Toolbar>
          <Grid container alignItems="center" xs={12}>
            <Avatar
              alt="Alireza Zahiri"
              sx={{ mt: 1, mr: 1, width: 128, height: 128 }}
            />
            <Grid item xs={6} sm container ml={2}>
              <Grid item xs container direction="column" spacing={1}>
                <Typography
                  fontWeight={900}
                  fontSize="18px"
                  letterSpacing="2px"
                  ml="-4px"
                  lineHeight={2}
                >
                  Alireza Zahiri
                </Typography>
                <Typography
                  fontWeight={400}
                  lineHeight={2}
                  color="var(--light-grey)"
                >
                  Software Engineer
                </Typography>
                <Typography
                  fontWeight={400}
                  lineHeight={1}
                  color="var(--light-grey)"
                >
                  21 years old
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid
                  item
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Typography fontWeight={300} lineHeight={2} fontSize="14px">
                    <a href="mailto:itsalireza.zr@gmail.com">
                      itsalireza.zr@gmail.com
                    </a>
                  </Typography>
                  <EmailOutlinedIcon
                    sx={{ color: "var(--light-grey-2)", ml: 1 }}
                  />
                </Grid>
                <Grid
                  item
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Typography fontWeight={300} lineHeight={2} fontSize="14px">
                    +98 911 641 7260
                  </Typography>
                  <PhoneInTalkOutlinedIcon
                    sx={{ color: "var(--light-grey-2)", ml: 1 }}
                  />
                </Grid>
                <Grid
                  item
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Typography fontWeight={300} lineHeight={2} fontSize="14px">
                    Mazandaran, Iran
                  </Typography>
                  <LocationOnOutlinedIcon
                    sx={{ color: "var(--light-grey-2)", ml: 1 }}
                  />
                </Grid>
                <Grid
                  item
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Typography fontWeight={300} lineHeight={2} fontSize="14px">
                    <a href="https://linkedin.com/in/alireza-zahiri">
                      linkedin.com/alireza-zahiri
                    </a>
                  </Typography>
                  <LinkedInIcon sx={{ color: "var(--light-grey-2)", ml: 1 }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const Footer = () => {
  return (
    <footer>
      <Typography
        bgcolor="var(--midnight-blue)"
        color="primary"
        padding="10px"
        textAlign="center"
        fontSize="12px"
        fontWeight={300}
        sx={{
          borderTop: "1px solid var(--prog-bar-light-blue)",
        }}
      >
        Designed and Built by Alireza Zahiri - 2021
      </Typography>
    </footer>
  );
};

const ResumeLayout: FC<Props> = ({ children }) => {
  return (
    <Container
      maxWidth="lg"
      xs={12}
      sx={{ bgcolor: "var(--background-alt)", height: "100vh" }}
      className="normalize"
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default ResumeLayout;
