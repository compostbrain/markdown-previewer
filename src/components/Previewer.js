import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}
}

	handleChange(event) {
		this.setState({value: event.target.value});
	}


	render() {
		return (
			<div className={style.col-xs-6}>
				<form action="">
					<label htmlFor="">Enter Markdown
						<textarea name="" id="" cols="30" rows="10"></textarea>
					</label>
				</form>
			</div>
		)
	}

class Previewer extends Component {
	render() {
		return (
			div
		)
	}
};

export default Previewer;
// class Output extends Component {
// 	getInitialState: function () {
// 		return { value: "" };
// 	},
//
// 	markUp: function () {
// 		return { __html: marked(this.state.value, { sanitize: true }) };
// 	},
//
// 	render: function () {
//
// 		const style = {
// 			"wordBreak": "break-all",
// 			"wordWrap": "break-word"
// 		};
//
// 		return (
// 			<div className="col-xs-6">
// 				<h3>Output</h3>
// 				<div style={style} dangerouslySetInnerHTML={this.markUp()}></div>
// 			</div>
// 		);
// 	}
// };
//
//
// class Input extends Component {
// 	getInitialState: function () {
// 		return { value: "" };
// 	},
//
// 	onChange: function (e) {
// 		this.setState({ value: e.target.value });
// 		this.refs.output.setState({ value: e.target.value });
// 	},
//
// 	render: function () {
// 		const style = {
// 			resize: "none"
// 		};
//
// 		return (
// 			<div>
// 				<div className="col-xs-6">
// 					<h3>Input</h3>
// 					<textarea rows="20" className="form-control" style={style} defaultValue={this.state.value} onChange={this.onChange}></textarea>
// 				</div>
// 				<Output ref="output"/>
// 			</div>
// 		);
// 	}
// });
//
//
