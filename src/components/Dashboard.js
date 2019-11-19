import React, {Component} from 'react'
import Ticket from './Ticket'

class Dashboard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            tickets: []
        }
    }

    componentDidMount () {
        console.log('data from dashboard ', this.props)
    }

    componentDidUpdate (prevProps) {
        console.log('prevProps ', prevProps)
    }

    render () {
        return (
            <div className="dashboard">
                <div className="switches">
                    <button>Самый дешевый</button>
                    <button>Самый быстрый</button>
                </div>
                <div className="tickets-list">
                    <Ticket />
                    {this.props.tickets.length}
                </div>
            </div>
        )
    }
}

export default Dashboard