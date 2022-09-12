import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const email = user.email
  const date = new Date();
  const formattedDate = format(date, "PP");
  const formattedDate2 = format(date, "p");
  console.log(formattedDate);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = {
      reviews: e.target.reviews?.value,
      name: e.target.name?.value,
      email: email,
      date: formattedDate,
      time: formattedDate2,
   
    };

    if (
      review.reviews &&
      
      review.name 
      
      
    ) {
      console.log(review);
      fetch(`http://localhost:5000/review`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          swal("Review Added Successfully", "", "success");
        });
    } else {
      swal("Please fill all the fields", "", "error");
    }

    e.target.reset();
  };

  const { register } = useForm();
  return (
    <div className="my-5 flex items-center justify-center">
      <div className="card w-96 shadow-xl  ">
        <h2 className="text-2xl text-center mt-4">Add Review</h2>
        <div className="card-body">
          <form className="my-5 " onSubmit={handleSubmit}>
            <input
              className="input my-2 w-full  focus:ring-primary focus:border-primary border-gray-300"
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
            />

            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
            name="reviews"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary "
              placeholder="Your message..."
            ></textarea>

            
            <br />
            <button>
              <input
                className="input lg:ml-28  btn btn-outline cursor-pointer  hover:bg-primary hover:border-primary text-white bg-white text-black"
                type="submit"
                value="Post "
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
