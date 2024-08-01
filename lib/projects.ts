const projects: Project[] = [
  {
    id: "cosmic-spirit",
    title: "Cosmic Spirit",
    assets: {
      photos: Array(145)
        .fill(0)
        .map((_, index) => {
          return `/assets/images/projects/cosmic_spirit/image${index + 1}.jpg`;
        }),
    },

    thumbnailImage: "/assets/images/projects/cosmic_spirit/image40.jpg",
  },
  {
    id: "forrest-explosion-pictures",
    title: "Forest Explosion",
    assets: {
      photos: Array(24)
        .fill(0)
        .map((_, index) => {
          return `/assets/images/projects/forrest_explosion_pictures/image${
            index + 1
          }.jpg`;
        }),
    },
    thumbnailImage:
      "/assets/images/projects/forrest_explosion_pictures/image3.jpg",
  },
  {
    id: "mystical-union",
    title: "Mystical Union",
    assets: {
      photos: Array(81)
        .fill(0)
        .map((_, index) => {
          return `/assets/images/projects/mystikal_union_2.0/photos/image${
            index + 1
          }.jpg`;
        }),
    },

    thumbnailImage:
      "/assets/images/projects/mystikal_union_2.0/photos/image2.jpg",
  },
  {
    id: "srbr",
    title: "SRBR & Associates LLP 40th Year Ruby Anniversary Pictures",
    assets: {
      photos: Array(117)
        .fill(0)
        .map((_, index) => {
          return `/assets/images/projects/srbr/image${index + 1}.jpeg`;
        }),
      videos: Array(1)
        .fill(0)
        .map((_, index) => {
          return `/assets/videos/srbr/image118.mp4`;
        }),
    },
    thumbnailImage: "/assets/images/projects/srbr/image78.jpeg",
  },
  {
    id: "spartan-bully-kingdom",
    title: "Spartan Bully Kingdom",
    assets: {
      photos: Array(5)
        .fill(0)
        .map((_, index) => {
          return `/assets/images/projects/spartan_bully_kingdom/photos/image${
            index + 1
          }.JPG`;
        }),
      videos: Array(2)
        .fill(0)
        .map((_, index) => {
          return `/assets/videos/spartan_bully_kingdom/video${index + 1}.MP4`;
        }),
    },
    thumbnailImage:
      "/assets/images/projects/spartan_bully_kingdom/photos/image5.JPG",
  },
  {
    id: "pyro-commic-spirit",
    title: "Pyro Commic Spirit",
    assets: {
      videos: Array(7)
        .fill(0)
        .map((_, index) => {
          return `/assets/videos/pyro_commic_spirit/videos${index + 1}.mov`;
        }),
    },

    thumbnailImage:
      "/assets/images/projects/spartan_bully_kingdom/photos/image5.JPG",
  },
  {
    id: "pyro_mystrical",
    title: "Pyro Mystical",
    assets: {
      videos: Array(12)
        .fill(0)
        .map((_, index) => {
          return `/assets/videos/pyro_mystrical/video${index + 1}.mov`;
        }),
    },
    thumbnailImage:
      "/assets/images/projects/spartan_bully_kingdom/photos/image5.JPG",
  },
  {
    id: "pyro_speedfreakl",
    title: "Pyro Speedfreak",
    assets: {
      videos: Array(12)
        .fill(0)
        .map((_, index) => {
          return `/assets/videos/pyro_speedfreak/video${index + 1}.mov`;
        }),
    },
    thumbnailImage:
      "/assets/images/projects/spartan_bully_kingdom/photos/image5.JPG",
  },
  {
    id: "mystical-uninon-2.0",
    title: "Mystical Union 2.0",
    assets: {
      photos: Array(81)
        .fill(0)
        .map((_, index) => {
          return `/assets/images/projects/mystikal_union_2.0/photos/image${
            index + 1
          }.JPG`;
        }),
    },
    thumbnailImage:
      "/assets/images/projects/mystikal_union_2.0/photos/image35.JPG",
  },
];

export { projects };
