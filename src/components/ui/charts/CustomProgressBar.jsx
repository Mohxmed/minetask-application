import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

const RoundedLinearProgress = styled(LinearProgress)(() => ({
  height: 5,
  borderRadius: 5,
  "&.MuiLinearProgress-colorPrimary": {
    backgroundColor: "rgb(84 111 255 / 12%)",
  },
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: "#546FFF",
  },
}));

export default function CustomProgressBar({ value }) {
  return (
    <Box sx={{ width: "100%" }}>
      <RoundedLinearProgress variant="determinate" value={value} />
    </Box>
  );
}
