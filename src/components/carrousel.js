import React from "react";
import Carousel from "react-elastic-carousel";
import "./styles/carrousel.scss";
function Mosaic({ items }) {
  return (
    <div className="container-carrousel">
      {Array.isArray(items) ? (
        <Carousel>
          {items.map((item, index) => (
            <div key={index}>
              <img src={item} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      ) : (
        ""
      )}
    </div>
  );
}

export default Mosaic;
