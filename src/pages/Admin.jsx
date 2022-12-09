import React from "react";

const Gallery = () => {
  // check if user is logged in
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  } else {
    console.log("logged in");
  }

  return <div>Gallery</div>;
};

export default Gallery;
