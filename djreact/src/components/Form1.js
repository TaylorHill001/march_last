import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { NavLink} from 'react-router-dom';
import axios from 'axios';
import '../containers/style.css';

const FormItem = Form.Item;


class CustomForm1 extends React.Component {
    state = {
        isEnabled: true,
        email: 0,
        companyName: 0,
        //poc: 0,
        //businessModel: 0,
        //industries: 0,
        //marketOpportunity: 0,
        //competitors: 0,
    }

    isWorking = (event) => {
        const email = event.target.value;
        const companyName = event.target.value;
        //const poc = event.target.value;
        //const businessModel = event.target.value;
        //const industries = event.target.value;
        //const marketOpportunity = event.target.value;
        //const competitors = event.target.value;
        //if (email.length < 40 
            //&& companyName.length < 1 
            //poc.length < 1 && 
            //businessModel.length < 1 && 
            //industries.length < 1 && 
            //marketOpportunity.length < 1 &&
            //competitors.length < 1
            //) {
            //    console.log(email.length)
           //     this.setState({isEnabled:true});
        // } else {
            
           // this.setState({isEnabled:false});
        // }
        { (email.length < 0 && companyName.length < 2)  ?
            this.setState({isEnabled:true})
            : 
            this.setState({isEnabled:false})
         }
    }

   shoot = () => {
        alert('Submit Successful')
    }
   
    handleFormSubmit = (event, requestType, articleID) => {
        const companyName = event.target.elements.title.value;
        const email = event.target.elements.email.value;
        const poc = event.target.elements.poc.value;
        const painPoint = event.target.elements.painPoint.value;
        const mainTech = event.target.elements.mainTech.value;
        const demoLink = event.target.elements.demoLink.value;
        
        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    email: email, 
                    title: companyName, 
                    poc: poc, 
                    painPoint: painPoint, 
                    mainTech: mainTech, 
                    demoLink: demoLink, 
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    email: email, 
                    title: companyName, 
                    poc: poc, 
                    painPoint: painPoint, 
                    mainTech: mainTech, 
                    demoLink: demoLink, 
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div className="container">
            <Row>
            <Col span={4}></Col>
            
            <Form onSubmit={(event) => this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.articleID )}
                onChange={(e) => this.isWorking(e)}>
            
            
            <Col span={16}>
            <FormItem>
                {getFieldDecorator('email', {
                    rules: [{
                    type: 'email', message: 'Invalid email',
                }, {
                    required: true, message: 'Please input your email',
                }],
                })
                (
                <Input name="email" placeholder="Email" />
                )}
            </FormItem>

            <FormItem>
                    <Input name="title" placeholder="Company Name" />
            </FormItem>

            <FormItem>
                <Input name="poc" placeholder="Point of Contact" />
            </FormItem>

            <FormItem >
                <Input name="painPoint" placeholder="What is the pain point your company solves for the Army?" />
            </FormItem>

            <FormItem>
                <Input name="mainTech" placeholder="Describe the main technology behind your product?" />
            </FormItem>

            <FormItem >
                <Input name="demoLink" placeholder="If you have a link to a demonstration, please include it here." />
            </FormItem>


            <FormItem>
                <Button onClick={this.shoot} type="primary" htmlType="submit" disabled={this.state.isEnabled}>{this.props.btnText}</Button>
            </FormItem>

            </Col>
            <Col span={4}></Col>
            </Form>
            </Row>
        </div>
        );
    }
}

const WrappedCustomForm1 = Form.create()(CustomForm1);

export default (WrappedCustomForm1);