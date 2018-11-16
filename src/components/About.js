import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {aboutFetchSubSequently} from '../actions';
import './App.css';
import { Link } from 'react-router-dom'


 class APP extends Component {
    componentDidMount(){
      const payload = ['users','posts','albums']
      this.props.aboutFetchSubSequently(payload)
    }

    render() {

        return (
          <div>
            About
            <Link to='/'>Home(App)</Link>
            <Link to='/contact'>Contact us</Link>
                <Link to='/tick'>tick us</Link>
          </div>
        );
    }
}

export default connect(null,{aboutFetchSubSequently})(APP)
