import React, { Component, Profiler } from "react";
import FlameChart from "./FlameChart";
import AutoSizer from "react-virtualized-auto-sizer";
import "./App.css";

class App extends Component {
  state = {
    data: null,
  };
  loadData = () => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  };
  render() {
    const { data } = this.state;
    if (data === null) {
      return <button onClick={this.loadData}>Load data</button>;
    }
    return (
      <div className="App">
        <Profiler
          id="autosizerWithFlameChat"
          onRender={(
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime,
            interactions
          ) => {
            console.info("id", id);
            console.info("phase", phase);
            console.info("actualDuration", actualDuration);
            console.info("baseDuration", baseDuration);
            console.info("startTime", startTime);
            console.info("commitTime", commitTime);
            console.info("interactions", interactions);
          }}
        >
          <AutoSizer>
            {({ height, width }) => (
              <FlameChart data={data} height={height} width={width} />
            )}
          </AutoSizer>
        </Profiler>
      </div>
    );
  }
}

export default App;
