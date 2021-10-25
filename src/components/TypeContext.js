import React, { useReducer, createContext } from 'react';

const Types = [
  {
    id: 0,
    type: 'all',
    text: '전체 글😉',
    done: true
  },
  {
    id: 1,
    type: 'recipe',
    text: '요리🍴',
    done: false
  },
  {
    id: 2,
    type: 'common',
    text: '일상😇',
    done: false
  },
  {
    id: 3,
    type: 'artwork',
    text: '작품/프로젝트✨',
    done: false
  },
  {
    id: 4,
    type: 'developement',
    text: '개발💻',
    done: false
  },
  {
    id: 5,
    type: 'ps',
    text: 'PS(CP)🎈',
    done: false
  }
];
