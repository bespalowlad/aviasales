import React, {Component} from 'react';
import './styles/App.css';
import Header from './components/Header'
import Filters from './components/Filters'
import Dashboard from './components/Dashboard'

class App extends Component {
	constructor () {
		super()
		this.state = {
			searchId: '',
			isFetching: true,
			error: false,
			tickets: [],
			currentCheckbox: 'all'
		}
		this.setCurrentCheckbox = this.setCurrentCheckbox.bind(this)
	}

	componentDidMount () {
		this.setState({isFetching: true})

		const searchUrlId = 'https://front-test.beta.aviasales.ru/search'

		fetch(searchUrlId)
			.then(res => res.json())
			.then( ({searchId}) => {

				this.setState({searchId})

				const allTicketsUrl = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`

				fetch(allTicketsUrl)
					.then(res => res.json())
					.then(result => {

						this.setState({
							isFetching: false,
							tickets: result
						}, () => console.log('state after update ', this.state))

					})
					.catch(res => {
						if (res.status === 500) {
							this.setState({
								isFetching: false,
								error: true
							})
						}
					})
			})
	}

	setCurrentCheckbox (value) {
		this.setState({currentCheckbox: value}, () => {
			console.log('currentCheckbox after change ', this.state.currentCheckbox)
		})
	}

	render () {
		const dashboard = !this.state.isFetching && !this.state.error ? <Dashboard tickets={this.state.tickets} currentCheckbox={this.state.currentCheckbox} /> : <p>Loading</p>

		return (
			<div className="App">
				<Header />
				<div className="container">
					<div className="content">
						<Filters setCurrentCheckbox={this.setCurrentCheckbox} />
						{dashboard}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
