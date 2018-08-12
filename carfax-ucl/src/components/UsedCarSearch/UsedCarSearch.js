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
                        <div className="certified-preowned-container">
                            <input className="preowned-checkbox" type="checkbox" name="certified-preowned" value="certified-preowned"/>
                            <label for="certified-preowned">Certified Pre-Owned Vehicles</label>
                        </div>
                        <div className="zip-container">
                            <label for="zip-code">near zip code </label>
                            <input className="zip-input" type="text" name="zip-code" minLength="5" maxLength="5"/>
                        </div>
                        <button type="submit" className="search-form-button">Next</button>
                    </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UsedCarSearch;