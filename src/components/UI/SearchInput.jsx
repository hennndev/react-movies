import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { DebounceInput } from 'react-debounce-input';

const SearchInput = ({searchTem, handleChange, handleClear}) => {

    const [isFocus, setIsFocus] = useState(false)

    const onFocus = () => setIsFocus(true)
    const onBlur = () => setIsFocus(false)

    return (
        <SearchContainer className='flexx' isFocus={isFocus}>
            <AiOutlineSearch/>
            <DebounceInput 
                debounceTimeout={300}
                type="text" 
                onFocus={onFocus} 
                onBlur={onBlur}
                value={searchTem}
                onChange={handleChange}
                placeholder='Search anime by genre, title, and ranking'/>
            {searchTem.length > 0 && <AiOutlineClose className='close' onClick={() => handleClear()}/>}
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    border: ${({isFocus}) => isFocus ? '3px solid #A0E4CB' : '1px solid #ccc' };
    padding: 0 10px;
    width: 450px;
    border-radius: 6px;
    margin-bottom: 50px;
    background-color: var(--light-bg);
    svg {
        font-size: 20px;
    }

    .close {
        margin-left: 10px;
        cursor: pointer;
        color: #FB2576;
    }

    input {
        flex: 1;
        border: none;
        outline: none;
        padding: 10px 0;
        margin-left: 10px;
        font-size: 15px;
    }
`

export default SearchInput