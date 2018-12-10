import React from 'react';

// import 

import Status from './guessStatus';
import Input from './input';
import Counter from './counter';
import History from './history';

export default function Game() {
    return (
        <section className="game-container">
            <Status />
            <Input />
            <Counter />
            <History />
        </section>
    )
}