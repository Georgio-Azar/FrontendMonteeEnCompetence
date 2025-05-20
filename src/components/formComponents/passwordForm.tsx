export default function PasswordForm({ register, errors }: any) {
    return (
        <>
        {errors.password && <span className="error">{errors.password.message}</span>}
        <div className="form-row">
            <label htmlFor="password">Password : </label>
            <input
                id="password"
                type="password"
                placeholder="Password"
                {...register("password")}
                className={errors.password ? "inputError" : "input"}
            />
        </div>
        </>
    )
}