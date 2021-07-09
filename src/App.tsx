import React, { useEffect, useState } from "react";
//import { getArtistData } from "./api/getArtist";
import Artist from "./Artist/Artist";
import { ArtistProps } from "./types";
import artist from "./data/artist.json";

const App: React.FC = () => {
  //const [artistData, setArtistData] = useState<ArtistProps>();
  const artistData: ArtistProps = artist;
  //useEffect(() => {
  //const data = async () => {
  //setArtistData(await getArtistData());
  //};
  //data();
  //}, []);

  return (
    <div>{artist ? <Artist artist={artistData} /> : <div>No Data</div>}</div>
  );
};

export default App;
