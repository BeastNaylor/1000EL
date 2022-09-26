import "./Image.css";

const Image = ({ logo, id }) => {
  return (
    <div className="image" id={id}>
      <img src={process.env.PUBLIC_URL + `/images/${logo}.svg`} />
    </div>
  );
};
export default Image;
