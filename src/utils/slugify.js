export const slugify = (str) => {
  const slug = str
    .split(".")[1]
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return slug;
};
