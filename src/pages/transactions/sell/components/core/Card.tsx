import React from 'react';
import { Card, H4, P, IMG, H3 } from 'pages/_common';

type CardProps = {
    name: string,
    description: string,
    price: number,
    image: string,
    children?: React.ReactNode | React.ReactNode[],
}

export default ({ name, price, image, children }: CardProps) => <Card>
    <IMG src={`../_images/${image}`} width='100%' height='250px' />
    <H4>{name}</H4>
    <H3>${price}</H3>
    {children}
</Card>