import React from 'react'
import Navbar from './components/UI/Navbar'
import Footer from './components/UI/Footer'
import AnimesList from './pages/AnimesList'
import MyFavorite from './pages/MyFavorite'
import AnimeDetail from './pages/AnimeDetail'
import { useData } from './context/appContext'
import Animes from './components/Animes/Animes'
import { Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

const App = () => {

  const { toggleTheme } = useData()

  const darkTheme = {
    body: '#181818',
    text: '#fff',
    link: '#59C1BD'
  }

  const lightTheme = {
    body: '#fefefe',
    text: '#222',
    link: '#332FD0'
  }

  return (
    <ThemeProvider theme={toggleTheme === 'light' ? lightTheme : darkTheme}>
      <MainApp>
        <Navbar/>
        <Routes>   
            <Route path="/" element={<AnimesList/>}/>
            <Route path="/animes/:animeId" element={<AnimeDetail/>}/>
            <Route path="/myfavorite" element={<MyFavorite/>}/>
        </Routes>
        <Footer/>
      </MainApp>
    </ThemeProvider>
  )
}


const MainApp = styled.main`
  min-height: 100vh;
  padding-bottom: 20px;
  background: ${({theme}) => theme.body};
  transition: all 0.5s ease;
`

export default App