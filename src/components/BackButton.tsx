import React from 'react';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';

interface IProps extends BorderlessButtonProps {
    color?: string;
}

const BackButton = ({ color, ...rest }: IProps) => {
    const theme = useTheme();

    return (
        <StyledContainer {...rest}>
            <MaterialIcons 
                name="chevron-left"
                size={24}
                color={color ? color : theme.colors.text}
            />
        </StyledContainer>
    );
}

const StyledContainer = styled(BorderlessButton)``;

export default BackButton;
