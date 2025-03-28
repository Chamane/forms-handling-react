import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    example: string,
    exampleRequired: string,
}

export default function RHF() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")}/>
            <input {...register("exampleRequired", {required:true})}/>

            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
        </form>
    )
}