import React, { FC } from "react";

// mui
import { Typography, Button } from "@mui/material";
import { TFooterProps } from "@/types/resume";
import { printWindow } from "@/utils/print";

const Footer: FC<TFooterProps> = ({ caption }) => {
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
        sx={{ width: "100%", borderRadius: 0 }}
        className="no-print"
      >
        print
      </Button>
    </footer>
  );
};

export default Footer;
