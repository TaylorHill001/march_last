import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleList1 from './containers/ArticleListView1';
import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Last from './containers/End';

const BaseRouter = () => (
    <div>
        <Route exact path='/login/' component={Login} />
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/academic/' component={ArticleList1} />
        <Route exact path='/articles/:articleID/' component={ArticleDetail} />
       
        <Route exact path='/signup/' component={Signup} />
        <Route exact path='/end/' component={Last} />
    </div>
);

export default BaseRouter;