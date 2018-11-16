import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {contactFetchSubSequently} from '../actions';
import './App.css';
import { Link } from 'react-router-dom'


 class APP extends Component {
    componentDidMount(){
      const payload = ['posts','albums']
      console.log('called')
      this.props.contactFetchSubSequently(payload)
    }

    render() {

        return (
          <div>
            Contact
            <Link to='/'>Home(App)</Link>
            <Link to='/about'>About(App)</Link>
                <Link to='/tick'>tick us</Link>
          </div>
        );
    }
}

export default connect(null,{contactFetchSubSequently})(APP)
