import React, { createContext, useState, useContext } from 'react'

const Context = createContext()
const useData = () => useContext(Context)

const Provider = ({ children }) => {

	const [favoriteAnime, setFavoriteAnime] = useState(JSON.parse(localStorage.getItem('myfavorite')) || [])
	const [toggleTheme, setToggleTheme] = useState('light')

	const addFavorite = (anime) => {
		const updateFavoriteAnime = [...favoriteAnime, anime]
		localStorage.setItem('myfavorite', JSON.stringify(updateFavoriteAnime))
		setFavoriteAnime(updateFavoriteAnime)
	}

	const deleteFavorite = (id) => {
		const updateFavoriteAnime = favoriteAnime.filter(anime => {
			return anime._id !== id
		})
		localStorage.setItem('myfavorite', JSON.stringify(updateFavoriteAnime))
		setFavoriteAnime(updateFavoriteAnime)
	}

	const handleDarkTheme = () => setToggleTheme('dark')
	const handleLightTheme = () => setToggleTheme('light')
	
	return (
		<Context.Provider value={{
			favoriteAnime, 
			toggleTheme,
			addFavorite,
			deleteFavorite,
			handleDarkTheme,
			handleLightTheme
		}}>
			{children}
		</Context.Provider>
	)
}

export {
	Provider,
	useData
}