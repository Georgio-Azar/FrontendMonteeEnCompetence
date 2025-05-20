export default function AgeForm({ register, errors }: any) {
    return (
        <>
        {errors.age && <span className="error">{errors.age.message}</span>}
        <div className="form-row">
            <label htmlFor="age">Age : </label>
            <input
                id="age"
                type="number"
                placeholder="55"
                {...register("age", { valueAsNumber: true })}
                className={errors.age ? "inputError" : "input"}
            />
        </div>
        </>
    )
}