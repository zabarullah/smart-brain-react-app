import React from "react";
import './Register.css';



class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
            
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://nameless-eyrie-62176.herokuapp.com/register', {
            method: 'post',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then( user => {        /* This will prevent from loggin in if the response (data) is not = 'successfully logged in'(what the server responds for if email and password matched) */
            if (user.id){ 
                this.props.loadUser(user);
                this.props.onRouteChange('home') 
            }
        })
        
    }

    render() {
        return (
            <article className=" backgrounddesign br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className=" pa4 black-80">
                <div className="measure bg-white ">
                    <fieldset id="sign_up" className=" ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db  fw6 lh-copy f4" htmlFor="name-address">Name</label>
                            <input 
                            className="black pa2 input-reset ba b--black  bg-white " 
                            type="text" 
                            name="name" 
                            id="name" 
                            onChange={this.onNameChange}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db  fw6 lh-copy f4" htmlFor="email-address">Email</label>
                            <input 
                            className="black pa2 input-reset ba b--black  bg-white " 
                            type="email" 
                            name="email-address" 
                            id="email-address" 
                            onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                            <input 
                            className="black b pa2 input-reset ba b--black  bg-white " 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={this.onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                        onClick={this.onSubmitSignIn}
                        className="b ph3 pv2 input-reset ba b--black black bg-white grow pointer f6 dib" 
                        type="submit" 
                        value="Register" 
                        />
                    </div>
                </div>
            </main>
            </article>
        );
    }
    
}

export default Register;