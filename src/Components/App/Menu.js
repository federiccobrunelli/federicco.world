import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} setOpen={setOpen}>


        <Link className="Link" exact="true" to="/" onClick={() => setOpen(!open)}>home</Link>
        <Link className="Link" to="/hire" onClick={() => setOpen(!open)}>hire</Link>
        <Link className="Link" to="/about" onClick={() => setOpen(!open)}>about</Link>
        <Link className="Link" exact="true" to="/work" onClick={() => setOpen(!open)}>projects</Link>
        <Link className="Link" to="/files/Brunelli_Federico_Resume.pdf" target="_blank" onClick={() => setOpen(!open)}>cv</Link>
        <Link className="Link" to="/contacts" onClick={() => setOpen(!open)}>contacts</Link>
        

    </StyledMenu>
  )
}



const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(239, 255, 250, 1);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 101;

  border-radius: 15px;

  @media (max-width: 1000px) {
      width: 100%;
      background: rgba(239, 255, 250, .95);
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: .9rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.15s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }
`

