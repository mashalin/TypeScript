import { useState } from "react";

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void;
}


const Card: React.FC<CardProps> = ({width, height, children, variant, onClick}) => {

    const [state, setState] = useState(0);

    return(
        <div onClick={() => onClick(state)} style={{width, height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : ''
        }}>
            {children}
        </div>
    );
}

export default Card;