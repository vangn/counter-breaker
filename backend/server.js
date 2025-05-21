const express = require('express');
const cors = require('cors');
const CounterService = require('./counterService');

const app = express();
const counter = new CounterService(10); // Valor inicial 10

app.use(cors());
app.use(express.json());

// Obtener valor actual
app.get('/api/counter', (req, res) => {
    res.json({ value: counter.get() });
});

// Incrementar
app.post('/api/counter/increment', (req, res) => {
    res.json({ value: counter.increment() });
});

// Decrementar
app.post('/api/counter/decrement', (req, res) => {
    res.json({ value: counter.decrement() });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
