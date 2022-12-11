import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../context/appContext'
import { MdOutlineModeNight, MdOutlineLightMode } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [openSidebar, setOpenSidebar] = useState(false)
    const navigate = useNavigate()
    const { toggleTheme, handleDarkTheme, handleLightTheme } = useData() 

    const handleOpenSidebar = () => setOpenSidebar(true)
    const handleCloseSidebar = (route) => {
        navigate(route)
        setOpenSidebar(false)
    }

    return (
        <NavbarContainer isOpen={openSidebar}>
            <div className='container flex_between'>
                <h2 onClick={() => navigate('/')}>Animenia</h2>
                <ul className="flexx navs">
                    <li onClick={() => handleCloseSidebar('/')}>Anime List</li>
                    <li onClick={() => handleCloseSidebar('/myfavorite')}>My Favorite</li>
                    {toggleTheme === 'light' ? <MdOutlineModeNight onClick={handleDarkTheme}/> : <MdOutlineLightMode onClick={handleLightTheme}/>}
                    <AiOutlineClose className="close-icon" onClick={() => setOpenSidebar(false)}/>
                </ul>
                <div className="flexx mobile-icons">
                    <AiOutlineMenu className="menu-bar" onClick={handleOpenSidebar}/>
                    {toggleTheme === 'light' ? <MdOutlineModeNight onClick={handleDarkTheme}/> : <MdOutlineLightMode onClick={handleLightTheme}/>}
                </div>
            </div>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.nav`
    width: 100%;
    padding: 10px 15px;
    color: ${({theme}) => theme.text};
    margin-bottom: 50px;

    h2 {
        cursor: pointer;
    }

    .navs {
        list-style: none;
        li {
            font-size: 15px;
            cursor: pointer;
            font-weight: 450;
            :hover {
                text-decoration: underline;
            }
        }
        svg {
            font-size: 17px;
            cursor: pointer;
        }

        .close-icon {
            display: none;
        }

        @media (max-width: 500px) {
            position: fixed;
            top: 0;
            bottom: 0;
            left: ${({isOpen}) => isOpen ? '0' : '-100%'};
            right: 0;
            background: var(--light-bg);
            width: 100%;
            height: 100%;
            z-index: 20;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            transition: all 0.5s ease-in-out;
            color: var(--dark-text);

            li {
                font-size: 20px;
                margin-bottom: 20px;
            }
            svg {
                display: none;
            }
            .close-icon {
                display: block;
                position: absolute;
                top: 15px;
                right: 15px;
                font-size: 25px;
                cursor: pointer;
                color: var(--dark-text);
            }
        }

        @media (min-width: 501px) {
            li:not(:last-child) {
                margin-right: 20px;
            }
        }
    }

    .mobile-icons {
        display: none;
        margin-top: 8px;
        .menu-bar {
            margin-right: 10px;
        }
        svg {
            font-size: 20px;
            cursor: pointer;
        }
        @media (max-width: 500px) {
            display: block;
        }
    }
`


export default Navbar