import React, { FC } from "react";

// mui
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  Avatar,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";

// icons
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { getAge } from "@/utils/getAge";

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

export interface IHeaderProps {
  name: string;
  field: string;
  birthdate: string;
  email: string;
  phoneNumber: string;
  location: string;
  linkedin: string;
  profileImage: {
    url: string;
  };
}
const Header: FC<IHeaderProps> = ({
  name,
  field,
  birthdate,
  email,
  phoneNumber,
  location,
  linkedin,
  profileImage,
}) => {
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
      position="relative"
    >
      <Container
        maxWidth="md"
        sx={{ minHeight: "fit-content" }}
        className="normalize"
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Avatar
              alt="Alireza Zahiri"
              src={profileImage.url}
              sx={{ mr: 1, width: 128, height: 128 }}
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
                  {name}
                </Typography>
                <Typography
                  fontWeight={400}
                  lineHeight={2}
                  color="var(--light-grey)"
                >
                  {field}
                </Typography>
                <Typography
                  fontWeight={400}
                  lineHeight={2}
                  ml="-4px"
                  color="var(--light-grey)"
                >
                  {getAge(birthdate)} years old
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
                    <a href={`mailto:${email}`}>{email}</a>
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
                    {phoneNumber}
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
                    {location}
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
                    <a href={linkedin}>My Linkedin</a>
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

export interface IFooterProps {
  caption: string;
}
const Footer: FC<IFooterProps> = ({ caption }) => {
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
        {caption}
      </Typography>
    </footer>
  );
};

interface Props extends IHeaderProps, IFooterProps {
  children: JSX.Element;
}

const ResumeLayout: FC<Props> = ({ children, ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{ bgcolor: "var(--background-alt)", height: "100vh" }}
        className="normalize"
        component="div"
      >
        <Header {...rest} />
        <main style={{ backgroundColor: "var(--light-grey-2)" }}>
          {children}
        </main>
        <Footer caption={rest.caption} />
      </Container>
    </ThemeProvider>
  );
};

export default ResumeLayout;
