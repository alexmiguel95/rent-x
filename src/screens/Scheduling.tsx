import React from 'react';
import styled, { css } from 'styled-components/native';
import BackButton from '../components/BackButton';
import { useTheme } from 'styled-components';
import ArrowSvg from '../assets/arrow.svg';
import Button from '../components/Button';
import Calendar from '../components/Calendar';

interface IDateValueProps {
    isSelected: boolean;
}

const Scheduling = () => {
    const theme = useTheme();

    return (
        <StyledContainer>
            <StyledHeader>
                <BackButton onPress={() => {}} color={theme.colors.shape} />

                <StyledTitle>Escolha uma data de início e fim do aluguel</StyledTitle>

                <StyledRentalPeriod>
                    <StyledDateInfo>
                        <StyledDateTitle>DE</StyledDateTitle>
                        <StyledDateValue isSelected={false}>18/06/2022</StyledDateValue>
                    </StyledDateInfo>

                    <ArrowSvg />

                    <StyledDateInfo>
                        <StyledDateTitle>ATÉ</StyledDateTitle>
                        <StyledDateValue isSelected={false}>18/06/2022</StyledDateValue>
                    </StyledDateInfo>
                </StyledRentalPeriod>
            </StyledHeader>

            <StyledContent>
                <Calendar />
            </StyledContent>

            <StyledFooter>
                <Button title="confirmar" />
            </StyledFooter>
        </StyledContainer>
    );
};

const StyledContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

const StyledHeader = styled.View`
    width: 100%;
    height: 325px;

    background-color: ${({ theme }) => theme.colors.header};

    justify-content: center;
    padding: 25px;
    padding-top: 30px;
`;

const StyledTitle = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: 34px;

    margin-top: 24px;
`;

const StyledRentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 32px 0;
`;

const StyledDateInfo = styled.View`
    width: 30%;
`;

const StyledDateTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: 10px;
`;

const StyledDateValue = styled.Text<IDateValueProps>`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: 15px;

    ${({ isSelected, theme }) =>
        !isSelected &&
        css`
            border-bottom-width: 1px;
            border-bottom-color: ${theme.colors.text};
            padding-bottom: 5px;
        `};
`;

const StyledContent = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 24,
    },
    showsVerticalScrollIndicator: false,
})``;

const StyledFooter = styled.View`
    padding: 24px;
`;

export default Scheduling;
