import React, { FC } from "react";

// mui
import { Typography, Button } from "@mui/material";
import { TFooterProps } from "@/types/resume";
import { printWindow } from "@/utils/print";

const Footer: FC<TFooterProps> = ({ caption }) => {
  return (
    <footer className="no-print">
      <Button
        variant="outlined"
        onClick={printWindow()}
        sx={{ width: "100%", borderRadius: 0 }}
      >
        print
      </Button>
      <Typography
        bgcolor="var(--midnight-blue)"
        color="primary"
        padding="24px 16px"
        textAlign="center"
        fontSize="14px"
        fontWeight={300}
      >
        {caption}
      </Typography>
    </footer>
  );
};

export default Footer;
