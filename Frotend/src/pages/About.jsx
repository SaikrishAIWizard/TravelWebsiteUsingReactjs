import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          At Char Dham Tourism, we are passionate about facilitating transformative pilgrimages to the sacred Char Dham sites in India. Our mission is to provide pilgrims with a seamless and enriching experience as they embark on their spiritual journey. With years of experience in the travel industry and a deep understanding of the cultural and religious significance of the Char Dham, our team is dedicated to crafting meticulously planned itineraries that cater to the spiritual needs and preferences of our clients.
        At Char Dham Tourism, we believe in transparency, integrity, and personalized service. Our website serves as a comprehensive resource for pilgrims, offering detailed information about each Dham, travel tips, accommodation options, and more.
        Whether you're a seasoned pilgrim or embarking on your first spiritual journey, we are here to support you every step of the way. Trust Char Dham Tourism to make your pilgrimage a truly unforgettable and transformative experience.
          </p>
          <br />
          <p>
          Welcome to Chardham Yatra Tourism - your gateway to an unforgettable pilgrimage experience! Embark on a spiritual journey like no other with our comprehensive range of services designed to make your pilgrimage seamless and enriching.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
