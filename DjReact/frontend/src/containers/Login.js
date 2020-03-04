import React from 'react';
import { Form, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import './style.css';

const FormItem = Form.Item;

const style = {padding: '5px 0'}

class NormalLoginForm extends React.Component {


  render() {

    return (
        <div>

            <div className="blueRectangle">
                <Row className="row">
                    <p className="jointitle">Join the AI Hub</p>
                </Row>
                <Row>
                    <Col span={11}>
                        <NavLink className='industryLink'
                            // style={{marginRight: '10px'}} 
                            to='/'> Industry
                        </NavLink>
                    </Col>
                    
                    <Col span={2} >
                        <div style={style} className= "littleRectangle"></div>
                    </Col>

                    <Col span={11}>
                        <NavLink className='academicLink'
                            // style={{marginRight: '10px'}} 
                            to='/academic/'> Academic
                        </NavLink>
                    </Col>
                </Row>
            </div>
                

        </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);