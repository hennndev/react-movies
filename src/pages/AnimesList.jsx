import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Animes from '../components/Animes/Animes'
import AnimeRank from '../components/Animes/AnimeRank'


const AnimesList = () => {

	const [animeList, setAnimeList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTem, setSearchTem] = useState('')

    function containsOnlyNumbers() {
      return /^\d+$/.test(searchTem);
    }

    const checkIsOnlyRank = containsOnlyNumbers()


    useEffect(() => {
        const options = {
            method: 'GET',
            url: checkIsOnlyRank ? `https://anime-db.p.rapidapi.com/anime/by-ranking/${searchTem}` : 'https://anime-db.p.rapidapi.com/anime',
            params: {
              page: '1',
              size: '100',
              search: checkIsOnlyRank ? '' : searchTem,
            },
            headers: {
              'X-RapidAPI-Key': '7bef28009dmshedc105df6814739p15d209jsn096ca5e8e8f0',
              'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
        };
        setIsLoading(true)
        axios.request(options).then((res) => {
            setIsLoading(false)
            setAnimeList(res.data)
        }).catch((error) => {
            setIsLoading(false)
            setAnimeList([])
        });
    }, [searchTem])

	return (
		<AnimesListContainer>
			{checkIsOnlyRank ? (
                <AnimeRank isLoading={isLoading} animeList={animeList} searchTem={searchTem} setSearchTem={setSearchTem}/>
            ) : <Animes isLoading={isLoading} animeList={animeList} setAnimeList={setAnimeList} searchTem={searchTem} setSearchTem={setSearchTem}/>}
		</AnimesListContainer>
	)
}

const AnimesListContainer = styled.section`
	padding: 0 20px;
`

export default AnimesList