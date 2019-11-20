import React, {Component} from 'react'

class Ticket extends Component {

    componentDidMount () {
        console.log('One ticket data ', this.props.ticket)
    }

    render () {
        const ticket = this.props.ticket

        return (
            <div className="ticket">
                <header className="ticket-header">
                    <div className="ticket-price">{ticket.price}</div>
                    <div className="ticket-company">{ticket.carrier}</div>
                </header>
                <div className="ticket-info">
                    <div className="ticket-origin">
                        <div className="ticket-date">
                            <div>{ticket.segments[0].origin} - {ticket.segments[0].destination}</div>
                            <div>{ticket.segments[0].date}</div>
                        </div>
                        <div className="ticket-duration">{ticket.segments[0].duration}</div>
                        <div className="ticket-stops">
                            <div>{ticket.segments[0].stops.length} пересадки</div>
                            <div>
                                {ticket.segments[0].stops.map((s, idx) => <span key={idx}>{s}</span>)}
                            </div>
                        </div>
                    </div>
                    <div className="ticket-destination">
                    <div className="ticket-date">
                            <div>{ticket.segments[1].origin} - {ticket.segments[1].destination}</div>
                            <div>{ticket.segments[1].date}</div>
                        </div>
                        <div className="ticket-duration">{ticket.segments[1].duration}</div>
                        <div className="ticket-stops">
                            <div>{ticket.segments[1].stops.length} пересадки</div>
                            <div>
                                {ticket.segments[1].stops.map((s, idx) => <span key={idx}>{s}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ticket