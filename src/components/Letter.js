import "./Letter.css";

const Letter = ({ number, letters, id }) => {
  return (
    <div className="letter-container" id={id}>
      <label className="number">{number}</label>
      {letters.map(function (letter, i) {
        return (
          <label key={letter} className="letter">
            {letter}
          </label>
        );
      })}
    </div>
  );
};

export default Letter;
