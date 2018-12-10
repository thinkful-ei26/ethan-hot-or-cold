import React from 'react';

import Title from './title';
import Game from './game';
import What from './what';
import NewGame from './newGame';

export default function GameParent() {
    return (
        <div>
          <What />
          <NewGame />
          <Title />
          <Game />
        </div>
    )
}