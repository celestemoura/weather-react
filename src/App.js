import Header from "./Header";
import CurrentLocation from "./CurrentLocation";
import Today from "./Today";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";
import "./Header.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <CurrentLocation />
        <Today />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
