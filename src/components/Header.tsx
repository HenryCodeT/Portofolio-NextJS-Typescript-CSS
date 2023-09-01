'use client'
import { ThemeContext } from '@/context/ThemeProvider';
import React, { useContext } from 'react'
import { BiHomeAlt,BiUser,BiSolidBook,BiSolidBriefcase,BiSolidMessageRoundedDots,BiMoon, BiSun } from 'react-icons/bi';
export const Header = () => {

  const context = useContext(ThemeContext);

  return (
    <header className="header" id="header">
      <nav className="nav container">
          <a href="#" className="nav__logo">Henry</a>

          <div className="nav__menu">
              <ul className="nav__list">
                  <li className="nav__item ">
                      <a href="#home" className="nav__link">
                          <BiHomeAlt/>
                      </a>
                  </li>

                  <li className="nav__item ">
                      <a href="#about" className="nav__link">
                          <BiUser/>
                      </a>
                  </li>

                  <li className="nav__item">
                      <a href="#skills" className="nav__link">
                          <BiSolidBook/>
                      </a>
                  </li>

                  <li className="nav__item">
                      <a href="#work" className="nav__link">
                          <BiSolidBriefcase/>
                      </a>
                  </li>

                  <li className="nav__item">
                      <a href="#contact" className="nav__link">
                          <BiSolidMessageRoundedDots/>
                      </a>
                  </li>
              </ul>
          </div>
          {
            context?.theme == 'light-theme' 
            ? <BiSun onClick={context?.toggleTheme}/>
            : <BiMoon onClick={context?.toggleTheme}/>
          }
      </nav>
    </header>
  )
}