import React from 'react';
import styled from 'styled-components';
import { IMG } from 'pages/_common';

export const Slider = styled.div`
    width: 150px;
    text-align: center;
    overflow: hidden;
`
export const Slides = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: black;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
`
export const Slide_item = styled.div`
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 150px;
    height: 150px;
    margin-right: 25px;
    border-radius: 10px;
    background: #eee;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
`
export const Slide_indicator = styled.a`
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    background: #29b1ff;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 0 0.5rem 0;
    position: relative;
    &:active {
        top: 1px;
    }
    &:hover {
        background: #2de7ff;
    }
    &:focus {
        background: #000;
    }
`

export const Carousel = ({ data }) => {
    const indicator = data?.map((_, i) => <Slide_indicator key={`indicator_${i}`} href={`#slide-${i}`}>{i + 1}</Slide_indicator>);
    const items = data?.map((item, i) => <Slide_item key={`item_${i}`} id={`slide-${i}`}>
        <IMG src={`https://raw.githubusercontent.com/Wachimingo/restaurant/main/docs/assets/${item.image}`} />
    </Slide_item>);

    return <Slider>
        {indicator}
        <Slides>
            {items}
        </Slides>
    </Slider>
}

export default Carousel;