import React, { Component } from 'react';
import { FaUser } from 'react-icons/fa';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-item">
          <img src="https://i.imgur.com/KDIDiSE.png" alt="logo Facebook"/>
          <a className="link" href="#">
            <label>Meu perfil</label>
            <div className="icon">
              <FaUser size="16" color="#4A90E2"/>
            </div>  
          </a>
        </div>  
      </header>
    );
  }
}