import React, { useState } from 'react'
import styled from 'styled-components'
import { useData } from '../context/appContext'
import Animes from '../components/Animes/Animes'

const MyFavorite = () => {

	const { favoriteAnime, deleteFavorite } = useData()
	const [searchTem, setSearchTem] = useState('')

	const filteredFavoriteAnime = favoriteAnime.filter(anime => {
		return anime.title.toLowerCase().includes(searchTem.toLowerCase()) ||
		anime.ranking == +searchTem
	})

	return (
		<MyFavoriteContainer>
			<Animes 
				isFavorite 
				deleteFavorite={deleteFavorite}
				animeList={{data: filteredFavoriteAnime}} 
				searchTem={searchTem} 
				setSearchTem={setSearchTem}/>
		</MyFavoriteContainer>
	)
}


const MyFavoriteContainer = styled.section`
	padding: 0 20px;
`

export default MyFavorite

