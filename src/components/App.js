import React,{Component,Fragment} from 'react';
import styled, {css} from 'styled-components';
import {connect} from 'react-redux';
import {fetchCall} from '../actions';
import { Link } from 'react-router-dom'
import './App.css';


 class APP extends Component {
    componentDidMount(){
      this.props.fetchCall()
    }

    render() {

        return (
          <div>
            app
            <Link to='/about'>About us</Link>
            <Link to='/contact'>Contact us</Link>
              <Link to='/tick'>tick us</Link>
          </div>
        );
    }
}

export default connect(null,{fetchCall})(APP)
