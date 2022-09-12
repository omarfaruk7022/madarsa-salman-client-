import React from "react";
import deobond from "../../Images//1200px-Darul_Uloom_Deoband.jpg";

const Blog = () => {
  return (
    <div>
      <div class="relative block bg-black group" href="">
        <img
          class="absolute inset-0 object-cover w-full h-full opacity-75 transition-opacity  group-hover:opacity-50"
          src={deobond}
          alt=""
        />
        <div class="relative p-8">
          <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
          দারুল উলুম দেওবন্দ 
          </p>

          <p class="text-2xl font-bold text-white">দারুল উলুম দেওবন্দ  </p>

          <div class="mt-64">
            <div class="opacity-0 transition-all transform translate-y-8  group-hover:opacity-100 group-hover:translate-y-0">
              <p class="text-sm text-white">
              দারুল উলুম দেওবন্দ (হিন্দি: दारुल उलूम देवबन्द, আরবি ও উর্দু: دارالعلوم دیوبند‎‎) হল ভারতের একটি মাদরাসা। এখান থেকে দেওবন্দি আন্দোলনের সূত্রপাত হয়। উত্তর প্রদেশের সাহারানপুর জেলার দেওবন্দ নামক স্থানে এই মাদ্রাসার অবস্থান। ১৮৬৬ সালে বেশ কয়েকজন বিশিষ্ট ইসলামি পণ্ডিত এটির প্রতিষ্ঠা করেন। মুহাম্মদ কাসেম নানুতুবি তাদের প্রধান ছিলেন। অন্যান্যদের মধ্যে ছিলেন মাওলানা রশীদ আহমেদ গাঙ্গুহী ও সৈয়দ আবিদ হুসাইন। ইসলামি শিক্ষার প্রসারে এটি গুরুত্বপূর্ণ ভূমিকা রাখছে। এটি ভারতের মুসলিম সমাজের নানা অসংগতি, কুপ্রথা ও স্থানীয় আচরণকে সংস্কার করে শরিয়তের নৈতিকতা ও আদবকে প্রতিস্থাপন করতে পেরেছিল এবং মুসলিম সমাজের ইসলামায়ন প্রক্রিয়াকে একটি প্রাতিষ্ঠানিক রূপ দিয়েছিল। ঔপনিবেশিক ও অমুসলিম অধ্যুষিত ভারতে মুসলমানদোর ধর্ম ও সংস্কৃতিকে বাঁচিয়ে রাখার পথ দেখিয়েছে।
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1>this is blog </h1>
    </div>
  );
};

export default Blog;
