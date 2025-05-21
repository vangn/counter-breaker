export const fetchCounter = async () => {
    const response = await fetch('http://localhost:3001/api/counter');
    return await response.json();
};

export const incrementCounter = async () => {
    const response = await fetch('http://localhost:3001/api/counter/increment', {
        method: 'POST'
    });
    return await response.json();
};

export const decrementCounter = async () => {
    const response = await fetch('http://localhost:3001/api/counter/decrement', {
        method: 'POST'
    });
    return await response.json();
};
