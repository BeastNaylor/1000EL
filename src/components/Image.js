import "./Image.css";

const Image = ({ logo, id }) => {
  const url = `${process.env.PUBLIC_URL}/images/info/${logo}.png`;
  return (
    <div className="image" id={id}>
      <img src={url} />
    </div>
  );
};
export default Image;
