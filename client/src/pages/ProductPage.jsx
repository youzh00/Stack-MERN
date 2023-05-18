import { useForm } from "react-hook-form";

export default function ProductPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex min-h-screen items-center justify-center gap-8 bg-white">
      <div>
        <img src="/assets/chair.png" alt="" className="h-72 w-72" />
      </div>
      <div className="text-red-600">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register("example")} />

          <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
