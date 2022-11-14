import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { WhatsDifferent } from "./components/WhatsDifferent";
import { Blockchain } from "./components/Blockchain";
import { CurrentModel } from "./components/CurrentModel";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Blockchain />
      <CurrentModel />
      <WhatsDifferent />
      <Footer />
    </div>
  );
}

export default App;
