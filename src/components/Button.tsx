import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface IProps extends RectButtonProps {
    title: string;
    color?: string;
}

interface IButtonProps {
    color?: string;
}

const Button = ({ title, color, ...rest }: IProps) => {
    return (
        <StyledContainer color={color} {...rest}>
            <StyledText>{title}</StyledText>
        </StyledContainer>
    );
};

const StyledContainer = styled(RectButton)<IButtonProps>`
    width: 100%;

    padding: 19px;
    align-items: center;
    justify-content: center;

    background-color: ${({ color, theme }) => (color ? color : theme.colors.main)};
`;

const StyledText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: 15px;
    color: ${({ theme }) => theme.colors.shape};
`;

export default Button;
