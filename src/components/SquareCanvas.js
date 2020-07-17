import * as React from "react";
import Square from "./Square";

class SquareCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rotation: 0 };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this.tick);
  }

  tick() {
    const rotation = this.state.rotation + 0.04;
    this.setState({ rotation });
    requestAnimationFrame(this.tick);
  }

  render() {
    return <Square rotation={this.state.rotation} width={200} height={200} />;
  }
}

export default SquareCanvas;
