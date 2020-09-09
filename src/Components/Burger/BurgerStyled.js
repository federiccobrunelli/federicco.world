import styled from 'styled-components';

export const StyledBurger = styled.button`

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: .25em 0 0 0;

  width: 2rem;
  height: 1.59em;

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;

  &:focus {
    outline: none;
  }

  div {
    width: 2.25em;
    height: 4.3px;
    margin: 0 0 0 0;


    background: ${({ theme, open }) => theme === 'dark' && open === true ? 'white'
    : theme === 'light' && open === true ? 'white' 
    :  theme === 'light' ? 'black' : 'white' };


    
    border-radius: 1em;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: .23em;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`