import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const renderedImages = images.map((image, id) => {
    return <ImageShow key={id} image={image} />;
  });
  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
