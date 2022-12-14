import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyReview = () => {
  const [myReview, setMyReview] = useState();
  const [user] = useAuthState(auth);
  const email = user.email;

  useEffect(() => {
    fetch(`http://localhost:5000/review/${email}`)
      .then((res) => res.json())
      .then((data) => setMyReview(data?.data));
  }, []);
  console.log(myReview);
  return (
    <div>
      <a
        class="relative block p-8 overflow-hidden border border-gray-100 rounded-lg"
        href=""
      >
        <span class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div class="justify-between sm:flex">
          <div>
            <h5 class="text-xl font-bold text-gray-900">
              Building a SaaS product as a software developer
            </h5>
            <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
          </div>

          <div class="flex-shrink-0 hidden ml-3 sm:block">
            <img
              class="object-cover w-16 h-16 rounded-lg shadow-sm"
              src="https://www.hyperui.dev/photos/man-5.jpeg"
              alt=""
            />
          </div>
        </div>

        <div class="mt-4 sm:pr-8">
          <p class="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl class="flex mt-6">
          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Published</dt>
            <dd class="text-xs text-gray-500">31st June, 2021</dd>
          </div>

          <div class="flex flex-col-reverse ml-3 sm:ml-6">
            <dt class="text-sm font-medium text-gray-600">Reading time</dt>
            <dd class="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
      </a>
    </div>
  );
};

export default MyReview;
