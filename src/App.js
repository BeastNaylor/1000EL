import { HashRouter, Routes, Route } from "react-router-dom";
import Oracle from "./screens/Oracle";
import Icons from "./screens/Icons";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Decode from "./screens/Decode";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

function App() {
  return (
    <HashRouter basename={baseUrl}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Oracle />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/cdih" element={<h2>CDIH</h2>} />
          <Route path="/decoder" element={<Decode />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
