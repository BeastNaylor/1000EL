import Letter from "../components/Letter";
import Information from "../components/Information";
import Image from "../components/Image";
import Xarrow from "react-xarrows";
import "./Oracle.css";

const lineStyles = {
  path: "grid",
  dashness: true,
  showHead: false,
  strokeWidth: 2,
  lineColor: "black",
};

const Overview = () => {
  return (
    <div id="oracle">
      <div className="letters">
        <Letter number="1" letters={["O"]} id="letter-1" />
        <Letter number="2" letters={["R"]} id="letter-2" />
        <Letter number="3" letters={["A"]} id="letter-3" />
        <Letter number="4" letters={["C"]} id="letter-4" />
        <Letter number="5" letters={["L", "E"]} id="letter-5" />
      </div>
      <div className="information">
        <Information title="Observe" id="info-1">
          <p>
            When entering areas for the first time, when circumstances require it or simply if in doubt, conduct a
            visual check of your surrounding environment making reference to the Semiotic Standard
          </p>
        </Information>
        <Information title="Resolve" id="info-2">
          <p>Decide on an appropriate course of action (making use of your skills and equipment where relevant</p>
        </Information>
        <Information title="Act" id="info-3">
          <p>Attempt your course of action</p>
        </Information>
        <Information title="Conclude" id="info-4">
          <p>Determine the outcome of the action and whether follow-up action is required</p>
        </Information>
        <Information title="Leave Evidence" id="info-5">
          <p>
            Record near-collisions, accident precursors and any identified hazards using your Incidents and Near-misses
            form.
          </p>
          <p>Additionally: record a maintenance report at the next MemoComm module you encounter.</p>
        </Information>
      </div>
      <div className="images">
        <Image id="image-1" logo="FE" />
        <Image id="image-2" logo="Mario" />
        <Image id="image-3" logo="Metroid" />
        <Image id="image-4" logo="Xenoblade" />
        <Image id="image-5" logo="Pokemon" />
      </div>
      <Xarrow start="letter-1" end="info-1" {...lineStyles} />
      <Xarrow start="letter-2" end="info-2" {...lineStyles} />
      <Xarrow start="letter-3" end="info-3" {...lineStyles} />
      <Xarrow start="letter-4" end="info-4" {...lineStyles} />
      <Xarrow start="letter-5" end="info-5" {...lineStyles} />
      <Xarrow start="image-1" end="info-1" {...lineStyles} />
      <Xarrow start="image-2" end="info-2" {...lineStyles} />
      <Xarrow start="image-3" end="info-3" {...lineStyles} />
      <Xarrow start="image-4" end="info-4" {...lineStyles} />
      <Xarrow start="image-5" end="info-5" {...lineStyles} />
    </div>
  );
};

export default Overview;
