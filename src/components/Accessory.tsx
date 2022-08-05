
import { SvgProps } from 'react-native-svg';
import styled from 'styled-components/native';

interface IProps {
    name: string;
    icon: React.FC<SvgProps>;
}

const Accessory = ({ name, icon: Icon }: IProps) => {
    return (
        <StyledContainer>
            <Icon width={32} height={32} />
            <StyledName>{name}</StyledName>
        </StyledContainer>
    );
};

const StyledContainer = styled.View`
    width: 109px;
    height: 92px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_primary};

    padding: 16px;
    margin-bottom: 8px;
`;

const StyledName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
`;

export default Accessory;
