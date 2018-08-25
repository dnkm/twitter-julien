import React from 'react';
import Post from './components/Post';
import Header from './components/Header';
import Loading from './components/Loading';
import AddForm from './components/AddForm';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: []
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((posts) => {
			posts.splice(3);
			setTimeout(() => {
				this.setState({ posts: posts });
			}, 1000);
    });
	}
	addPost(title, body) {
		let post = { title: title, body: body, id: this.state.posts.length + 10 };
		this.setState({
			posts: [ ...this.state.posts, post ]
		});
	}
	render() {
		return (
			<div>
				<Header />
				{this.state.posts.length === 0 && <Loading />}
				{this.state.posts.map((post) => <Post key={post.id} post={post} />)}
				<Header />
				<AddForm addPost={this.addPost.bind(this)} />
			</div>
		);
	}
}

export default App;
