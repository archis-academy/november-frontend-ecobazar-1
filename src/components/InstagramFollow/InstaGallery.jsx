import "./InstaGallery.scss";
import { FaInstagram } from "react-icons/fa";

const images = [
  "/images/Tomato.png",
  "/images/Lettuce.png",
  "/images/Leaf.png",
  "/images/Pepper.png",
  "/images/Lettuce-1.png",
  "/images/Lemon.png"
];

const InstaGallery = () => {
  return (
    <div className="insta-gallery">
      {images.map((img, index) => (
        <div className="insta-gallery__card" key={index}>
          <img src={img} alt={`gallery-${index}`} />
          <div className="insta-gallery__overlay">
            <FaInstagram />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstaGallery;