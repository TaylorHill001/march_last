import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';

import CustomLayout from './containers/Layout';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  //take away custom layout to get rid of the other stuff. had it wrapped around baserouter
  //<CustomLayout {...this.props}>
  //</CustomLayout>
  render() {
    return (
      <div>
        <Router>
          
            <BaseRouter />
          
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
