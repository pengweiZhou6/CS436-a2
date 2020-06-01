import React from "react";
import styled from 'styled-components';
import DeleteMessage from './deleteMessage';
const DisplayDetail = props => {
    console.log("!!!!!!!!!")
    console.log(props.detail.showpopup)
    console.log("???????????")
    console.log(props)
    if (props.detail.showpopup) {
        return (
            <Wrapper>
            <td>Posted time:{props.detail.dateTime}</td>
                <td> <DeleteMessage id={props.detail.id}/></td>
            </Wrapper>
        )
    }else{
        return null;
    }
}
const Wrapper = styled.div`
  align-items: center;
  align-content: center;
  alignment: center;
  background: papayawhip;
`;
export default DisplayDetail;