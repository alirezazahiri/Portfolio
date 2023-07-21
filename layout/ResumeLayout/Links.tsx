import { TLinksProps } from "@/types/resume";
import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TerminalIcon from "@mui/icons-material/Terminal";
import LinkIcon from "@mui/icons-material/Link";

const Links: FC<TLinksProps> = ({ linkedin, github, leetcode, website }) => {
  return (
    <Box
      bgcolor="var(--midnight-blue)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={1}
    >
      <Typography
        color="Background"
        textAlign="center"
        fontSize="14px"
        letterSpacing="1px"
        fontWeight={400}
      >
        Links
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" py={1}>
        <a href={website}>
          <LinkIcon sx={{ color: "var(--light-grey-2)", mx: 2 }} />
        </a>
        <a href={github}>
          <GitHubIcon sx={{ color: "var(--light-grey-2)", mx: 2 }} />
        </a>
        <a href={leetcode}>
          <TerminalIcon sx={{ color: "var(--light-grey-2)", mx: 2 }} />
        </a>
        <a href={linkedin}>
          <LinkedInIcon sx={{ color: "var(--light-grey-2)", mx: 2 }} />
        </a>
      </Box>
    </Box>
  );
};

export default Links;
