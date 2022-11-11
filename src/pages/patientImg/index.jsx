function PatientImg({ src }) {
  return (
    <img
      src={src}
      alt="profile image"
      className=" h-100 w-100 shadow-sm rounded-circle imgBorder"
    />
  );
}

export default PatientImg;
