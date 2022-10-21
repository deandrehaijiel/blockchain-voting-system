import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { WhatsDifferent } from "./components/WhatsDifferent";
import { Blockchain } from "./components/Blockchain";
import { VotingSystem } from "./components/VotingSystem";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <WhatsDifferent />
      <VotingSystem />
      <Blockchain />
      <Footer />
    </div>
  );
}

export default App;
