import React, { Component } from 'react';
import { isEmail } from 'validator';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            password: '',
            confirmPassword: ''
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

        if (data.firstName === '') errors.firstName = 'First Name can not be blank.';
        if (data.lastName === '') errors.lastName = 'Last Name can not be blank.';
        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        if (data.phoneNumber === '') errors.phoneNumber = 'Phone Number can not be blank.';
        if (data.address === '') errors.address = 'Address can not be blank.';
        if (data.password === '') errors.password = 'Password must be valid.';
        if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords must match.';

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
                    Sign Up
                </div>
                <form action="#" onSubmit={this.handleSubmit}>
                <div class="field">
                    
                    <input id="firstName" value={data.firstName} invalid={errors.firstName ? true : false} name="firstName" onChange={this.handleChange} />
                    <label for="firstName">First Name</label>
                    <div class="error-div">
                        <error>{errors.firstName}</error>
                    </div>
                </div>
                <div class="margin"><label>Margin</label></div>
                <div class="field">
                    
                    <input id="lastName" value={data.lastName} invalid={errors.lastName ? true : false} name="lastName" onChange={this.handleChange} />
                    <label for="lastName">Last Name</label>
                    <div class="error-div">
                        <error>{errors.lastName}</error>
                    </div>
                </div>
                <div class="margin"><label>Margin</label></div>
                <div class="field">
                    
                    <input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} />
                    <label for="email">Email</label>
                    <div class="error-div">
                        <error>{errors.email}</error>
                    </div>
                    
                </div>
                <div class="margin"><label>Margin</label></div>
                <div class="field">
                    
                    <input id="phoneNumber" value={data.phoneNumber} invalid={errors.phoneNumber ? true : false} name="phoneNumber" onChange={this.handleChange} />
                    <label for="phoneNumber">Phone Number</label>
                    <div class="error-div">
                        <error>{errors.phoneNumber}</error>
                    </div>
                    
                </div>
                <div class="margin"><label>Margin</label></div>
                <div class="field">

                    <input id="address" value={data.address} invalid={errors.address ? true : false} name="address" onChange={this.handleChange} />
                    <label for="address">Address</label>
                    <div class="error-div">
                        <error>{errors.address}</error>
                    </div>
                    
                </div>
                <div class="margin"><label>Margin</label></div>
                <div class="field">
                    
                    <input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                    <label for="password">Password</label>
                    <div class="error-div">
                        <error>{errors.password}</error>
                    </div>
                    
                </div>
                <div class="margin"><label>Margin</label></div>
                <div class="field">
                    
                    <input id="confirmPassword" value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
                    <label for="confirmPassword">Confirm Password</label>
                    <div class="error-div">
                        <error>{errors.confirmPassword}</error>
                    </div>
                    
                </div>
                <div class="margin"><label>Margin</label></div>
                <div class="content">
                    <div class="field">
                        <input type="submit" value="Sign up"/>
                    </div>
                </div>

                <div class="signup-link">
                    Already a member? <a href="/signin">Login</a>
                </div>
            </form>
        </div>
        </div>
        );
    }
}

export default Register;