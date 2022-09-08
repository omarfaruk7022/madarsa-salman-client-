import React from "react";

const Banner = () => {
  return (
    <div>
      <section class="relative bg-white">
        <img
          class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src="https://i.ibb.co/TmWgf6y/library-488690-1920.jpg"
          alt="Couple on a bed with a dog"
        />

        <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div class="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong class="font-extrabold text-primary sm:block">
                Forever Home.
              </strong>
            </h1>

            <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="flex flex-wrap mt-8 text-center gap-4">
              <a
                class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-primary sm:w-auto active:bg-primary hover:bg-primary focus:outline-none focus:ring"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-primary sm:w-auto hover:text-primary active:text-primary focus:outline-none focus:ring"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
