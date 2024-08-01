import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return `/assets/images/gallery/${asset}`;
}

const photos = Array(36)
  .fill({ asset: `gallery-.jpg`, width: 1920, height: 1080 })
  .map((_, index) => {
    return { asset: `gallery${index + 1}.jpg`, width: 1920, height: 1080 };
  })
  .map(
    ({ asset, width, height }, index) =>
      ({
        src: assetLink(asset, width),
        width,
        height,
        alt: index.toLocaleString(),
        srcSet: breakpoints.map((breakpoint) => ({
          src: assetLink(asset, breakpoint),
          width: width,
          height: height,
        })),
      } as Photo)
  );
export default photos;
