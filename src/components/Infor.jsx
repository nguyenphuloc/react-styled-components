import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const HeaderInfor = styled.div`
    font-size: 25px;
    color: #000000;
    margin-top: 10px;
    margin-left: 20px;
`;
const Container = styled.p`
    margin-left: 20px;
    color: gray;
`;


const Infor = (props) => {
    const Detail = props.detail;
    return(
        <>
            <HeaderInfor>{props.headerInfor}</HeaderInfor>
            {
                Detail.map( (detail,i) => (
                    <Container key={i}>
                        <FontAwesomeIcon icon={faCheck} color="green"/>
                            {detail}
                    </Container>
                    ))
                }
        </>
    );
}

export default Infor;