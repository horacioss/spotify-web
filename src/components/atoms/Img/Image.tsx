import * as React from "react";

import "./image.scss";

interface Props {
  src: string;
  alt: string | undefined;
  type: string;
}

const Image: React.FC<Props> = ({ src, alt, type }) => {
  return (
    <div className={type === "artist" ? "circle-img" : "rect-image"}>
      <img {...{ src }} {...{ alt }} />
    </div>
  );
};

export default Image;
