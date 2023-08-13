import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image, id) => {
    return <ImageShow key={id} image={image} />;
  });
  return <div>{renderedImages}</div>;
}

export default ImageList;
