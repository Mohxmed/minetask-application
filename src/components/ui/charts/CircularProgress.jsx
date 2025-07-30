import { Box, CircularProgress } from "@mui/material";

function CustomCircularProgress({ value }) {
  return (
    <div>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={100}
          size={90}
          thickness={1}
          sx={{
            color: "rgb(84 111 255 / 12%)", // ← لون الخلفية
          }}
        />
        <CircularProgress
          variant="determinate"
          value={value}
          size={90}
          thickness={2}
          sx={{
            color: "#546FFF", // ← لون النسبة (مثل blue-500)
            position: "absolute",
            left: 0,
            "& circle": {
              strokeLinecap: "round",
            },
          }}
        />{" "}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <span className="text-lg">{value}%</span>
        </Box>
      </Box>
    </div>
  );
}

export default CustomCircularProgress;
