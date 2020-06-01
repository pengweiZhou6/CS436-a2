import React from "react";
import {connect} from 'react-redux'
import {addMSG} from '../action/index'
import styled from 'styled-components'

const AddMessage = ({dispatch}) => {
    let inputText;
    let inputName;

    return (
        <Content>
            <form onSubmit={e => {
                e.preventDefault()
                if (!inputName.value.trim()) {
                    alert("Name is empty!")
                    return
                }
                if (!inputText.value.trim()) {
                    alert("Message is empty!")
                    return
                }

                dispatch(addMSG(inputName.value,inputText.value))
                console.log("input:",inputText.value);
                console.log("input:",inputName.value);
                inputText.value = ''
                inputName.value = ''
            }}>
                <div className="field">
                    <label>
                        Name:
                        <input ref={node => inputName = node} />
                    </label>
                    <br></br>
                    <label>
                        Message:
                        <input ref={node => inputText = node} />
                    </label>
                    <br></br>
                </div>
                <div className="buttonHolder">
                    <button type="submit">
                        Submit
                    </button>
                    <button type="reset">
                        Clear
                    </button>
                </div>
            </form>
        </Content>
    )
}
const Content = styled.div`
    .field label{
    margin: 5px;
    float:right;
    }
    .buttonHolder button{ 
    margin: 10px;
    text-align: center; 
    }
`;
export default connect()(AddMessage)