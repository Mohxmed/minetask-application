import { useSignup } from "../hooks/useSignup";
import useGoogleAuth from "../hooks/useGoogleAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signSchema } from "../schema/schema";
import { ThemeProvider } from "@mui/material/styles";
import { FcGoogle } from "react-icons/fc";
import noprofile from "@assets/user/noprofile.png";
import theme from "@styles/theme.js";
import {
  Button,
  TextField,
  Divider,
  Box,
  CircularProgress,
} from "@mui/material";
import { BsCloudUpload } from "react-icons/bs";
import { useEffect, useState } from "react";

const SignupForm = () => {
  const { handleSignup, isLoading, error } = useSignup();
  const { handleGoogleSign, gLoading, gError } = useGoogleAuth();

  // Image State
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [size, setSize] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(signSchema),
  });

  const onSubmit = (data) => {
    const { firstName, lastName, email, password, image } = data;
    const imageFile = image?.[0] || null;
    handleSignup(firstName, lastName, email, password, imageFile);
  };

  const watchedFile = watch("image");
  useEffect(() => {
    const file = watchedFile?.[0];
    if (file) {
      setFileName(file.name);
      setSize((file.size / (1024 * 1024)).toFixed(2));
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setFileName("");
      setSize("");
      setPreview("");
    }
  }, [watchedFile]);

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
          <input
            type="file"
            id="file"
            accept="image/*"
            className="hidden"
            {...register("image")}
          />
          <div className="flex gap-4 flex-row-reverse items-center">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="rounded-full size-14 aspect-square object-cover"
              />
            ) : (
              <img
                src={noprofile}
                alt="Preview"
                className="rounded-full size-14 aspect-square object-cover"
              />
            )}

            <label htmlFor="file" className="w-full h-full">
              <div className="border-b border-gray-500 flex items-center gap-4 hover:bg-primary/20 transition text-slate-700 px-4 py-2 cursor-pointer">
                <BsCloudUpload className="text-primary" size={20} />
                <div>
                  <p className="text-xs">
                    {fileName ? fileName : "Upload Picture (Optinal)"}
                  </p>
                  <p className="text-xs text-slate-500">
                    {size ? size + " MB" : "PNG, JPEG, WEBP Maximum 2MB"}
                  </p>
                </div>
              </div>
            </label>
          </div>
          {errors.image && (
            <p className="text-red-700 text-xs">{errors.image.message}</p>
          )}
          <Box sx={{ display: "flex" }} gap={2}>
            <TextField
              label="First Name"
              variant="standard"
              sx={{ mt: 2 }}
              fullWidth
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
            <TextField
              label="Last Name"
              variant="standard"
              sx={{ mt: 2 }}
              fullWidth
              {...register("lastName")}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Box>
          <TextField
            label="Email Address"
            type="email"
            variant="standard"
            sx={{ mt: 2 }}
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            variant="standard"
            sx={{ mt: 2 }}
            fullWidth
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
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
              "Sign Up"
            )}
          </Button>
          {error && (
            <p className="text-sm text-center mt-3 text-red-500">{error}</p>
          )}
        </form>
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
          <p className="text-sm text-center mt-3 text-red-500">{gError}</p>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default SignupForm;
