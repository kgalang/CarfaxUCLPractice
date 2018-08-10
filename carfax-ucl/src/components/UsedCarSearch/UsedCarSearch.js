import React, {Component} from 'react';
import './UsedCarSearch.css';
import CarSearchSelect from '../CarSearchSelect/CarSearchSelect';


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
                        <CarSearchSelect />
                        <CarSearchSelect />
                        <button type="submit">Submit</button>
                    </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UsedCarSearch;