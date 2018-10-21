import React,{Component} from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {Header,Form,Segment,Button,Icon} from 'semantic-ui-react';
import './signupModal.css';
import fire from '../loginDisplay/fire';

class SignupModal extends Component {
    constructor(props){
        super(props);
        this.signupSubmit = this.signupSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state={
            firstname:'',
            lastname:"",
            email:'',
            password:'',
            isSignedIn: false,
        }
    }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }

    signupSubmit(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=> {
                console.log(this.state.email);
            }
        ).catch((error) => {
            console.log(this.state.emailz);
                console.log(error);
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {
        return(
            <div id='form'>
                    <Header as='h2' style={{color:'white'}} textAlign='center'>
                    {' '}Sign up
                </Header>
                <Form size='large' style={{fontWeight:'bold'}}>
                    <Segment raised>

                        <Form.Input
                            fluid
                            icon='at'
                            iconPosition='left'
                            placeholder='Enter the your first name address'
                            name='firstname'
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='at'
                            iconPosition='left'
                            placeholder='Enter the your last name address'
                            name='lastname'
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='at'
                            iconPosition='left'
                            placeholder='Enter the your email address'
                            name='email'
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Enter the Password you desire'
                            name='password'
                            type='password'
                            onChange={this.onChange}
                        />
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                        <br/>
                        <Button
                            onClick={this.signupSubmit}
                            color='teal'
                            fluid
                            size='large'>Signup</Button>
                        <br/>
                    </Segment>
                </Form>


            </div>


        )}
}
export default SignupModal;