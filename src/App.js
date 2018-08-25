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

				let events = props.events.filter((event) => date === event.date);

				return (
					<div
						key={date}
						className={className}
						onClick={() => {
							props.setDate(date);
						}}
					>
						{date}

						{events.length > 0 ? <div className="event-text">{events[0].text}</div> : false}
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
			today: new Date(),
			events: [
				{ year: 2018, month: 7, date: 15, text: 'good weather' },
				{ year: 2018, month: 7, date: 22, text: 'bad weather' },
				{ year: 2018, month: 8, date: 1, text: 'rain shower' }
			],
			eventInputText: ''
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
	addEvent() {
		let newEvent = {
			text: this.state.eventInputText,
			year: this.state.today.getFullYear(),
			month: this.state.today.getMonth(),
			date: this.state.today.getDate()
		};

		this.setState({
			events: [ ...this.state.events, newEvent ],
			eventInputText: ''
		});
	}

	render() {
		return (
			<div className="App">
				<h1>
					<button onClick={this.prevMonth.bind(this)}>PREV</button>
					{this.state.today.toDateString()}
					<button onClick={this.nextMonth.bind(this)}>NEXT</button>
				</h1>

				<Calendar
					today={this.state.today}
					setDate={this.setDate.bind(this)}
					events={this.state.events.filter(
						(event) =>
							event.year === this.state.today.getFullYear() && event.month === this.state.today.getMonth()
					)}
				/>

				<input
					type="text"
					value={this.state.eventInputText}
					onChange={(event) => {
						this.setState({ eventInputText: event.target.value });
					}}
				/>
				<button onClick={this.addEvent.bind(this)}>ADD EVENT</button>
			</div>
		);
	}
}

export default App;
