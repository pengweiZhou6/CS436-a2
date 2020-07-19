import React, { Component } from 'react'
import api from '../api'
import Select from 'react-select';
import styled from 'styled-components'
import img from "../UBC.jpg";



class MessageUpdate extends Component {
    options = () => {
        return [
            { value: 'important', label: 'Important' },
            { value: 'todo', label: 'Todo' },
            { value: 'done', label: 'Done' },
        ]
    }

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            msg: '',
            selectedOption: null,
        }
    }
    handleChangeInputType = selectedOption => {
        this.setState({ selectedOption });
    };

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputMsg = async event => {
        const msg = event.target.value
        this.setState({ msg })
    }


    handleUpdateMovie = async () => {
        const { id, name, msg } = this.state
        const type = this.state.selectedOption.value;
        const payload = { name, msg,type }
        console.log(payload)
        await api.updateMsgById(id, payload).then(res => {
            window.alert(`Movie updated successfully`)
            window.location.href = `/`
            this.setState({
                name: '',
                msg: '',
                selectedOption: null,
            })
        })
    }

    cancelAction = async () => {
        window.location.href = `/`
    }


    componentDidMount = async () => {
        const { id } = this.state
        const message = await api.getMsgById(id)

        this.setState({
            name: message.data.data.name,
            msg: message.data.data.msg,
            selectedOption: message.data.data.type
        })
    }

    render() {

        const { name, msg, selectedOption  } = this.state
        console.log("selectedOption")
        console.log(selectedOption)
        return (
    <Content>
            <Wrapper>
                <Title>Update Message</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Message: </Label>
                <InputText
                    type="text"
                    value={msg}
                    onChange={this.handleChangeInputMsg}
                />
                <br></br>
                <Label>Type: </Label>
                <Select
                    value={this.options().find(op => {
                        return op.value === selectedOption
                    })}
                    onChange={this.handleChangeInputType}
                    options={this.options()}
                />
                <br></br>
                <Button onClick={this.handleUpdateMovie}>Update</Button>
                <Button onClick={this.cancelAction}>Cancel</Button>
            </Wrapper>
    </Content>
        )
    }
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

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`
export default MessageUpdate