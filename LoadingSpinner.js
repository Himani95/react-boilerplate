import React , { Component } from 'react';

/*export default class Loading extends React.Component {
    constructor(props){
       super(props)
       this.state = {
          done: undefined
       }
    }

    componentDidMount() {
        setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
        }, 1200);
        }

    render(){
       return(
        <div>
        {!this.state.done ? (
           <ReactLoading type={"bars"} color={"white"} />
        ) : (
           <h1>Hello!!</h1>
        )}
     </div>
       )
    }
 }*/

class ButtonLoader extends Component {

    state = {
        loading : false
    }

    fetchData = () => {
        this.setState({loading : true });
    }

    render() {
        const {loading} = this.state;

        return (
            <div style={{marginTop : '60px'}}>
                <button className="button" onClick={this.fetchData} disabled={loading}>
                    {loading && <i className="fa fa-refresh fa-spin"></i> }
                        Login
                </button>   
            </div>
        )
    }

}

export default ButtonLoader;