import React, {Component} from 'react'
import Ticket from './Ticket'

class Dashboard extends Component {

    componentDidMount () {
        console.log('data from dashboard ', this.props)
    }

    render () {
        let arr = this.props.tickets.tickets

        const tickets = arr
            .filter((t, i) => i < 5)
            .filter((ticket, index) => {
                if (this.props.currentCheckbox === 'all') {
                    return ticket
                } else if (this.props.currentCheckbox == ticket.segments[0].stops.length) {
                    return ticket
                }
            })
            .map((t, idx) => {
                return <Ticket ticket={t} key={idx} />
            })

        return (
            <div className="dashboard">
                <div className="switches">
                    <button>Самый дешевый</button>
                    <button>Самый быстрый</button>
                </div>
                <div className="tickets-list">
                    {tickets}
                </div>
            </div>
        )
    }
}

export default Dashboard