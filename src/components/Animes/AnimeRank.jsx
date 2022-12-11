import React from 'react'
import Anime from './Anime'
import Loader from '../UI/Loader'
import styled from 'styled-components'
import SearchInput from '../UI/SearchInput'
import EmptyAnimes from '../UI/EmptyAnimes'

const AnimeRank = ({animeList, searchTem, setSearchTem, isLoading}) => {

	return (
		<AnimeRankContainer className="container">
			<div className="flex_center">
                <SearchInput 
                    searchTem={searchTem} 
                    handleChange={(e) => setSearchTem(e.target.value)}
                    handleClear={() => setSearchTem('')}/>
            </div>
            {isLoading  ? (
            	<div className='flex_center'>
                    <Loader/>
                </div>
            ) : (
            	animeList._id ? (
            		<div className='animes-list'>
                        <Anime data={animeList}/>
                    </div>
            	) : <EmptyAnimes/>
            )}
		</AnimeRankContainer>
	)
}


const AnimeRankContainer = styled.section`
	.animes-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 10px;
    }


    @media (max-width: 1100px) {
        .animes-list {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
    }

    @media (max-width: 679px) {
        .animes-list {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        }
    }

    @media (max-width: 559px) {
        .animes-list {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }
    }
`

export default AnimeRank
