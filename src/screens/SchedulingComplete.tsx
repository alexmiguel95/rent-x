import styled from 'styled-components/native';
import LogoSvg from '../assets/logo_background_gray.svg';
import DoneSvg from '../assets/done.svg';
import { useWindowDimensions } from 'react-native';
import ConfirmButton from '../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';
import { TypeRoute } from '../Routes';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type TypeNavigation = NativeStackNavigationProp<TypeRoute, 'Home'>;

const SchedulingComplete = () => {
    const navigation = useNavigation<TypeNavigation>();
    const { width } = useWindowDimensions();

    return (
        <StyledContainer>
            <LogoSvg width={width} />

            <StyledContent>
                <DoneSvg width={80} height={80} />
                <StyledTitle>Carro alugado!</StyledTitle>

                <StyledMessage>Agora você só precisa ir até a concessionária da RENTX</StyledMessage>
            </StyledContent>

            <StyledFooter>
                <ConfirmButton title="OK" onPress={() => navigation.navigate('Home')} />
            </StyledFooter>
        </StyledContainer>
    );
};

const StyledContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.header};

    padding-top: 96px;
`;

const StyledContent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    padding-bottom: 80px;
`;

const StyledTitle = styled.Text`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.secondary_600};

    margin-top: 40px;
`;

const StyledMessage = styled.Text`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text_detail};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    line-height: 25px;
    text-align: center;

    margin-top: 16px;
`;

const StyledFooter = styled.View`
    width: 100%;
    align-items: center;

    margin: 80px 0;
`;

export default SchedulingComplete;
