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
  Button,
} from "@mui/material";

// icons
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { getAge } from "@/utils/getAge";
import { printWindow } from "../utils/print";

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
        height: 240,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--prog-bar-light-blue)",
      }}
      position="relative"
    >
      <Container sx={{ minHeight: "fit-content" }} className="normalize">
        <Toolbar>
          <Grid container alignItems="center" flexWrap="nowrap">
            <Avatar
              alt={name}
              src={profileImage.url}
              sx={{ mr: 1, width: 90, height: 90 }}
            />
            <Grid item xs={12} sm container ml={2}>
              <Grid item xs container direction="column" spacing={1}>
                <Typography
                  fontWeight={700}
                  fontSize="18px"
                  letterSpacing="2px"
                  ml="-4px"
                  lineHeight={2}
                  className="lg-font-size-fix"
                >
                  {name}
                </Typography>
                <Typography
                  fontWeight={400}
                  lineHeight={2}
                  color="var(--light-grey)"
                  className="md-font-size-fix"
                >
                  {field}
                </Typography>
                <Typography
                  fontWeight={400}
                  lineHeight={2}
                  ml="-4px"
                  color="var(--light-grey)"
                  className="md-font-size-fix"
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
                  <Typography
                    fontWeight={300}
                    lineHeight={2}
                    fontSize="14px"
                    className="md-font-size-fix"
                  >
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
                  <Typography
                    fontWeight={300}
                    lineHeight={2}
                    fontSize="14px"
                    className="md-font-size-fix"
                  >
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
                  <Typography
                    fontWeight={300}
                    lineHeight={2}
                    fontSize="14px"
                    className="md-font-size-fix"
                  >
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
                  <Typography
                    fontWeight={300}
                    lineHeight={2}
                    fontSize="14px"
                    className="md-font-size-fix"
                  >
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
        padding="24px 16px"
        textAlign="center"
        fontSize="14px"
        fontWeight={300}
        sx={{
          borderTop: "1px solid var(--prog-bar-light-blue)",
        }}
      >
        {caption}
      </Typography>
      <Button
        variant="outlined"
        onClick={printWindow()}
        sx={{ width: "100%" }}
        className="no-print"
      >
        print
      </Button>
    </footer>
  );
};

interface Props extends IHeaderProps, IFooterProps {
  children: JSX.Element;
}

function ResumeLayout({ children, ...rest }: Props) {
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
          style={{ backgroundColor: "var(--light-grey-2)", padding: "0 16px" }}
        >
          {children}
        </main>
        <Footer caption={rest.caption} />
      </Container>
    </ThemeProvider>
  );
}

export default ResumeLayout;
