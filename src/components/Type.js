import React, {useState} from 'react';
import styled from 'styled-components';
import TypeItem from './TypeItem';

const TypeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  margin-bottom: 1rem;
  @media only screen and (max-width: 768px) {
    margin-bottom: 0.75rem;
  }
`;

function TypeBlock({getFilterName}) {
  const [types, setTypes] = useState ([
    {
      id: 0,
      type: 'all',
      text: 'μ μ²΄ κΈπ',
      active: true
    },
    {
      id: 1,
      type: 'recipe',
      text: 'μλ¦¬π΄',
      active: false
    },
    {
      id: 2,
      type: 'common',
      text: 'μΌμπ',
      active: false
    },
    {
      id: 3,
      type: 'artwork',
      text: 'νλ‘μ νΈβ¨',
      active: false
    },
    {
      id: 4,
      type: 'developement',
      text: 'κ°λ°π»',
      active: false
    },
    // {
    //   id: 5,
    //   type: 'ps',
    //   text: 'PS(CP)π',
    //   active: false
    // }
  ]);

  const onToggle = (id, name) => {
    setTypes(
      types.map(type =>
        type.id === id ? {...type, active: true} : {...type, active: false})
    );
    getFilterName(name);
    // console.log(name);
  };

  return (
    <TypeList>
      <TypeItem typelist={types} onToggle={onToggle}/>
    </TypeList>
  );
}

export default TypeBlock;
