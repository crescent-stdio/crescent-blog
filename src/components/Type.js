import { types } from '@babel/core';
import React, {useState} from 'react';
import styled from 'styled-components';
import TypeItem from './TypeItem';

const TypeList = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

function TypeBlock() {
  const [types, setTypes] = useState ([
    {
      id: 0,
      type: 'all',
      text: '전체 글😉',
      active: true
    },
    {
      id: 1,
      type: 'recipe',
      text: '요리🍴',
      active: false
    },
    {
      id: 2,
      type: 'common',
      text: '일상😇',
      active: false
    },
    {
      id: 3,
      type: 'artwork',
      text: '프로젝트✨',
      active: false
    },
    {
      id: 4,
      type: 'developement',
      text: '개발💻',
      active: false
    },
    // {
    //   id: 5,
    //   type: 'ps',
    //   text: 'PS(CP)🎈',
    //   active: false
    // }
  ]);

  const onToggle = id => {
    setTypes(
      types.map(type =>
        type.id === id ? {...type, active: true} : {...type, active: false})
    );
  };

  return (
    <TypeList>
      <TypeItem typelist={types} onToggle={onToggle}/>
    </TypeList>
  );
}

export default TypeBlock;
