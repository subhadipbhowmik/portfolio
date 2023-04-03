import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white p-4 absolute bottom-0 left-0 w-full">
      <div className="container px-4">
        <p className="text-sm text-gray-400 text-center">
          Created with &#10084; by
          <a
            className="text-purple-600"
            href="https://shubhadip.bio.link/"
            rel="nofollow"
            target="_blank"
          >
            {" "}
            Shubhadip Bhowmik
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
