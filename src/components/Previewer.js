import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import marked from "marked";

export default class Previewer extends Component {
  render() {
    document.body.style.background = "#EEE";

    return (
      <Grid>
        <Row className="show-grid">
          <Input />
        </Row>
      </Grid>
    );
  }
}

class Input extends Component {
  state = { value: "" };

  onChange = e => {
    this.setState({ value: e.target.value });
    this.refs.output.setState({ value: e.target.value });
  };

  render() {
    const style = {
      resize: "none"
    };

    return (
      <div>
        <div className="col-xs-6">
          <h3>Input</h3>
          <textarea
            rows="20"
            className="form-control"
            style={style}
            defaultValue={this.state.value}
            onChange={this.onChange}
          />
        </div>
        <Output ref="output" />
      </div>
    );
  }
}

class Output extends Component {
  state = { value: "" };

  markUp = e => {
    return { __html: marked(this.state.value, { sanitize: true }) };
  };

  render() {
    const style = {
      wordBreak: "break-all",
      wordWrap: "break-word"
    };

    return (
      <div className="col-xs-6">
        <h3>Output</h3>
        <div style={style} dangerouslySetInnerHTML={this.markUp()} />
      </div>
    );
  }
}
