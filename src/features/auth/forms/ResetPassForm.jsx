import { ThemeProvider } from "@mui/material/styles";
import { Button, TextField, Box, CircularProgress } from "@mui/material";
import theme from "@styles/theme.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../schema/schema";
import useResetPassword from "../hooks/useResetPassword";

const ResetPassForm = () => {
  const { handleResetPassword, isLoading, error } = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resetPasswordSchema) });

  const onSubmit = ({ email }) => {
    handleResetPassword(email);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          mx: "auto",
          p: 4,
          borderRadius: 2,
          backgroundColor: "background.paper",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email Address"
            {...register("email")}
            type="email"
            variant="standard"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
            sx={{ mt: 2, boxShadow: 0 }}
          >
            {isLoading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Reset Password"
            )}
          </Button>
          {error && (
            <p className="text-sm text-center mt-3 text-red-500">
              Server Said: "{error}""
            </p>
          )}
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default ResetPassForm;
