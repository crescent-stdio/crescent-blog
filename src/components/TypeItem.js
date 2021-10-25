import React from 'react';
import styled, { css } from 'styled-components';

const TypeItemBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 0.375rem 1rem;
  margin-right: 0.75rem;
  margin-bottom: 0.5rem;

  border-radius: 16px;
  font-size: 1.25rem;
  font-weight: bold;

  background: #dddddd;
  color: #30475e;
  ${prop =>
    prop.active &&
    css`
      background: #30475e;
      color: #eeeeee;
    `}

  &:hover {
    background: #f05454;
    color: #eeeeee;
  }
  @media only screen and (max-width: 768px) {
    margin-right: 0.5rem;
    margin-bottom: 0.375rem;
    font-size: 1rem;
  }
`;

function TypeItem({ typelist, onToggle }) {
  return (
    <>
      {typelist.map(type => (
        <TypeItemBlock active={type.active} onClick={() => onToggle(type.id, type.type)}>{type.text}</TypeItemBlock>
      ))}
    </>
  );
}

export default TypeItem;
