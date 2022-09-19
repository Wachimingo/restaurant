import React, { Suspense } from 'react';
import type { FC, ReactNode } from 'react';
import { H1, NavBar, Section } from 'pages/_common';
import Card from './components/Card';
import { Main } from 'pages/_common';
import type { Dish } from 'interfaces/dish.mjs';
import dishes from 'json/dishes.json';

const Catalog: FC = () => {
    const renderDishes: ReactNode = dishes?.map((dish: Dish, i: number) => {
        return <Card key={`${dish.name}_card_${i}`} {...dish} />
    });

    return <>
        <NavBar />
        <Main>
            <H1>Catalog</H1>
        </Main>
        <Section>
            <Suspense>
                {renderDishes}
            </Suspense>
        </Section>
    </>
}

export default Catalog;