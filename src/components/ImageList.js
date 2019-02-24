import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = props => {
  //always console.log first and to see if the props have been passed to child
  console.log(props.images);
  const image = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{image}</div>;
};

export default ImageList;
