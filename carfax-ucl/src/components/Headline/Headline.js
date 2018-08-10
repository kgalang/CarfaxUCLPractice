import React from 'react';
import './Headline.css';


const Headline = () => {
    return (
        <section className='headline'>
            <h2>Shopping for a Used Car?</h2>
            <h3>Every car comes with a <br/>
            <strong className="headline-strong">FREE CARFAX Report!</strong></h3>
        </section>
    );
}

export default Headline;