import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Oracle from "./screens/Oracle";
import Icons from "./screens/Icons";
import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

function App() {
  return (
    <BrowserRouter basename={baseUrl}>
      <Layout>
        <Routes>
          <Route path="/oracle" element={<Oracle />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/cdih" element={<h2>CDIH</h2>} />
          <Route path="/decoder" element={<h2>DECODE</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
