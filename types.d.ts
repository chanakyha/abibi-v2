type Images = {
  [key: string]: string;
};

interface Project {
  id: string;
  title: string;
  thumbnailImage?: string;
  assets: {
    photos?: string[];
    videos?: string[];
  };
}
