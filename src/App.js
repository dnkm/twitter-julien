import React from 'react';
import './App.css';

const Calendar = (props) => {
	let clone = new Date(props.today);
	clone.setDate(1);

	let firstDay = clone.getDay();

	clone.setMonth(clone.getMonth() + 1);
	clone.setDate(0);

	let numDays = clone.getDate();

	return (
		<div className="Calendar">
			<div>su</div>
			<div>m</div>
			<div>tu</div>
			<div>w</div>
			<div>th</div>
			<div>f</div>
			<div>sa</div>
			{new Array(firstDay).fill().map((_, i) => <div key={i} />)}
			{new Array(numDays).fill().map((_, i) => i + 1).map((date) => {
				let className = date === props.today.getDate() ? 'today' : '';

				return (
					<div
						key={date}
						className={className}
						onClick={() => {
							props.setDate(date);
						}}
					>
						{date}
					</div>
				);
			})}
			{new Array((7 - (firstDay + numDays) % 7) % 7).fill().map((_, i) => <div key={i} />)}
		</div>
	);
};

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			today: new Date()
		};
	}

	nextMonth() {
		let clone = new Date(this.state.today);
		clone.setMonth(clone.getMonth() + 1);
		this.setState({ today: clone });
	}
	prevMonth() {
		let clone = new Date(this.state.today);
		clone.setMonth(clone.getMonth() - 1);
		this.setState({ today: clone });
	}
	setDate(date) {
		let clone = new Date(this.state.today);
		clone.setDate(date);
		this.setState({ today: clone });
	}

	render() {
		return (
			<div className="App">
				<h1>
					<button onClick={this.prevMonth.bind(this)}>PREV</button>
					{this.state.today.toDateString()}
					<button onClick={this.nextMonth.bind(this)}>NEXT</button>
				</h1>

				<Calendar today={this.state.today} setDate={this.setDate.bind(this)} />
			</div>
		);
	}
}

export default App;
