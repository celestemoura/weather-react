import Weather from "./Weather";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <Forecast />
        <footer>
          <p>
            <a
              href="https://github.com/celestemoura/weather-react"
              title="GitHub repository"
              target="_blank"
              rel="noreferrer"
            >
              Open source code{" "}
            </a>
            by Celeste Moura
          </p>
        </footer>
      </div>
    </div>
  );
}
