import React, {Component} from 'react'
import FilterItem from './FilterItem'

class Filters extends Component {
    constructor (props) {
        super(props)
        this.state = {
            filters: [
                {id: 1, selected: false, name: 'Все'},
                {id: 2, selected: false, name: 'Без пересадок'},
                {id: 3, selected: false, name: '1 пересадка'},
                {id: 4, selected: false, name: '2 пересадки'},
                {id: 5, selected: false, name: '3 пересадки'},
            ]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (id) {
        console.log('filter id ', id)

        this.setState( prevState => {
            let changeFilters = prevState.filters.map(item => {
                if(item.id === id) {
                    item.selected = !item.selected
                }
                return item
            })
            return {
                filters: changeFilters
            }
        })
    }

    render () {
        const filters = this.state.filters.map( (f, index) => {
            return <FilterItem key={index} item={f} handleChange={this.handleChange} />
        })

        return (
            <div className="filters">
                <p>Количество пересадок</p>
                <ul className="filters-list">
                    {filters}
                </ul>
            </div>
        )
    }
}

export default Filters