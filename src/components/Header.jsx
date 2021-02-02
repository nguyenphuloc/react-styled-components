import styled from 'styled-components';

const Header = styled.div`
    font-size: 30px;
    color: #000000;
    margin-top: 20px;
    margin-left: 20px; 
`

const HobbyHeader = (props) => {
    return (
        <Header>{props.header}</Header>
    )
}

export default HobbyHeader;