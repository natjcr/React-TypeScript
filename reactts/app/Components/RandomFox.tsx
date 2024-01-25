//Typescript encima de js
//generate random function numeroe netre el 1 y el 123.

import { useRef } from "react";

type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    
    node.current?.src

    return <img ref={node} width={320} height='auto' src={image} className='rounded' />
};