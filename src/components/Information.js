import "./Information.css";

const Information = ({ title, children, id }) => {
  return (
    <div className="info-container" id={id}>
      <p className="heading">{title}</p>
      <div className="content"> {children}</div>
    </div>
  );
};

export default Information;
