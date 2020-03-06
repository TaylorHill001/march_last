import React from 'react';
import './style.css';
import { Row, Col } from 'antd';
import 'react-bootstrap';

class Last extends React.Component {

    render (){
        return (
            <Row>
            <Col span={6}></Col>
            <Col span={12}>
                <p className="big">You're all set.</p>
            </Col>
            <Col span={6}></Col>
            </Row>
        )
    }

}

export default Last 