import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Counter from '../Counter';
import { fetchCounter, incrementCounter, decrementCounter } from '../api';

jest.mock('../api');

describe('Counter Component', () => {
    beforeEach(() => {
        fetchCounter.mockResolvedValue({ value: 10 });
        incrementCounter.mockResolvedValue({ value: 11 });
        decrementCounter.mockResolvedValue({ value: 9 });
    });

    test('should load initial value from API', async () => {
        render(<Counter />);
        expect(await screen.findByText(/Counter: 10/)).toBeInTheDocument();
    });

    test('should increment counter', async () => {
        render(<Counter />);
        fireEvent.click(await screen.findByText('Increment'));
        await waitFor(() => {
            expect(screen.getByText(/Counter: 11/)).toBeInTheDocument();
        });
    });

    test('should decrement counter', async () => {
        render(<Counter />);
        fireEvent.click(await screen.findByText('Decrement'));
        await waitFor(() => {
            expect(screen.getByText(/Counter: 9/)).toBeInTheDocument();
        });
    });
});
