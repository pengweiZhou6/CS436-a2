import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'
import 'react-table-6/react-table.css'
import img from '../UBC.jpg';
import styled from 'styled-components';
import AddMessage from './addMessage';




class UpdateMsg extends Component {
    render() {
        return <Update to={`/Update/${this.props.id}`}>Update</Update>
    }
}

class DeleteMsg extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the message from ${this.props.msg.name} permanently?`,
            )
        ) {
            api.deleteMsgById(this.props.msg._id)
            window.location.reload()
        }
    }
    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            columns: [],
            isLoading: false,
        }
    }

    deleteAll() {
        if (
            window.confirm(
                `Do tou want to delete ALL messages permanently?`,
            )
        ) {
            api.deleteAllMsg()
            window.location.reload()
        }
    }

    componentDidMount = async () => {
        this.setState({isLoading: true});

        await api.getAllMsg().then(messages => {
            this.setState({
                messages: messages.data,
                isLoading: false,
            })
        })
    };


    render() {
        const { messages, isLoading } = this.state
        console.log('TCL: MessagesList -> render -> messages', messages)
        console.log('length', messages.length)
        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Message',
                accessor: 'msg',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'createdAt',
                filterable: true,
            },
            {
                Header: 'Delete',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteMsg msg={props.original} />
                        </span>
                    )
                },
            },
            {
                Header: 'Edit',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateMsg id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = false
        if (messages.length !== 0 || typeof messages.length === "undefined") {
            if (messages.data.length) {
                console.log('pass:', messages.data)
                showTable = true
            }
        }

        return (
            <Content>
                <div className="header">Welcome</div>
                <AddMessage/>
                <button onClick={this.deleteAll} >
                    Delete All
                </button>
                <div className="content_list">
                    <p>Message Board!</p>
                    <Wrapper>
                        {showTable && (
                            <div className="table">
                            <ReactTable
                                data={messages.data}
                                columns={columns}
                                loading={isLoading}
                                defaultPageSize={10}
                                showPageSizeOptions={true}
                                minRows={0}
                            />
                            </div>
                        )}
                        {!showTable && (
                            <div className="empty">Empty! Please say something :)</div>
                        )}
                    </Wrapper>
                </div>
            </Content>

        );
    }



}
const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    div.table {
    background-color: white;
    }
    div.empty {
    color: white;
    background-color: black;
    text-align: center;
    }
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

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

export default Home
