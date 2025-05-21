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
                    alt="Visualización del contador"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x200/2A292D/FFFFFF?text=Counter+App';
                    }}
                />
            </div>
            <Counter />
        </div>
    );
}

export default App;
