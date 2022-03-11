import React from 'react';
import styled from 'styled-components/native';

const Home = () => {
    return (
        <StyledCointainer>
            <StyledTitle>Home</StyledTitle>
        </StyledCointainer>
    );
}

const StyledCointainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledTitle = styled.Text``;

export default Home;
