import {
  Button,
  TextField,
  Divider,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";
import useGoogleAuth from "../hooks/useGoogleAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema/schema";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const { handleLogin, isLoading, error } = useLogin();
  const { handleGoogleSign, gLoading, gError } = useGoogleAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSumbit = ({ email, password }) => {
    handleLogin(email, password);
  };

  return (
    <Box
      sx={{
        mx: "auto",
        p: 4,
        borderRadius: 2,
      }}
    >
      <form onSubmit={handleSubmit(onSumbit)}>
        <TextField
          label="Email Address"
          type="email"
          variant="standard"
          sx={{ mt: 2 }}
          fullWidth
          {...register("email", {
            value: sessionStorage.getItem("email") || "Mhmd@gmail.com",
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          type="password"
          variant="standard"
          sx={{ mt: 2 }}
          fullWidth
          {...register("password", {
            value: sessionStorage.getItem("password") || "12345678",
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
          sx={{ mt: 2, boxShadow: 0, height: 35 }}
        >
          {isLoading ? <CircularProgress size={20} color="inherit" /> : "Login"}
        </Button>
        {error && (
          <p className="text-sm text-center mt-3 text-red-500">{error}</p>
        )}
      </form>
      <div className="mt-4 text-center w-full">
        <Link
          to={"/auth/reset-password"}
          className="text-sm underline text-primary"
        >
          Forgot your password ?
        </Link>
      </div>
      <Divider sx={{ my: 3 }}>or</Divider>

      <Button
        onClick={handleGoogleSign}
        variant="outlined"
        fullWidth
        startIcon={gLoading ? null : <FcGoogle />}
        disabled={gLoading}
      >
        {gLoading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          "Continue with Google"
        )}
      </Button>
      {gError && (
        <p className="text-sm text-center mt-3 text-red-500">"{gError}"</p>
      )}
    </Box>
  );
};

export default LoginForm;
