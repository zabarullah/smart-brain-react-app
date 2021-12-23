import React from "react";
import './Signin.css';



class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://nameless-eyrie-62176.herokuapp.com/signin', {
            method: 'post',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then( user => {        /* This will prevent from loggin in if the response (data) is not = 'successfully logged in'(what the server responds for if email and password matched) */
            if (user.id){ 
                this.props.onRouteChange('home'); 
                this.props.loadUser(user);
            }
        })
        
    }

    render() {
        const {onRouteChange} = this.props;
        return (
            <article className=" backgrounddesign br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className=" pa4 black-80">
                <div className="measure bg-white ">
                    <fieldset id="sign_up" className=" ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
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
                        value="Sign in" 
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('register')} className="f4 link dim black db pointer">Register</p>
                    </div>
                </div>
            </main>
            </article>
        );
    }
}

export default Signin;