import React from 'react';
import axios from 'axios';

import Articles from '../components/Article';
import CustomForm1 from '../components/Form1';

class ArticleList1 extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('https://az-afc-django-demo.azurewebsites.net/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <CustomForm1 
                    requestType="post"
                    articleID={null}
                    btnText="Submit" />
            </div>
        )
    }
}

export default ArticleList1;
