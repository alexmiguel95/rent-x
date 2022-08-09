import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import GasolineSvg from '../assets/gasoline.svg';

interface ICarData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    },
    thumbnail: string;
}

interface IProps extends RectButtonProps {
    data: ICarData;
}

const Car = ({ data, ...rest }: IProps) => {
    return (
        <StyledContainer {...rest}>
            <StyledDetails>
                <StyledBrand>{data.brand}</StyledBrand>
                <StyledName>{data.name}</StyledName>

                <StyledAbout>
                    <StyledRent>
                        <StyledPeriod>{data.rent.period}</StyledPeriod>
                        <StyledPrice>{`R$ ${data.rent.price}`}</StyledPrice>
                    </StyledRent>

                    <StyledType>
                        <GasolineSvg />
                    </StyledType>
                </StyledAbout>
            </StyledDetails>

            <StyledCarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
        </StyledContainer>
    );
}

const StyledContainer = styled(RectButton)`
    width: 100%;
    height: 126px;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 24px;
    margin-bottom: 16px;
`;

const StyledDetails = styled.View``;

const StyledBrand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
`;

const StyledName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
`;

const StyledAbout = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 16px;
`;

const StyledRent = styled.View`
    margin-right: 24px;
`;

const StyledPeriod = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
`;

const StyledPrice = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
    font-size: ${RFValue(15)}px;
`;

const StyledType = styled.View``;

const StyledCarImage = styled.Image`
    width: 167px;
    height: 85px;
`;

export default Car;
