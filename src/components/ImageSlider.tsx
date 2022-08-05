import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

interface IProps {
    imagesUrl: string[];
}

interface IImageIndexProps {
    active: boolean;
}

const ImageSlider = ({ imagesUrl }: IProps) => {
    return (
        <StyledContainer>
            <StyledImageIndexes>
                <StyledImageIndex active={false} />
                <StyledImageIndex active={false} />
                <StyledImageIndex active={false} />
                <StyledImageIndex active={false} />

                <StyledCarImageWrapper>
                    <StyledCarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
                </StyledCarImageWrapper>
            </StyledImageIndexes>
        </StyledContainer>
    );
};

const StyledContainer = styled.View`
    width: 100%;
`;

const StyledImageIndexes = styled.View`
    flex-direction: row;
    /* align-self: flex-end; */
    padding-right: 24px;
`;

const StyledImageIndex = styled.View<IImageIndexProps>`
    width: 6px;
    height: 6px;

    background-color: ${({ theme, active }) => (active ? theme.colors.title : theme.colors.shape)};

    margin-left: 8px;
    border-radius: 3px;
`;

const StyledCarImageWrapper = styled.View`
    width: ${Dimensions.get('window').width}px;
    height: 132px;

    justify-content: center;
    align-items: center;
`;

const StyledCarImage = styled.Image`
    width: 280px;
    height: 132px;
`;

export default ImageSlider;
