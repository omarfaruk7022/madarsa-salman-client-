
import {
  
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useAuthState,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";


import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";


const Signup = () => {
  // const [signInWithGoogle, googleUser, googleLoading, googleError] =
  //   useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let signInError;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
    const gender = data.gender.toLowerCase();
    const category = data.category.toLowerCase();

    const userData = { name, email, age, gender, category };
   
    
    if (error) {
      return;
    } else {
      await createUserWithEmailAndPassword(data.email, data.password);
    //   fetch("https://stormy-beach-33232.herokuapp.com/userprofile", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(userData),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {});

    //   swal("Yayy", "Sign Up  Successfully Completed ", "success");
     
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
              <h2 className="text-center text-2xl font-bold text-secondary">
                Sign Up
              </h2>
              <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-secondary">Name</span>
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
                      <span className="label-text text-secondary">Email </span>
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
                        <span className="label-text text-secondary">Age</span>
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
                    <div>
                      <label className="label">
                        <span className="label-text text-secondary">
                          Gender
                        </span>
                      </label>

                      <select
                        // onChange={(e) => {
                        //   handleChange(e);
                        // }}
                        name="gender"
                        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("gender", {
                          required: {
                            value: true,
                          },
                        })}
                      >
                        <option selected="">Choose a Gender</option>
                        <option value="MAlE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHERS">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 my-4">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text text-secondary">
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
                    <div>
                      <label className="label">
                        <span className="label-text text-secondary">
                          Select your Category
                        </span>
                      </label>

                      <select
                        id="countries"
                        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("category", {
                          required: {
                            value: true,
                          },
                        })}
                      >
                        <option selected="">Choose Category</option>
                        <option value="EMPLOYEE">Employee</option>
                        <option value="STUDENT">Student</option>
                      </select>
                    </div>
                  </div>

                  {signInError}

                  <input
                    className="btn btn-outline w-full  hover:bg-secondary border-secondary hover:border-secondary"
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