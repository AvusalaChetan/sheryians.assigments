import {useForm} from "react-hook-form";
import axios from "axios";
const App = () => {
  const {handleSubmit, register} = useForm();

  const submitHandiler = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("profile", data.profile[0]);

    try {
      await axios.post("http://localhost:8080/create-profile/", formData);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center border border-solid border-black">
      <form onSubmit={handleSubmit(submitHandiler)}>
        <div>
          <input type="text" placeholder="enter name" {...register("name")} />
        </div>
        <div>
          <input type="text" placeholder="enter name" {...register("email")} />
        </div>
        <div>
          <input
            type="file"
            placeholder="enter name"
            {...register("profile")}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default App;
