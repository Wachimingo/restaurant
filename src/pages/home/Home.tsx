import React, { Suspense, useEffect, useState } from 'react';
import type { FC } from 'react';
import { Main, NavBar, H1, H2, H3, Section, Div, H4, Container, P, IMG, Carousel } from 'pages/_common';
import type { Dish } from 'interfaces/dish.mjs';
import _dishes from 'json/dishes.json'

const Home: FC = () => {
    const [dishes] = useState<Dish[]>(localStorage.getItem('dishes') === 'undefined' || !localStorage.getItem('dishes') ? _dishes : JSON.parse(localStorage.getItem('dishes')!));
    useEffect(() => {
        if (localStorage.getItem('dishes') === 'undefined' || !localStorage.getItem('dishes')) {
            localStorage.setItem('dishes', JSON.stringify(_dishes));
        }
    }, [])
    return <Container backgroundImage='https://raw.githubusercontent.com/Wachimingo/restaurant/main/docs/assets/home_background.webp'>
        <NavBar />
        <Main column>
            <H1>Restaurant</H1>
            <IMG src='https://raw.githubusercontent.com/Wachimingo/restaurant/main/docs/assets/logo.webp' />
            <H2>Nice taste</H2>
            <P>Today's menu:</P>
            <Suspense>
                <Carousel data={dishes} />
            </Suspense>
        </Main>
        <Section column>
            <H3>Enjoy our:</H3>
            <Div>
                <Div column>
                    <H4>Breakfast</H4>
                    <IMG src='https://raw.githubusercontent.com/Wachimingo/restaurant/main/docs/assets/breakfast.webp' width='22rem' height='22rem' />
                </Div>
                <Div column>
                    <H4>Lunch</H4>
                    <IMG src='https://raw.githubusercontent.com/Wachimingo/restaurant/main/docs/assets/lunch.webp' width='22rem' height='22rem' />
                </Div>
                <Div column>
                    <H4>Dinner</H4>
                    <IMG src='https://raw.githubusercontent.com/Wachimingo/restaurant/main/docs/assets/dinner.webp' width='22rem' height='22rem' />
                </Div>
            </Div>
        </Section>
        <br />
    </Container>
}

export default Home;