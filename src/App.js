import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>What's the weather like?</h1>
        <Weather defaultCity="London" />
        <footer>
          <small id="me">
            <a href="https://github.com/ElenaSilv/Weather-app">Open-source</a>{" "}
            project coded by Elena Silvestri Cecinelli
          </small>
        </footer>
      </div>
    </div>
  );
}
