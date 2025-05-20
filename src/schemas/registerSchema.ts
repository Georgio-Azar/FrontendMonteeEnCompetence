import { z } from 'zod';

export const registerSchema = z.object({
    nom: z.string().min(1, { message: "Nom requis" }),
    prenom: z.string().min(1, { message: "Prénom requis" }),
    age : z.number().min(1, { message: "Age requis" }),
    email: z.string().email({ message: "Email invalide" }),
    password: z.string()
        .min(12, { message: "Le mot de passe doit contenir au moins 12 caractères." })
        .regex(/[a-z]/, { message: "Le mot de passe doit contenir au moins une lettre minuscule." })
        .regex(/[A-Z]/, { message: "Le mot de passe doit contenir au moins une lettre majuscule." })
        .regex(/[0-9]/, { message: "Le mot de passe doit contenir au moins un chiffre." })
        .regex(/[^a-zA-Z0-9]/, { message: "Le mot de passe doit contenir au moins un caractère spécial." }),
});

export default registerSchema;