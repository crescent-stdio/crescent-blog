import React, { useReducer, createContext } from 'react';

const Types = [
  {
    id: 0,
    type: 'all',
    text: 'μ μ²΄ κΈπ',
    done: true
  },
  {
    id: 1,
    type: 'recipe',
    text: 'μλ¦¬π΄',
    done: false
  },
  {
    id: 2,
    type: 'common',
    text: 'μΌμπ',
    done: false
  },
  {
    id: 3,
    type: 'artwork',
    text: 'μν/νλ‘μ νΈβ¨',
    done: false
  },
  {
    id: 4,
    type: 'developement',
    text: 'κ°λ°π»',
    done: false
  },
  {
    id: 5,
    type: 'ps',
    text: 'PS(CP)π',
    done: false
  }
];
