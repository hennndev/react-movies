import React from 'react'
import styled from 'styled-components'

const EmptyAnimes = ({isFavorite}) => {
	return (
		<EmptyAnimesContainer className="flex_center">
			<p>{isFavorite? 'Oops, your anime favorite is not available' : 'Oops, the anime what you looking for not exist!'}</p>
		</EmptyAnimesContainer>
	)
}


const EmptyAnimesContainer = styled.div`
	font-size: 18px;
	margin-top: 30px;
	color: ${({theme}) => theme.text};
	text-align: center;
`

export default EmptyAnimes