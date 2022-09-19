import React, { Suspense, useState } from 'react';
import type { FC } from 'react';
import type { Dish } from 'interfaces';
import { Button, Div, H1, Main, Modal, NavBar, Section } from 'pages/_common';
import CardList from './components/CardList';
import Table from './components/Table';
import _dishes from 'json/dishes.json';

type Selecteds = {
    id: string,
    name: string,
    description: string,
    price: number
};

const Sell: FC = (): JSX.Element => {
    const [dishes, setDishes] = useState<Dish[]>(localStorage.getItem('dishes') === 'undefined' || !localStorage.getItem('dishes') ? _dishes : JSON.parse(localStorage.getItem('dishes')!));
    const [counters, setCounters] = useState<number[]>(() => dishes.map(() => 0));
    const [total, setTotal] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [selecteds, setSelecteds] = useState<Selecteds[]>([]);
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    const addToCart = (dish: Dish, i: number): void => {
        if (counters[i] < 1) {
            setSelecteds((oldSelecteds: Selecteds[]) => [...oldSelecteds, {
                id: dish?.id,
                name: dish?.name,
                description: dish?.description,
                price: dish?.price
            }]);
        }
        counters[i]++;
        setCounters((oldCounters: number[]) => [...oldCounters, counters[i]]);
        setTotal((oldTotal: number) => oldTotal + dish.price);
        setAmount((oldAmount: number) => oldAmount + 1);
    }

    const removeFromCart = (id: string, price: number, i: number): void => {
        if (counters[i] > 0) {
            counters[i]--;
            setCounters((oldCounters: number[]) => [...oldCounters, counters[i]]);
            setTotal((oldTotal: number) => oldTotal - price);
            setAmount((oldAmount: number) => oldAmount - 1);
        }
        if (counters[i] < 1) {
            setSelecteds((oldSelecteds) => oldSelecteds.filter((dish) => dish.id !== id));
        }
    }

    return <>
        <NavBar />
        <Main>
            <H1>Sell</H1>
        </Main>
        <Section>
            <Suspense>
                <CardList dishes={dishes} counters={counters} addToCart={addToCart} removeFromCart={removeFromCart} />
            </Suspense>
        </Section>
        <Section column>
            <Div width='50%'>
                <Table selecteds={selecteds} dishes={dishes} counters={counters} amount={amount} total={total} />
            </Div>
            <Button type="info" onClick={() => total > 0 ? setIsOpen(true) : undefined}>Checkout</Button>
        </Section>
        <Modal wrapperId='checkout' isOpen={isOpen} setIsOpen={setIsOpen}>
            <H1>Checkout Details:</H1>
            <Section column>
                <Table selecteds={selecteds} dishes={dishes} counters={counters} amount={amount} total={total} />
                <br />
                <Button type='success'>Pay now</Button>
            </Section>
        </Modal>
    </>
}

export default Sell;