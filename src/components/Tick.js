import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {start,stop} from '../actions';
import { Link } from 'react-router-dom'
import './App.css';


 class APP extends Component {


    onClickStart = () => this.props.start();
    onClickStop = () => this.props.stop()
    render() {

        return (
          <div>
            tick
            <Link to='/'>Home </Link>
            <Link to='/about'>About us</Link>
            <Link to='/contact'>Contact us</Link>
            <div>
              <button onClick={this.onClickStart}>Start</button>
              <button onClick={this.onClickStop}>Stop</button>
            </div>
          </div>
        );
    }
}

export default connect(null,{start,stop})(APP)
