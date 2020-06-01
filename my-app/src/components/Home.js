import React, { useState } from 'react';
import img from '../UBC.jpg';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AddMessage from './addMessage';
import reducers from "../reducer";
import DisplayDetail from './DisplayDetail';
import {popMSG} from "../action";


function Home(props) {

    function renderMSG(msg) {
        return (
            <div>
            <wrap key={msg.id} {...msg} onClick={() => props.popMSG(msg.id)}>
                <td> {msg.name}</td>
                <td>: </td>
                <td> {msg.msg}</td>
            </wrap>
            <DisplayDetail detail={msg}/>
            </div>
        );

    }


    console.log("initial state",props.msg)
    return (
        <Content>
            <div className="header">Welcome</div>
            <AddMessage />
            <div className="content_list">
                <p>Message Board!</p>
                {/*<button id="show" className="show_list" onClick="showList();">Show List*/}
                {/*</button>*/}
                {/*<button id="hide" className="hide_list" onClick="hideList();">Hide List*/}
                {/*</button>*/}
                {/*<button id="clear" className="clear_list" onClick="clearList();">Clear List*/}
                {/*</button>*/}
                <ul>
                    {props.msg.map(renderMSG)}
                </ul>
            </div>
        </Content>

    );
}

const Content = styled.div`
    margin: 0;
    background: url(${img}) no-repeat center center fixed;
    display: flex;
    height: 1000px;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    div.header {
    margin: 0;
    font-size: 400%;
    text-align: center;
    }

    .field input{
    margin: 0;
    float:right;
    }
    .buttonHolder input{ 
    margin: 10px;
    text-align: center; 
    }
    .content_list button{ 
    margin: 5px;
    text-align: center; 
    }
`;



const mapStateToProps = (state) => { //name is by convention
    return { msg: state.msg}; //now it will appear as props
}

export default connect(mapStateToProps, {popMSG})(Home);