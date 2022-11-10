export const slugifyDoctor = (str) => {
  const slug = str
    .split(".")[1]
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return slug;
};
export const deSlugifyDoctor = (str) => {
  const slug =
    "Dr." +
    str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  return slug;
};

export const slugify = (str) => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return slug;
};
export const deSlugify = (str) => {
  const slug = str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return slug;
};
