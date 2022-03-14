import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import Logo from '../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';

const Home = () => {
    return (
        <StyledCointainer>
            <StatusBar barStyle="light-content"  />
            <StyledHeader>
                <StyledHeaderContent>
                    <Logo height={RFValue(108)} width={RFValue(12)} />
                    <StyledTotalCars>Total de 12 carros</StyledTotalCars>
                </StyledHeaderContent>
            </StyledHeader>
        </StyledCointainer>
    );
}

const StyledCointainer = styled.View`
    flex: 1;
`;

const StyledHeader = styled.View`
    width: 100%;
    height: 113px;

    background-color: ${({ theme }) => theme.colors.header};

    justify-content: flex-end;
    padding: 32px 24px;
`;

const StyledHeaderContent = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

const StyledTotalCars = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text};
`;

export default Home;
