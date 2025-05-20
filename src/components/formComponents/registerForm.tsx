import FirstNameForm from "./firstNameForm"
import LastNameForm from "./lastNameForm"
import AgeForm from "./ageForm"
import EmailForm from "./emailForm"
import PasswordForm from "./passwordForm"

export default function RegisterForm({ register, errors, onSubmit, handleSubmit }: any) {
    return (
        <div id="login-form" className="form">
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FirstNameForm register={register} errors={errors} />
                <LastNameForm register={register} errors={errors} />
                <AgeForm register={register} errors={errors} />
                <EmailForm register={register} errors={errors} />
                <PasswordForm register={register} errors={errors} />
                <button type="submit">Register</button><br />
                {errors.root?.api && <span className="error">{errors.root.api.message}</span>}
            </form>
        </div>
    )
}