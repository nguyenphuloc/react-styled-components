import styled from 'styled-components';

const Title = styled.div`
    color:  #b3b3b3;
    margin-left: 20px; 
`

const TitleHeader = (props) => {
    return (
        <Title>{props.title}</Title>
    )
}

export default TitleHeader;