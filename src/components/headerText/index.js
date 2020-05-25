import styled from 'styled-components';

const HeaderText = styled.h1`
    text-align: center;
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSize.h1};

    @media(max-width: 786px){
        font-size: ${props => props.theme.fontSize.h3};
    }

    @media(max-width: 500px){
        font-size: 28px;
    }
`

export default HeaderText;
