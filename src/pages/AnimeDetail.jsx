import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Loader from '../components/UI/Loader'
import { useParams } from 'react-router-dom'

const AnimeDetail = () => {

	const { animeId } = useParams()
	const [animeData, setAnimeData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)


	useEffect(() => {
		const options = {
            method: 'GET',
            url: `https://anime-db.p.rapidapi.com/anime/by-id/${animeId}`,
            headers: {
              'X-RapidAPI-Key': '7bef28009dmshedc105df6814739p15d209jsn096ca5e8e8f0',
              'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
        };
        axios.request(options).then((res) => {
            setIsLoading(false)
            setAnimeData(res.data)
        }).catch((error) => {
            setIsLoading(false)
        });
	}, [animeId])

	return (
		<AnimeDetailContainer className="container">
			{isLoading ? (
				<div className="flex_center">
					<Loader/>
				</div>
			) : (
				<div className="anime-detail">
					<div className="anime-detail-image">
						<img src={animeData?.image} alt={animeData.title}/>
					</div>
					<div className="anime-detail-description">
						<h3>{animeData.title}</h3>
						<p>Rank: {animeData.ranking}</p>
						<div className="genres">
							Genres: {animeData.genres.map((genre, idx) => <span key={idx}>{genre}{idx !== animeData.genres.length - 1 && ','} {' '}</span>)}
						</div>
						<p>Link detail: <a href={animeData.link} target="_blank">{animeData.link}</a></p>
						<p>Synopsis:</p>
						<p className="synopsis">{animeData.synopsis ? animeData.synopsis : 'Synopsis not available'}</p>
					</div>
				</div>
			)}
		</AnimeDetailContainer>
	)
}

const AnimeDetailContainer = styled.section`
	padding: 0 20px;

	.anime-detail {
		display: flex;
		align-items: start;
	}

	.anime-detail-description {
		flex: 1;
		margin-left: 20px;
		color: ${({theme}) => theme.text};

		h3, p, .genres {
			margin-bottom: 10px;
		}
		.genres {
			font-size: 16px;
			font-weight: 450;
		}

		a {
			font-size: 14px;
			color: ${({theme}) => theme.link};
			word-break: break-all;
		}

		p {
			font-size: 16px;
			font-weight: 450;
		}
		.synopsis {
			font-size: 14px;
			line-height: 1.5;

		}
	}

	@media (max-width: 700px) {
		.anime-detail {
			flex-direction: column;

			.anime-detail-image {
				margin-bottom: 30px;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
			}
		}	
		.anime-detail-description {
			margin-left: 0;
		}
	}
`

export default AnimeDetail