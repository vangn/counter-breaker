import React from 'react';
import './assets/styles.css';
import Counter from './Counter';
import placeholderImage from './assets/combo-breaker.gif';

function App() {
    return (
        <div className="app-container">
            <h1>Counter Breaker!!</h1>
            <div className="image-container">
                <img
                    src={placeholderImage}
                    alt="Counter Breaker!!"
                />
            </div>
            <Counter />
        </div>
    );
}

export default App;
