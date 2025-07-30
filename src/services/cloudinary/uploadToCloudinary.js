export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "users_uploads");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dp5eyyjqm/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  if (!res.ok)
    throw new Error(data.error?.message || "Cloudinary Upload Failed");

  return data.secure_url;
};
