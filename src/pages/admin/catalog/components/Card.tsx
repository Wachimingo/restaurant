import React from 'react';
import type { ReactElement } from 'react';
import { Card, H4, P, IMG } from 'pages/_common';

type CardProps = {
    name: string,
    description: string,
    price: number,
    image: string,
    children?: React.ReactNode | React.ReactNode[],
    props?: any
}

export default ({ name, description, price, image, children, ...props }: CardProps): ReactElement => <Card>
    {children}
    <IMG src={`/assets/${image}`} width='100%' height='250px' />
    <H4>{name}</H4>
    <P>{description}</P>
    <P>${price}</P>
</Card>