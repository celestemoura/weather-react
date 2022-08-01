import Weather from "./Weather";
// import create from "zustand/react";
import "./App.css";

export default function App() {
  // const unitStore = create((set) => ({
  //   units: 2,
  //   changeUnit: () => set((state) => ({units: state.units}))
  // }))

  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
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
