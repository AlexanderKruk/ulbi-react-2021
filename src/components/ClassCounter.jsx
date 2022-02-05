import { Component } from "react/cjs/react.production.min";

export class ClassCounter extends Component {
  
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  inc = () => {
    this.setState({count: this.state.count + 1});
  };

  dec = () => {
    this.setState({count: this.state.count - 1});
  };

  render() {
    return(
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </>
    )
  }
}