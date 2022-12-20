import React from "react";

import { BoxTimeComponenet } from "../components/box-timer";

import * as Styled from './home-style';

export const HomePage = () => {

    console.log("render page")
    return (
        <Styled.Container>
            <Styled.Title>Time</Styled.Title>
            <BoxTimeComponenet/>
        </Styled.Container>
    )
}