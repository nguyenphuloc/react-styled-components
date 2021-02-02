import styled from 'styled-components';
import Hobby from './Hobby';
import Infor from './Infor';

const CardContainer = styled.div`
    width: 350px;
    height: auto;
    border: 1px solid gray;
    border-radius: 5px;
    margin: auto;
    margin-top: 50px; 
`;

const Line = styled.div`
    width: 350px;
    height: 1px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: gray;
`
const Card = (props) => {
    const {header, title, number, month, button, headerInfor, detail} = props;
    return(
        <CardContainer>
            <Hobby 
                header={header}
                title={title}
                number={number}
                month={month}
                button={button}
            ></Hobby>
            <Line/>
            <Infor 
                headerInfor={headerInfor}
                detail={detail}
            ></Infor>
        </CardContainer>
    )
}

export default Card;