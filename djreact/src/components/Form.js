import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import axios from 'axios';
import '../containers/style.css';

const FormItem = Form.Item;


class CustomForm extends React.Component {
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
        const businessModel = event.target.elements.businessModel.value;
        const industries = event.target.elements.industries.value;
        const marketOpportunity = event.target.elements.marketOpportunity.value;
        const competitors = event.target.elements.competitors.value;
        

        switch ( requestType ) {
            case 'post':
                return axios.post('https://az-afc-django-demo.azurewebsites.net/api/', {
                    email: email, 
                    title: companyName, 
                    poc: poc, 
                    businessModel: businessModel, 
                    industries: industries, 
                    marketOpportunity: marketOpportunity, 
                    competitors: competitors
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`https://az-afc-django-demo.azurewebsites.net/api/${articleID}/`, {
                    email: email, 
                    title: companyName, 
                    poc: poc, 
                    businessModel: businessModel, 
                    industries: industries, 
                    marketOpportunity: marketOpportunity, 
                    competitors: competitors
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
                <Input name="businessModel" placeholder="What is your business model and pricing? How are your customers charged?" />
            </FormItem>

            <FormItem>
                <Input name="industries" placeholder="What industries has your technology helped?" />
            </FormItem>

            <FormItem >
                <Input name="marketOpportunity" placeholder="What is the market opportunity for each industry your technology develops?" />
            </FormItem>

            <FormItem  >
                <Input name="competitors" placeholder="List some of your competitors. What differentiates you from your competitors?" />
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

const WrappedCustomForm = Form.create()(CustomForm);

export default (WrappedCustomForm);
