function filterImages(arrImgs) {
  return arrImgs?.filter((item) => !item?.endsWith(".mp4"));
}

function FileType(img) {
  if (
    img?.endsWith(".mp4") ||
    img?.endsWith(".mkv") ||
    img?.endsWith(".mov") ||
    img?.endsWith(".avi") ||
    img?.endsWith(".webm") ||
    img?.endsWith(".wmv") ||
    img?.endsWith(".flv") ||
    img?.endsWith(".m4v") ||
    img?.endsWith(".ogg") ||
    img?.endsWith(".qt")
  ) {
    return "mp4";
  } else if (
    img?.endsWith(".png") ||
    img?.endsWith(".jpg") ||
    img?.endsWith(".jpeg") ||
    img?.endsWith(".gif") ||
    img?.endsWith(".bmp") ||
    img?.endsWith(".webp") ||
    !img
  ) {
    return "img";
  } else {
    return "vr";
  }
}
export { filterImages, FileType };
