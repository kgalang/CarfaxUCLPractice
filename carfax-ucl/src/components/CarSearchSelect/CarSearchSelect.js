import React, {Component} from 'react';
import './CarSearchSelect.css';


class CarSearchSelect extends Component {
    render() {
        return (
            <div className="select-container">
                <select className="search-select">
                    <option value="test 1">Test 1</option>
                    <option value="test 2">Test 2</option>
                </select>
            </div>
        );
    }
}

export default CarSearchSelect;