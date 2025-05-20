import { useForm } from "react-hook-form";
import registerSchema from "../../schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

import RegisterForm from "../formComponents/registerForm";

type RegisterValues = z.infer<typeof registerSchema>;

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<RegisterValues>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data : RegisterValues) => {
        try {
            console.log("Sending data to API...");
            console.log("Form data:", data);
            const response = await axios.post("http://localhost:3000/users", data);
            console.log("Data sent successfully:", response.data);
        }
        catch (error) {
            let errorMessage : string;
            if (axios.isAxiosError(error)) {
                console.error("Error sending data to API:", error.response?.data);
                if (error.response?.data === "Validation error") {
                    errorMessage = "Email already exists";
                }
                else {
                    errorMessage = "An error occurred while sending data to the API.";
                }
            } else {
                console.error("Error sending data to API:", error);
                errorMessage = "An unknown error occurred.";
            }
            setError("root.api", {
                message: errorMessage,
            });
        }
    }

    return (
        <RegisterForm
            register={register}
            errors={errors}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
        />
    )
}
