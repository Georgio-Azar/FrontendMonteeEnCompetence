import { useForm } from "react-hook-form";
import loginSchema from "../../schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/authSlice";
import type { AppDispatch } from "../../store/store";
import { jwtDecode } from "jwt-decode";

import LoginForm from "../formComponents/loginForm";

type LoginValues = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: LoginValues) => {
    try {
      console.log("Sending data to API...");
      console.log("Form data:", data);
      const response = await axios.post("http://localhost:3000/auth/login", data);
      console.log("Data sent successfully:", response.data.message);
      console.log("Tokens received:", response.data.accesToken);

      const decodedToken = jwtDecode<{ id : string }>(response.data.accesToken);
      console.log("Decoded token:", decodedToken);
      console.log("User ID:", decodedToken.id);

      dispatch(setToken({
        userId: decodedToken.id,
        accessToken: response.data.accesToken,
      }))

    } catch (error) {
      let errorMessage: string;
      if (axios.isAxiosError(error)) {
        console.error("Error sending data to API:", error.response?.data);
        if (error.response?.data === "Invalid password" || error.response?.data === "User not found") {
          errorMessage = "Invalid email or password";
        }
        else {
          errorMessage = "An error occurred while sending data to the API.";
        }
      } else {
        errorMessage = "An unknown error occurred.";
      }
      setError("root.api", {
        message: errorMessage,
      });
    }
  }

  return (
    <LoginForm
      register={register}
      errors={errors}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  )
}
