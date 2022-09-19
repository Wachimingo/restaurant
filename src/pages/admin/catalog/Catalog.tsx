import React, { Suspense, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { Div, H1, H2, Modal, NavBar, Section } from 'pages/_common';
import Card from './components/Card';
import { FaArrowAltCircleUp, FaArrowCircleDown, FaCog, FaTrash } from 'react-icons/fa'
import { BubbleBtn } from 'pages/_common';
import { Main } from 'pages/_common';
import { useForm } from 'react-hook-form';
import { DishForm } from './components/Form';
import { Controls } from './components/Controls';
import type { Dish } from 'interfaces/dish.mjs';
import _dishes from 'json/dishes.json';

const Catalog: FC = () => {
    const [dishes, setDishes] = useState<Dish[]>(localStorage.getItem('dishes') === 'undefined' || !localStorage.getItem('dishes') ? _dishes : JSON.parse(localStorage.getItem('dishes')!));
    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
    const [isPost, setIsPost] = useState<Boolean>(true);
    const { register, handleSubmit, reset, setValue, formState: { isSubmitSuccessful } } = useForm();

    const loadItem = ({ name, description, price, image, id }: Dish) => {
        setValue('name', name);
        setValue('description', description);
        setValue('price', price);
        setValue('img', image);
        setValue('id', id);
        setIsPost(false);
        setIsModalOpen(true);
    }

    const clearForm = () => {
        reset({
            name: '',
            description: '',
            price: '',
            image: '',
            img: '',
            id: '',
        });
    }
    const removeItem = async (id: string) => {
        // await remove({ id });
        setDishes((dishes: Dish[]) => {
            const newDishes: Dish[] = dishes?.filter((dish: Dish) => dish.id !== id);
            return newDishes;
        });
    }

    const openPostModal = () => {
        setIsPost(true);
        setIsModalOpen((isOpen: Boolean) => !isOpen);
    }

    const toggleForToday = async (id: string, forToday: boolean) => {
        // const res = await patch({ id, forToday: !forToday });        
        const res = _dishes.map((dish) => {
            if (dish.id === id) {
                dish.forToday = !forToday;
            }
            return dish;
        });
        setDishes(() => [...res]);
        localStorage.setItem('dishes', JSON.stringify(res));
    }

    const renderDishes: ReactNode = dishes?.map((dish: Dish, i: number) => {
        return <Card key={`${dish.name}_card_${i}`} {...dish}>
            <Div>
                <Controls type='warning' onClick={() => loadItem(dish)}>
                    <FaCog />
                </Controls>
                <Controls type='error' onClick={() => removeItem(dish.id)}>
                    <FaTrash />
                </Controls>
                <Controls type={dish.forToday ? 'error' : 'success'} onClick={() => toggleForToday(dish.id, dish.forToday)}>
                    {
                        dish.forToday
                            ?
                            <FaArrowCircleDown />
                            :
                            <FaArrowAltCircleUp />
                    }
                </Controls>
            </Div>
        </Card>
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
            <BubbleBtn onClick={() => openPostModal()}>+</BubbleBtn>
        </Section>
        <Modal wrapperId='catalog' isOpen={isModalOpen} setIsOpen={setIsModalOpen} setIsPost={setIsPost} clearForm={clearForm}>
            <H2>{isPost ? 'Add' : 'Modify'}</H2>
            <DishForm
                handleSubmit={handleSubmit}
                register={register}
                setIsModalOpen={setIsModalOpen}
                isPost={isPost}
                setIsPost={setIsPost}
                setDishes={setDishes}
            />
        </Modal>
    </>
}

export default Catalog;