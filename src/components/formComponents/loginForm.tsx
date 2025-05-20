import EmailForm from "./emailForm";
import PasswordForm from "./passwordForm";

export default function LoginForm({ register, errors, onSubmit, handleSubmit }: any) {
    return (
        <div id="login-form" className="form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <EmailForm register={register} errors={errors} />
                <PasswordForm register={register} errors={errors} />
                <button type="submit">Login</button><br />
                {errors.root?.api && <span className="error">{errors.root.api.message}</span>}
            </form>
        </div>
    )
}