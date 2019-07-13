import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  position: relative;
  width: 2em;
  height: 2em;
  background-color: transparent;
  ${props => props.iconType}
`;

const iconType = (typeName, color) => {
  switch (typeName) {
    case 'play':
      return `
        &::before,&::after {
          ${defaultIconType}
          left: 30%;
          border: 1em solid transparent;
          border-left-width: 1.2em;
          border-right-width: 0;
          border-left-color: ${color};
        }
      `
    case 'pause':
      return `
        &::before,&::after {
          ${defaultIconType}
          height: 90%;
          width: 30%;
          top: 5%;
          left: 5%;
          background-color: ${color};
        }
        &::after {
          left: 65%;
        }
      `
      case 'restart':
        return `
          &::before,&::after {
            ${defaultIconType}
            border: 0.2em solid ${color};
            border-bottom-color: transparent;
            border-radius: 100%;
          }
          &::after {
            top: 45%;
            left: 20%;
            border: 1em solid transparent;
            border-left-color: ${color};
            transform: rotate(135deg) scale(0.5);
          }
        `
      case 'stop':
        return `
          &::before,&::after {
            ${defaultIconType}
            width: 60%;
            height: 60%;
            top: 20%;
            left: 20%;
            background-color: ${color};
          }
        `
      case 'delete':
        return `
          &::before,&::after {
            ${defaultIconType}
            width: 20%;
            left: 40%;
            transform: rotate(45deg);
            background-color: ${color};
          }
          &::after {
            transform: rotate(-45deg);
          }
        `
    default:
      return `
          &::before,&::after {
            ${defaultIconType}
            width: 70%;
            height: 70%;
            top: 15%;
            left: 15%;
            border-radius: 100%;
            background-color: ${color};
          }
        `
  }
  
};

const defaultIconType = `
  content: "";
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: inherit;
  right: inherit;
  background: transparent;
  background-color: transparent;
  border: none;
  border-radius: 0;
  transform: none;
  transition: 0.2s ease-in-out;
`;

const AniIcon = ({ color = 'white', type = 'play', hidden, ...props }) => {
  
  return (
    <Icon color={color} typeName={type} hidden={hidden} iconType={iconType(type, color)} {...props} />
  );
};

export default AniIcon;
