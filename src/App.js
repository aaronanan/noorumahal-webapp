import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main/Main";
import SideBar from "./components/Main/SideBar";
import Footer from "./components/Main/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />

        <Main />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
