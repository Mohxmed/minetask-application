import { Button } from "@mui/material";
import { Link } from "react-router";

function MainButton({ text, to, ...rest }) {
  return (
    <Button
      component={Link}
      to={to}
      variant="contained"
      size="small"
      sx={{
        backgroundColor: "primary.main",
        color: "primary.text",
        fontSize: "0.75rem",
        minHeight: 32,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.3rem",
        boxShadow: "none",
        "& .MuiButton-endIcon": {
          ml: "0.25rem",
        },
        "&:hover": {
          backgroundColor: "primary.hover",
          boxShadow: "none",
        },
      }}
      {...rest}
    >
      {text}
    </Button>
  );
}

export default MainButton;
