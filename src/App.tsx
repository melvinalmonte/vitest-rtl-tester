import logo from "./logo.svg";
import "./App.css";
import { RootState } from "./store";
import { connect } from "react-redux";
import { increment } from "./features/counter/counterSlice";

type AppProps = {
  value: number;
  increment: () => void;
};

function App({ value, increment }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={increment}>
            count is: {value}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

function mapStateToProps(state: RootState){
  const { counter } = state
  return {
    value: counter.value
  }
}

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
