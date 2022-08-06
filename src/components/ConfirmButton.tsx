import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface IProps extends RectButtonProps {
    title: string;
}

const ConfirmButton = ({ title, ...rest }: IProps) => {
    return (
        <StyledContainer {...rest}>
            <StyledTitle>{title}</StyledTitle>
        </StyledContainer>
    );
}

const StyledContainer = styled(RectButton)`
    width: 80px;
    height: 56px;

    background-color: ${({ theme }) => theme.colors.shape_dark};

    align-items: center;
    justify-content: center;
`;

const StyledTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.shape_dark};
    font-size: 15px;
`;

export default ConfirmButton;
