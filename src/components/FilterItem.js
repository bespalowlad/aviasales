import React, {Component} from 'react'

class FilterItem extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <li className="filters-item">
                <label>
                    <input 
                        onChange={() => this.props.handleChange(this.props.item.id, this.props.item.value)} 
                        checked={this.props.item.selected}
                        value={this.props.item.value}
                        type="checkbox" 
                    />
                    <span>{this.props.item.name}</span>
                </label>
            </li>
        )
    }
}

export default FilterItem