import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import Logo from '../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import Car from '../components/Car';
import { FlatList } from 'react-native';

const Home = () => {
    const cardData = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'AO DIA',
            price: 120,
        },
        thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
    }

    return (
        <StyledCointainer>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <StyledHeader>
                <StyledHeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)} />
                    <StyledTotalCars>Total de 12 carros</StyledTotalCars>
                </StyledHeaderContent>
            </StyledHeader>

            <CarList 
                data={[1,2,3]}
                keyExtractor={(item: any) => String(item)}
                renderItem={() => <Car data={cardData} />} 
            />
        </StyledCointainer>
    );
}

const StyledCointainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
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

const CarList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})``;

export default Home;
