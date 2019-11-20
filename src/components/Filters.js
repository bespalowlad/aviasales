import React, {Component} from 'react'
import FilterItem from './FilterItem'

class Filters extends Component {
    constructor (props) {
        super(props)
        this.state = {
            filters: [
                {id: 1, selected: true, value: 'all', name: 'Все'},
                {id: 2, selected: false, value: '0', name: 'Без пересадок'},
                {id: 3, selected: false, value: '1', name: '1 пересадка'},
                {id: 4, selected: false, value: '2', name: '2 пересадки'},
                {id: 5, selected: false, value: '3', name: '3 пересадки'},
            ]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (id, value) {
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

        this.props.setCurrentCheckbox(value)
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