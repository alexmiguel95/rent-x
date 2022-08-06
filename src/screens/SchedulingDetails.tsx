import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Accessory from '../components/Accessory';
import BackButton from '../components/BackButton';
import ImageSlider from '../components/ImageSlider';
import speedSvg from '../assets/speed.svg';
import accelerationSvg from '../assets/acceleration.svg';
import forceSvg from '../assets/force.svg';
import gasolineSvg from '../assets/gasoline.svg';
import exchangeSvg from '../assets/exchange.svg';
import peopleSvg from '../assets/people.svg';
import Button from '../components/Button';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

const SchedulingDetails = () => {
    const theme = useTheme();

    return (
        <StyledContainer>
            <StyledHeader>
                <BackButton onPress={() => {}} />
            </StyledHeader>

            <StyledCarImages>
                <ImageSlider imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']} />
            </StyledCarImages>

            <StyledContent>
                <StyledDetails>
                    <StyledDescripton>
                        <StyledBrand>Lanborghini</StyledBrand>
                        <StyledName>Huracan</StyledName>
                    </StyledDescripton>

                    <StyledRent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </StyledRent>
                </StyledDetails>

                <StyledAcessories>
                    <Accessory name="380Km/h" icon={speedSvg} />
                    <Accessory name="3.2s" icon={accelerationSvg} />
                    <Accessory name="800 HP" icon={forceSvg} />
                    <Accessory name="Gasolina" icon={gasolineSvg} />
                    <Accessory name="Auto" icon={exchangeSvg} />
                    <Accessory name="2 pessoas" icon={peopleSvg} />
                </StyledAcessories>
            </StyledContent>

            <StyledRentalPeriod>
                <StyledCalendarIcon>
                    <Feather name="calendar" size={24} color={theme.colors.shape} />
                </StyledCalendarIcon>

                <StyledDateInfo>
                    <StyledDateTitle>DE</StyledDateTitle>
                    <StyledDateValue>18/06/2022</StyledDateValue>
                </StyledDateInfo>

                <Feather name="chevron-right" size={10} color={theme.colors.text} />

                <StyledDateInfo>
                    <StyledDateTitle>DE</StyledDateTitle>
                    <StyledDateValue>18/06/2022</StyledDateValue>
                </StyledDateInfo>
            </StyledRentalPeriod>

            <StyledPrice>
                <StyledRentalPriceLabel>Total</StyledRentalPriceLabel>
                <StyledRentalPriceDetails>
                    <StyledRentalPriceQuota>R$ 580 x3 diárias</StyledRentalPriceQuota>
                    <StyledRentalPriceTotal>R$ 2.900</StyledRentalPriceTotal>
                </StyledRentalPriceDetails>
            </StyledPrice>

            <StyledFooter>
                <Button title="Confirmar" />
            </StyledFooter>
        </StyledContainer>
    );
};

const StyledContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

const StyledHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 24px;
`;

const StyledCarImages = styled.View`
    margin-top: 32px;
`;

const StyledContent = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 24,
        alignItems: 'center',
    },
    showsVerticalScrollIndicator: false,
})``;

const StyledDetails = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 38px;
`;

const StyledDescripton = styled.View``;

const StyledBrand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;

const StyledName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(25)}px;
`;

const StyledRent = styled.View``;

const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;

const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
    font-size: ${RFValue(25)}px;
`;

const StyledAcessories = styled.View`
    width: 100%;

    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    margin-top: 16px;
`;

const StyledFooter = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_secondary};

    padding: 24px;
`;

const StyledRentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 40px;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.line};
    padding-bottom: 16px;
`;

const StyledCalendarIcon = styled.View`
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.main};

    justify-content: center;
    align-items: center;
`;

const StyledDateInfo = styled.View``;

const StyledDateTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
`;

const StyledDateValue = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
`;

const StyledPrice = styled.View`
    width: 100%;
    margin-top: 16px;
`;

const StyledRentalPriceLabel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
`;

const StyledRentalPriceDetails = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledRentalPriceQuota = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
`;

const StyledRentalPriceTotal = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(24)}px;
`;

export default SchedulingDetails;