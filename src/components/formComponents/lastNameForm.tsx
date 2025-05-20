export default function LastNameForm({ register, errors }: any) {
    return (
        <>
        {errors.nom && <span className="error">{errors.nom.message}</span>}
        <div className="form-row">
            <label htmlFor="nom">Last name : </label>
            <input 
                id="nom" 
                type="text" 
                placeholder="Doe"
                {...register("nom")}
                className={errors.nom ? "inputError" : "input"}
            />
        </div>
        </>
    )
}