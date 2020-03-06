import React from 'react';
import axios from 'axios';

import Articles from '../components/Article';
import CustomForm from '../components/Form';

class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <CustomForm 
                    requestType="post"
                    articleID={null}
                    btnText="Submit" />
            </div>
        )
    }
}

export default ArticleList;