import React from 'react';
import styled from 'styled-components';

//EXPORTED
// export const StyledMenu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: black;
//   transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
//   height: 100vh;
//   text-align: left;
//   padding: 2rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transition: transform 0.3s ease-in-out;

//   @media (max-width: 576px) {
//       width: 100%;
//     }

//   a {
//     font-size: 2rem;
//     text-transform: uppercase;
//     padding: 2rem 0;
//     font-weight: bold;
//     letter-spacing: 0.5rem;
//     color: #D6D6D6;
//     text-decoration: none;
//     transition: color 0.3s linear;

//     @media (max-width: 576px) {
//       font-size: 1.5rem;
//       text-align: center;
//     }

//     &:hover {
//       color: #00FFD6;
//     }
//   }
// `

// export const Menu = ({ open }) => {
//   return (
//     <StyledMenu open={open}>
      
//       <a href="/">
//         <span role="img" aria-label="home"></span>
//         HOME
//       </a>
      
//       <a href="/">
//         <span role="img" aria-label="about"></span>
//         ABOUT
//       </a>
      
//       <a href="/">
//         <span role="img" aria-label="statistics"></span>
//         STATISTICS
//         </a>
      
//       <a href="/">
//         <span role="img" aria-label="contact"></span>
//         Contact
//         </a>
      
      
//     </StyledMenu>
//   )
// }

//EXPORTED
// export const StyledBurger = styled.button`
//   position: absolute;
//   top: 5%;
//   left: 2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2.1rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10;

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: #EFFFFA;
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => open ? '0' : '1'};
//       transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
//     }

//     :nth-child(3) {
//       transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
//     }
//   }
// `

// export const Burger = ({ open, setOpen }) => {
//   return (
//     <StyledBurger open={open} onClick={() => setOpen(!open)}>
//       <div />
//       <div />
//       <div />
//     </StyledBurger>
//   )
// }

export const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
  
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [ref, handler],
    );
  };