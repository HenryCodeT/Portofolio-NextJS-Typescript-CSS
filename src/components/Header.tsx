'use client'
import { ThemeContext } from '@/context/ThemeProvider';
import Link from 'next/link';
import React, { useContext } from 'react'
import { BiHomeAlt, BiUser, BiSolidBook, BiSolidBriefcase, BiSolidMessageRoundedDots, BiMoon, BiSun } from 'react-icons/bi';
export const Header = () => {

    const context = useContext(ThemeContext);

    return (
        <header className="header">
            <nav className="nav container">
                <Link href={'/'} className="nav__logo">Henry Torres</Link>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item ">
                            <Link href={'/'} className="nav__link">
                                <BiHomeAlt />
                            </Link>
                        </li>
                        <li className="nav__item ">
                            <Link href={'/about'} className="nav__link">
                                <BiUser />
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href={'/skills'} className="nav__link">
                                <BiSolidBook />
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href={'/work'} className="nav__link">
                                <BiSolidBriefcase />
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link href={'/contact'} className="nav__link">
                                <BiSolidMessageRoundedDots />
                            </Link>
                        </li>
                    </ul>
                </div>
                {
                    context?.theme == 'light-theme'
                        ? <BiSun className='sun-icon' onClick={context?.toggleTheme} />
                        : <BiMoon className='moon-icon' onClick={context?.toggleTheme} />
                }
            </nav>
        </header>
    )
}