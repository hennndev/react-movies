import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../context/appContext'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Anime = ({data, isFavorite, handleDeleteFavorite}) => {

    const { favoriteAnime, addFavorite } = useData()
    const navigate = useNavigate()

    const checkIsFavorite = favoriteAnime.find(anime => anime._id === data._id)
    const handleDetail = () => navigate(`/animes/${data._id}`)

    return (
        <AnimeContainer isFavorite={checkIsFavorite}>
            <div className='overlay'>
                <div className='overlay-detail'>
                    <p className="title">{data.title}</p>
                    <p className='rank'>Rank: {data.ranking}</p>
                    <div className="flexx">
                        <button className='btn btn-detail' onClick={handleDetail}>Detail</button>
                        {!isFavorite ? (
                            <button 
                                className='btn btn-favorite' 
                                onClick={() => addFavorite(data)} disabled={checkIsFavorite}>
                                {checkIsFavorite ? 'Favorite' : 'Add Fav'}
                            </button>
                        ): (
                            <button 
                                className='btn btn-delete' 
                                onClick={handleDeleteFavorite}>
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className='img-container'>
                <LazyLoadImage effect="blur" src={data.image} alt={data.title} />
            </div>
        </AnimeContainer>
)}

const AnimeContainer = styled.div`
    margin-bottom: 10px;
    min-height: 300px;
    position: relative;
    transition: all 1s ease;
    border-radius: 15px;
    :hover {
        .overlay {
            height: 100%;
            padding: 20px;
            opacity: 1;
            .overlay-detail {
                display: block;
            }
            @media (max-width: 700px) {
                padding: 10px;
            }
        }
    }
    

    .overlay {
        width: 100%;
        height: 10%;
        opacity: 0;
        position: absolute;
        background-color: rgba(0,0,0,0.7);
        z-index: 10;
        border-radius: 15px;
        transition: all 0.5s ease-in-out;
        color: var(--light-color);
        overflow-y: auto;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    .overlay-detail {
        display: none;
        color: var(--light-text);
        transition: all 0.5s ease-in-out;
        transition-delay: 0.5s;
        font-size: 20px;
        .title {
            font-weight: 450;
        }
        .rank {
            margin-top: 5px;
        }
        .btn {
            border: none;
            outline: none;
            border-radius: 4px;
            cursor: pointer;
            color: var(--light-text);
            margin-right: 5px;
            padding: 7px 10px;
            margin-top: 15px;
            font-size: 16px;
        }
        .btn-detail {
            background: #FB2576;
            margin-right: 5px;
        }
        .btn-favorite {
            background: ${({isFavorite}) => isFavorite ? '#2A3990' : '#22A39F'} ;
        }
        .btn-delete {
            background: #FF1E1E;
        }

        @media (max-width: 700px) {
            font-size: 16px;
            .btn {
                font-size: 11px;
            }
        }
        @media (max-width: 500px) {
            .btn {
                padding: 5px 8px;
                font-size: 13px;
            }
        }
    }

    .img-container {
        width: 100%;
        height: 100%;
        .lazy-load-image-background {
            width: 100%;
            height: 100%;
            border-radius: 15px;
        }
        img {
            border-radius: 15px;
            width: 100%;
            height: 100%;    
            object-fit: cover;
        }
    }

    @media (max-width: 680px) {
        min-height: 270px;
    }
    @media (max-width: 559px) {
        min-height: 200px;
    }
`


export default Anime