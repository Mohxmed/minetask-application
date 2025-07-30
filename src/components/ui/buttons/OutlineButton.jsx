import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router";

function OutlineButton({ text, to, ...rest }) {
  return (
    <Button
      LinkComponent={Link}
      to={to}
      variant="contained"
      size="small"
      sx={{
        backgroundColor: "transparent",
        color: "primary.main",
        fontSize: "0.75rem",
        boxShadow: "none",
        minHeight: 32,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.3rem",
        border: "1px solid",
        "&:hover": {
          backgroundColor: "primary.lowHover",
          boxShadow: "none",
        },
      }}
      {...rest}
    >
      {text}
    </Button>
  );
}

export default OutlineButton;
