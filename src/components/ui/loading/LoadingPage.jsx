import theme from "@/styles/theme";
import logo from "@assets/identity/minetask.png";
import darkLogo from "@assets/identity/minetask-dark.png";
import { CircularProgress, ThemeProvider } from "@mui/material";

const LoadingPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-background pattern fixed w-full z-50 h-screen gap-4 flex flex-col justify-center items-center">
        <div className="relative flex items-center justify-center">
          <CircularProgress
            size={120}
            thickness={1}
            sx={{
              color: "primary",
              opacity: "0.5",
            }}
          ></CircularProgress>
          <div className="absolute animate-pulse">
            <img className="dark:hidden" src={logo} width={50} />
            <img className="hidden dark:block" src={darkLogo} width={50} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoadingPage;
