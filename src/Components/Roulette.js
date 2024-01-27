import React, { useState, useEffect } from "react";
import './Roulette.css';

const RollingNumber = ({ value }) => {
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        setAnimation("spin");
        const timer = setTimeout(() => {
            setAnimation("");
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [value]);
    return (
        <div className={`rolling-number ${animation}`}>
            {value.toFixed(2)}
        </div>
    );
};

//Component for the list of bets
const BetList = ({ title, bets }) => {
    return (
        <div className='bet-list'>
            <h3>{title}</h3>
            <ul>
                {bets.map((bet) => {
                    <li key={bet.id}>
                        <img src={bet.avatar} alt={bet.username} />
                        <span>{bet.username}</span>
                        <span>${bet.amount}</span>
                    </li>
                })}
            </ul>
        </div>
    );
};

//the main component for the roulette game
const Roulette = () => {
    const bets32x = [
        { id: 1, avatar: "./images/Ellipse.png", username: 'fRekiH', amount: 40 },
        { id: 2, avatar: "./images/Ellipse.png", username: 'newrld', amount: 20 },
        { id: 3, avatar: "./images/Ellipse.png", username: 'wamet', amount: 20 },
        { id: 4, avatar: "./images/Ellipse.png", username: 'Morriee', amount: 16 },
        { id: 5, avatar: "./images/Ellipse.png", username: 'fRekiH3234', amount: 10 },
        { id: 6, avatar: "./images/Ellipse.png", username: 'heuaj', amount: 11.06 },
        { id: 7, avatar: "./images/Ellipse.png", username: 'dunuj', amount: 8.09 },
        { id: 8, avatar: "./images/Ellipse.png", username: 'Foxy', amount: 8.09 },
        { id: 9, avatar: "./images/Ellipse.png", username: 'Puggy Pahli', amount: 7 },
    ];

    const bets14x = [
        { id: 10, avatar: "./images/Ellipse.png", username: 'newrld', amount: 20 },
        { id: 11, avatar: "./images/Ellipse.png", username: 'fRekiH', amount: 30 },
        { id: 12, avatar: "./images/Ellipse.png", username: 'wamet', amount: 20 },
        { id: 13, avatar: "./images/Ellipse.png", username: 'Morriee', amount: 16 },
        { id: 14, avatar: "./images/Ellipse.png", username: 'Bhauj', amount: 9 },
        { id: 15, avatar: "./images/Ellipse.png", username: 'heuaj', amount: 11.06 },
        { id: 16, avatar: "./images/Ellipse.png", username: 'Foxy', amount: 8.09 }
    ];

    const bets2x = [
        { id: 17, avatar: "./images/Ellipse.png", username: 'fRekiH', amount: 40 },
        { id: 18, avatar: "./images/Ellipse.png", username: 'newrld', amount: 20 },
        { id: 19, avatar: "./images/Ellipse.png", username: 'wamet', amount: 20 },
        { id: 20, avatar: "./images/Ellipse.png", username: 'Morriee', amount: 16 },
        { id: 21, avatar: "./images/Ellipse.png", username: 'fRekiH3234', amount: 10 },
        { id: 22, avatar: "./images/Ellipse.png", username: 'heuaj', amount: 11.06 },
        { id: 23, avatar: "./images/Ellipse.png", username: 'dunuj', amount: 8 }
    ];
    const [roll, setRoll] = useState(0);

    const [bet, setBet] = useState(0);

    const handleChange = (e) => {
        const value = Number(e.target.value);
        if (isNaN(value)) {
            setBet(0);
        } else {
            setBet(value);
        }
    };
    const handleClear = () => {
        setBet(0);
    };

    const handle001 = () => {
        setBet((prevBet) => prevBet + 0.01);
    };

    const handle01 = () => {
        setBet((prevBet) => prevBet + 0.1);
    };

    const handle1 = () => {
        setBet((prevBet) => prevBet + 1);
    };

    const handle10 = () => {
        setBet((prevBet) => prevBet + 10);
    };

    const handle100 = () => {
        setBet((prevBet) => prevBet + 100);
    };


    const handleHalf = () => {
        setBet((prevBet) => prevBet / 2);
    };

    const handleDouble = () => {
        setBet((prevBet) => prevBet * 2);
    };

    const handleMax = () => {
        setBet(1000);
    };

    const rollRoulette = () => {
        const value = Math.random() * 100;
        setRoll(value);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            rollRoulette();
        }, 5000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='roulette'>
            <h1>ROULETTE</h1>
            <h3>ROLLING</h3>
            <div className="rollingnumber">
                <RollingNumber value={roll} />

            </div>

            <div className='previous-rolls'>
                <span>PREVIOUS ROLLS</span>
                <span>LAST '100' '40' '4' '56'</span>
            </div>
            <div className='bet-input'>
                <input type='text' value={bet} onChange={handleChange} placeholder='Enter bet amount....' />
                <button onClick={handleClear}>CLEAR</button>
                <button onClick={handle001}>+0.01</button>
                <button onClick={handle01}>+0.1</button>
                <button onClick={handle1}>+1</button>
                <button onClick={handle10}>+10</button>
                <button onClick={handle100}>+100</button>
                <button onClick={handleHalf}>1/2</button>
                <button onClick={handleDouble}>X2</button>
                <button onClick={handleMax}>MAX</button>
            </div>
            <div className='bet-options'>
                <BetList title="PLACE BET AND WIN 2X" bets={bets32x} />
                <BetList title="PLACE BET AND WIN 14X" bets={bets14x} />
                <BetList title="PLACE BET AND WIN 2X" bets={bets2x} />

            </div>

        </div>

    );

};

export default Roulette;