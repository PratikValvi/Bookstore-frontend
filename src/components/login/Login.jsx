import React, { Component } from 'react';
import { isEmail } from 'validator';
import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            email: '',
            password: '',
        },
        errors: {}
    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        if (data.password === '') errors.password = 'Password must be valid.';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            //Call an api here
            //Resetting the form
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const { data, errors } = this.state;
        return (
            <div class="bodyy">
            <div class="wrapper">
                <div class="title">
                    Login
                </div>
                <form action="#" onSubmit={this.handleSubmit}>
                    <div class="field">
                        <input 
                            id="email" 
                            value={data.email} 
                            invalid={errors.email ? true : false} 
                            name="email" 
                            onChange={this.handleChange} />
                        <label>Email Address</label>
                        <div class="error-div">
                            <error>{errors.email}</error>
                        </div>
                    </div>
                    <div class="margin"><label>Email Address</label></div>
                    <div class="field">
                        <input 
                            id="password" 
                            value={data.password} 
                            type="password" 
                            name="password" 
                            invalid={errors.password ? true : false} 
                            onChange={this.handleChange} />
                        <label>Password</label>
                        <div class="error-div">
                            <error>{errors.password}</error>
                        </div>
                    </div>
                    <div class="margin"><label>Password</label></div>
                    <div class="content">
                        <div class="field">
                            <input type="submit" value="Login"/>
                        </div>
                    </div>
                    <div class="signup-link">
                         Not a member? <a href="/signup">Signup now</a>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default Login;