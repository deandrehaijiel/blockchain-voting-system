import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Story } from "./components/Story";
import { Blockchain } from "./components/Blockchain";
import { VotingSystem } from "./components/VotingSystem";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Story />
      <VotingSystem />
      <Blockchain />
      <Footer />
    </div>
  );
}

export default App;
