import React, { useState, useEffect } from 'react';
import { fetchCounter, incrementCounter, decrementCounter } from './api';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadInitialValue = async () => {
            try {
                const { value } = await fetchCounter();
                setCount(value);
            } catch (error) {
                console.error('Error loading counter:', error);
            } finally {
                setLoading(false);
            }
        };
        loadInitialValue();
    }, []);

    const handleIncrement = async () => {
        const { value } = await incrementCounter();
        setCount(value);
    };

    const handleDecrement = async () => {
        const { value } = await decrementCounter();
        setCount(value);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <div className="button-group">
                <button className="decrement-btn" onClick={handleDecrement}>
                    Decrementar
                </button>
                <button className="increment-btn" onClick={handleIncrement}>
                    Incrementar
                </button>
            </div>
        </div>
    );
};

export default Counter;
