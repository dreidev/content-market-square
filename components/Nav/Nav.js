import React from 'react';
import Logo from '../../static/Logo.png';
import NavItem from './NavItem';
import MenuItem from './MenuItem';

export default class Nav extends React.Component {
  SELECTED = 0;
  underlines;
  txts;
  menu;
  menuItems;

  componentDidMount() {
    this.underlines = document.querySelectorAll('.underline');
    this.txts = document.querySelectorAll('text');
    this.menuItems = document.querySelectorAll('.menuItem-row');
    this.menu = document.querySelector('.menu');
    this.select(0);
  }

  select = index => {
    this.underlines[this.SELECTED].classList.remove('drawn');
    this.txts[this.SELECTED].classList.remove('selected');
    this.menuItems[this.SELECTED].classList.remove('selected');
    this.SELECTED = index;
    this.underlines[this.SELECTED].classList.add('drawn');
    this.txts[this.SELECTED].classList.add('selected');
    this.menuItems[this.SELECTED].classList.add('selected');
  };

  toggleMenu = () => {
    if (this.menu.classList.contains('visible')) {
      this.menu.classList.remove('visible');
    } else {
      this.menu.classList.add('visible');
    }
  };

  render() {
    return (
      <>
        <div className="menu col centered">
          <MenuItem
            id={0}
            toggle={this.toggleMenu}
            select={this.select}
            text="HOME"
          />
          <MenuItem
            id={1}
            toggle={this.toggleMenu}
            select={this.select}
            text="ABOUT"
          />
          <MenuItem
            id={2}
            toggle={this.toggleMenu}
            select={this.select}
            text="SERVICES"
          />
          <MenuItem
            id={3}
            toggle={this.toggleMenu}
            select={this.select}
            text="BLOG"
          />
          <MenuItem
            id={4}
            toggle={this.toggleMenu}
            select={this.select}
            text="한국어"
          />
        </div>
        <div className="header">
          <div className="content nav">
            <div className="logo centered">
              <img src={Logo} alt="logo" className="logo-pic" />
              <span className="title">Content Marketing Square</span>
            </div>
            <div className="navlist navlist-mobile">
              <p onClick={this.toggleMenu} className="menu-icon">
                &#x2630;
              </p>
            </div>
            <div className="navlist centered navlist-pc">
              <NavItem id={0} text="HOME" select={this.select} />
              <NavItem id={1} text="ABOUT" select={this.select} />
              <NavItem id={2} text="SERVICES" select={this.select} />
              <NavItem id={3} text="BLOG" select={this.select} />
              <NavItem id={4} text="한국어" select={this.select} />
            </div>
          </div>
        </div>
        <style jsx>{`
          .header {
            position: fixed;
            z-index: 1;
            top: 0px;
            right: 0px;
            width: 100%;
            height: 100px;
            background: rgb(255, 255, 255, 0.9);
            padding: 20px 0px 0px;
          }

          .nav {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            height: 80px;
            padding: 0 10%;
          }

          .menu {
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            z-index: 1;
            top: 0px;
            right: 0px;
            background: rgb(255, 255, 255, 0.9);
            padding: 130px 0px 0px;
            justify-content: flex-start;
          }

          .menu.visible {
            display: flex;
          }

          .menu .row {
            height: 80px;
          }

          .menu .menuItem-row.selected {
            background: #46c0c6;
            color: white;
          }

          .menu .menuItem-row:hover {
            background: #f2f2f2;
            color: black;
          }

          .menu .row.selected:hover {
            background: #46c0c6;
            color: white;
          }

          .logo {
            height: 90px;
            width: 30%;
            margin: 10px;
            display: flex;
            flex-direction: row;
          }

          .logo-pic {
            width: 90px;
          }

          .title {
            color: #3e3e3e;
            font-size: 25px;
            width: 150px;
            word-break: break-word;
            margin: 8px 10px;
            line-height: 23px;
            font-weight: 700;
          }

          .navlist-mobile {
            display: none;
          }

          .menu-icon {
            font-size: 30px;
            width: 30px;
            margin: 30px 0px;
            color: #6c6e6d;
            cursor: pointer;
          }

          .menu-icon:hover {
            text-shadow: 1px 1px 0px rgb(0, 0, 0, 0.2);
          }

          .navlist-pc {
            padding: 30px 0px 0px;
          }

          .navlist {
            width: 90%;
          }
          .drawn {
            animation: draw 0.8s linear forwards;
          }

          @keyframes draw {
            from {
              stroke-dashoffset: 100;
            }
            to {
              stroke-dashoffset: 0;
            }
          }

          @media screen and (max-width: 1000px) {
            .navlist-pc {
              display: none;
            }

            .navlist-mobile {
              display: flex;
              justify-content: flex-end;
            }

            .navlist {
              width: 10%;
            }

            .title,
            .logo {
              width: 80%;
            }
            .nav {
              padding: 0 4%;
            }
          }
        `}</style>
      </>
    );
  }
}
