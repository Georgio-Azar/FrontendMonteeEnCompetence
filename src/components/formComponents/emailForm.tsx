export default function EmailForm({ register, errors }: any) {
    return (
        <>
        {errors.email && <span className="error">{errors.email.message}</span>}
        <div className="form-row">
            <label htmlFor="email">Email : </label>
            <input
                id="email"
                type="email"
                placeholder="exampl@mail.com"
                {...register("email")}
                className={errors.email ? "inputError" : "input"}
            />
        </div>
        </>
    )
}