import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import Title from './Title';


const Price = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: 20px; 
`;

const Number = styled.div`
    color: #000000;
    font-size: 40px;
`;

const Month = styled.div`
    color: #b3b3b3;
    font-size: 20px;
    margin-top: 13px;
`;

const Button = styled.button`
    width: 280px;
    height: 40px;
    border-radius: 5px;
    background-color: #00004d;
    color: #ffffff;
    margin-left: 20px;
`;

const Hobby = (props) => {
    const {header, title, number, month, button, headerInfor, detail} = props;
    return(
        <>
            <Header header={header}/>
            <Title title={title}/>
            <Price>
                <FontAwesomeIcon icon={faDollarSign}/>
                <Number>{props.number}</Number>
                <Month>{props.month}</Month>
            </Price>
            <Button>{props.button}</Button>
        </>
    );
}

export default Hobby;