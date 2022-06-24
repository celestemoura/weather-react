import SearchEngine from "./SearchEngine";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <br />
      <small>
        <a
          href="https://github.com/celestemoura/weather-react"
          title="GitHub repository"
          rel="noreferrer"
          target="_blank"
        >
          Open source code
        </a>{" "}
        by Celeste Moura
      </small>
    </div>
  );
}
