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
			isFetching: false,
			tickets: []
		}
	}

	componentDidMount () {
		this.setState({
			searchId: '',
			isFetching: true,
			tickets: []
		})

		const searchUrlId = 'https://front-test.beta.aviasales.ru/search'

		fetch(searchUrlId)
			.then(res => res.json())
			.then( ({searchId}) => {

				// this.setState({searchId})
				this.setState({
					searchId,
					isFetching: true,
					tickets: []
				})

				const allTicketsUrl = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`

				fetch(allTicketsUrl)
					.then(res => res.json())
					.then(result => {

						this.setState({
							searchId,
							isFetching: false,
							tickets: result
						}, () => console.log('state after update ', this.state.tickets))

					})
			})
	}

	render () {
		const dashboard = !this.state.isFetching ? <Dashboard tickets={this.state.tickets} /> : <p>Loading</p>

		return (
			<div className="App">
				<Header />
				<div className="container">
					<div className="content">
						<Filters />
						{dashboard}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
