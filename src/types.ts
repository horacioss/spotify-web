interface Image {
  height: number;
  url: string;
  width: number;
}

interface Followers {
  href: string | null;
  total: number;
}

export interface ArtistProps {
  followers?: Followers | undefined;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string | undefined;
  popularity: number;
  type: string;
}
