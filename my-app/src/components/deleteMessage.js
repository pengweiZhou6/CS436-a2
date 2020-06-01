import React from "react";
import {connect} from 'react-redux'
import {deleteMSG} from '../action/index'
import styled from 'styled-components'

const DeleteMessage = ({id,dispatch}) => {
    console.log("deleteeeeeeeeeeeeee!")
    console.log(id);
    return (
        <div>
            <button onClick={e => {
                e.preventDefault()
                dispatch(deleteMSG(id))
            }}>X</button>
        </div>
    )
}
export default connect()(DeleteMessage)