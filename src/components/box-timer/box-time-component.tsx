import React from "react";
import { useTime } from "../../hooks/use-time";

import * as Styled from './box-time-style';

export const BoxTimeComponenet = () => {
    const {time} = useTime();
    
    return (
        <Styled.Container>
            <Styled.Title>{time}</Styled.Title>
        </Styled.Container>
    )
}