import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useAuthState,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";


import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import swal from "sweetalert";
import { useEffect } from "react";
import Loading from "./Loading";

const Signup = () => {
  // const [signInWithGoogle, googleUser, googleLoading, googleError] =
  //   useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let signInError;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  useEffect( () =>{
    if (user) {
        navigate(from, { replace: true });
    }
}, [user, from, navigate])
if(loading){
  return <Loading/>
}
  // if (user || googleUser) {
  //   swal("Yayy", "Sign Up  Successfully Completed ", "success");
  // }

  // if (error || googleError || updateError) {
  //   swal("Something Wrong", "Sign up Failed", "error");
  // }
  // const [gender, setGender] = useState("");
  // const handleChange = (e) => {
  //   setGender(e.target.value);
  //   console.log(gender);
  // };

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const age = Number(data.age);

    const userData = { name, email, age };

    if (error) {
      return;
    } else {
      await createUserWithEmailAndPassword(data.email, data.password);
        fetch("http://localhost:5000/profile", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {});

        swal("Yayy", "Sign Up  Successfully Completed ", "success");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen my-28">
        <div className="mr-28 hidden lg:block">
          <img alt="" />
        </div>
        <div className="card w-[600px] bg-base-100 shadow-xl mx-3 lg:mx-0">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold text-primary">
              Sign Up
            </h2>
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-primary">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered "
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-primary">Email </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered "
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control  grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5">
                  <div className="">
                    <label className="label">
                      <span className="label-text text-primary">Age</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Your Age"
                      className="input input-bordered w-full max-w-xs"
                      {...register("age", {
                        required: {
                          value: true,
                          message: "Age is required",
                        },
                      })}
                    />
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text text-primary">
                        Password{" "}
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered w-full max-w-xs"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 character or longer",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>
                

                {signInError}

                <input
                  className="btn btn-outline w-full  hover:bg-primary border-primary hover:border-primary"
                  type="submit"
                  value="Sign Up"
                />
              </form>
            </div>
            <div className="divider">OR</div>
            <div className="flex">
              <p>
                {" "}
                <small>
                  Already have an account ?{" "}
                  <Link to="/login">
                    <span className="underline cursor-pointer text-blue-500">
                      Please Login
                    </span>
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
