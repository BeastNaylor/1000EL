import "./Image.css";

const Image = ({ logo, id }) => {
  const url = `${process.env.PUBLIC_URL}/images/${logo}.svg`;
  return (
    <div className="image" id={id}>
      <img src={url} />
    </div>
  );
};
export default Image;
