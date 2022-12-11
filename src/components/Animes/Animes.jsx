import React, { useState, useEffect } from 'react'
import Anime from './Anime'
import Loader from '../UI/Loader'
import styled from 'styled-components'
import SearchInput from '../UI/SearchInput'
import EmptyAnimes from '../UI/EmptyAnimes'


const Animes = ({animeList, setAnimeList, searchTem, setSearchTem, isLoading, isFavorite = null, deleteFavorite = null}) => {
    return (
        <AnimesContainer className='container'>
            <div className="flex_center">
                <SearchInput 
                    searchTem={searchTem} 
                    handleChange={(e) => {
                        setSearchTem(e.target.value)
                        setAnimeList([])
                    }}
                    handleClear={() => setSearchTem('')}/>
            </div>
            {isLoading ? (
                <div className='flex_center'>
                    <Loader/>
                </div>
            ) : (
                animeList.data?.length > 0 ? (
                    <div className='animes-list'>
                        {animeList.data.map(data => (
                            <Anime data={data} key={data._id} isFavorite={isFavorite} handleDeleteFavorite={() => deleteFavorite(data._id)}/>
                        ))}
                    </div>
                ) : <EmptyAnimes isFavorite={!searchTem && isFavorite}/>
            )}
        </AnimesContainer>
    )
}


const AnimesContainer = styled.div`
    
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

export default Animes