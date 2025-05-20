export default function FirstNameForm({ register, errors }: any) {
    return (
        <>
        {errors.prenom && <span className="error">{errors.prenom.message}</span>}
        <div className="form-row">
            <label htmlFor="prenom">First name : </label>
            <input 
                id="prenom" 
                type="text" 
                placeholder="John"
                {...register("prenom")}
                className={errors.prenom ? "inputError" : "input"}
            />
        </div>
        </>
    );
}