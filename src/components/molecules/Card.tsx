import * as React from "react";

interface Props {
  image: Element;
  name: Element;
}

const Card: React.FC<Props> = ({ image, name }) => {
  return (
    <div className="card-container">
      <div className="image-container">{image}</div>
      <div>{name}</div>
    </div>
  );
};

export default Card;
