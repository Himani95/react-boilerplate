import React from 'react';
//connecting LoginForm to redux store
import { connect } from 'react-redux';
//to map login action creator into LoginForm
import { login } from '../redux/reducer';
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";
import { BeatLoader } from 'react-spinners';

//To make the Login button work we did the below :
//<button onClick={this.onNavigateDetails} className="btn btn-primary">Login</button>
/* onNavigateDetails = () => {
        this.props.history.push("/Details")
    }*/
/*async function submitToServer(data) {
    try {
        let response = await fetch('https://localhost:3007', {
            method: 'POST',
            headers: {'Content-type': 'myapp/json',
    },
    body: JSON.stringify(data),
    });
        let responseJson = await response.json();
        return responseJson;
    } catch(error) {
        console.error(); 
    }
    
}  */  

//This was added to send the login details to server(server rendering)-onSubmit={submitToServer({ email, password })
//.then(data => console.log(data))}

class LoginForm extends React.Component {

    state = {
        loading: true
    }

    componentDidMount= () => {
        setTimeout(() => {
            this.setState({
                loading:false
            })
        },3000)
    }

    constructor(props) {
        super(props);
        this.state = {};

    }
    render() {  
        let {email, password} = this.state;

    return (
        <div className="login-form-wrapper" onSubmit={this.onSubmit}>
             <form name="loginForm">
                 
                 <label>Email:     </label>
                 <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} />
                 <br/>
                 <br/>
                 <label>Password:     </label>
                 <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} />
                <br/>
                <br/>
                 
                 <input type="submit" value="Login" />
                 
                 <Link to="/Details" >Login</Link>
                 <BeatLoader color="#26A65B" />
             </form>
        </div>
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        let { email, password } = this.state; //to retrieve email and password
        this.props.login(email, password);

    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

//export default LoginForm;
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);