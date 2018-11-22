import React,{Component} from 'react';
import {Modal} from "semantic-ui-react";
import {Button} from "semantic-ui-react";

class GuestPopUpModal extends Component{

    constructor(props){
        super(props);
        this.state={
            isOpen:false
        };
    }

    handleSignIn=()=>{
        console.log(this.props);
        this.props.redirectToSignIn();
    };
    handleClose=()=>{
        this.setState({isOpen:false})
    };

    componentDidUpdate(prevProps,prevState,snapShot){
        if(prevProps.isOpen !== this.props.isOpen){
            this.setState({isOpen:true})
        }
    }
    render(){
        console.log("my post cliced");
        return(
            <Modal basic size={"tiny"} open={this.state.isOpen} trigger={this.props.children} onClose={this.handleClose} centered={false} closeIcon={true}>
                <Modal.Header> Please Sign In Below</Modal.Header>
                <Modal.Content>
                    <p>{this.props.content}</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.handleSignIn} positive icon='login' labelPosition='right' content='Sign In Here' />
                </Modal.Actions>
            </Modal>
        )
    }

}

export default GuestPopUpModal;