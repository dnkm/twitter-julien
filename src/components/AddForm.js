import React from 'react';

class AddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit() {
    this.props.addPost(this.state.title, this.state.body);
    this.setState({
      title: '', text: ''
    })
  }
	render() {
		return (
			<div>
				<input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)} />
				<textarea name="body" value={this.state.body} onChange={this.handleChange.bind(this)} />
				<button onClick={this.onSubmit.bind(this)}>ADD</button>
			</div>
		);
	}
}

export default AddForm;
