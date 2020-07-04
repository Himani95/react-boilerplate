import React from 'react';
//connecting LoginForm to redux store
//import { connect } from 'react-redux';
//to map login action creator into LoginForm
//import { login } from '../redux/reducer';

class DetailsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    render() {  
       // let {email, password} = this.state;

    return (
        <div className="details-form-wrapper" onSubmit={this.onSubmit}>
             <form name="detailsForm">
                 <label>First Name:     </label>
                 <input type="fname" name="fname" onChange={e => this.setState({fname: e.target.value})} required />
                 <br/><br/>
                 <label>Last Name:     </label>
                 <input type="lname" name="lname" onChange={e => this.setState({lname: e.target.value})} required />
                <br/>
                <br/>
                 <label>Address:     </label>
                 <input type="address" name="address" onChange={e => this.setState({address: e.target.value})} />
                <br/><br/>
                <label>Annual Income:     </label>
                 <input type="income" name="income" onChange={e => this.setState({income: e.target.value})} required />
                <br/><br/>
                <label>credit score:     </label>
                 <input type="score" name="score" onChange={e => this.setState({score: e.target.value})} />
                <br/><br/>
                <input type="submit" value="Search.." />
             </form>
        </div>
        );
    }
}

export default DetailsForm;