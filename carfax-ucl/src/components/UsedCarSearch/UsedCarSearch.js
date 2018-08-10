import React, {Component} from 'react';
import './UsedCarSearch.css';


class UsedCarSearch extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Step 1</h3>
                <div className="search-container">
                    <div className="search-tabs">
                        <button>Make & Model</button>
                        <button>Body Type & Price</button>
                    </div>
                    <div className="search-body">
                    <form method="POST">
                        <div className="select-container">
                            <select className="search-select">
                                <option value="test 1">Test 1</option>
                                <option value="test 2">Test 2</option>
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UsedCarSearch;