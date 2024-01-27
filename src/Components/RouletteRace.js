import React from 'react';
import './RouletteRace.css';

const RouletteRace = () => {
    const data = [
        { user: 'Arsenal (Alicia) - Chelsea', betAmount: 100, multiplier: '0.58x', payout: 57, date: '2/28/2023, 4:07:56 PM' },
        { user: 'Arsenal (Alicia) - Chelsea', betAmount: 100, multiplier: '0.58x', payout: 57, date: '2/28/2023, 4:07:56 PM' },
        { user: 'Arsenal (Alicia) - Chelsea', betAmount: 100, multiplier: '0.58x', payout: 57, date: '2/28/2023, 4:07:56 PM' },
        { user: 'Arsenal (Alicia) - Chelsea', betAmount: 100, multiplier: '0.58x', payout: 57, date: '2/28/2023, 4:07:56 PM' },
        { user: 'Arsenal (Alicia) - Chelsea', betAmount: 100, multiplier: '0.58x', payout: 57, date: '2/28/2023, 4:07:56 PM' },
        // ... add other rows as needed
    ];

    return (
        <div className="roulette-race">
            <h2>Daily Roulette Race</h2>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Bet Amount</th>
                        <th>Multiplier</th>
                        <th>Payout</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {/* Replace the following with actual data rendering */}
                            {Object.values(row).map((cell, i) => (
                                <td key={i}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RouletteRace;