import React from 'react';
import { StyledBurger } from './BurgerStyled';

// import { bool, func } from 'prop-types'; //DON'T KNOW WHAT IS IT

export class Burger extends React.Component {

    render(){
        return (
      <div className="styledBurger" theme={this.props.theme} open={this.props.open} onClick={() => this.props.setOpen()}>
        <div className="burgerPad" />
        <div />
        <div />
      </div>
    )
  }}

  //DON'T KNOW WHAT IS IT
//   Burger.propTypes = {
//     open: bool.isRequired,
//     setOpen: func.isRequired,
//   };