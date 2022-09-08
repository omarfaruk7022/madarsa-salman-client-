import React, { useEffect, useState } from "react";

const About = () => {
  const [profileData, setProfileData] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then((res) => res.json())
      .then((data) => setProfileData(data[1]));
  },[]);
  console.log(profileData);
  return (
    <div>
      <h1>Hello this is about page</h1>
    </div>
  );
};

export default About;
