import React from "react";
import Image from "../components/atoms/Img/Image";
import { ArtistProps } from "../types";

export interface Props {
  artist: ArtistProps;
}

const Artist: React.FC<Props> = ({ artist }) => {
  return (
    <div>
      <div>{artist.name}</div>
      <Image type="artist" src={artist.images[1].url} alt={artist.name} />
      <div>{artist.popularity}</div>
    </div>
  );
};

export default Artist;
