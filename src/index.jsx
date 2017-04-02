import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'Headline One',
        url: 'headline-one',
        author: 'parvez shaikh',
        media: 'http://gsdk.creative-tim.com/assets/img/examples/blog_page.jpg',
        listPara: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
        detailPara: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae arcu ligula. Sed dapibus aliquam diam eget tincidunt. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent vitae risus dapibus, maximus augue nec, aliquet nisl. Sed fringilla ullamcorper placerat. Nam ut nisi ante. Morbi suscipit sapien massa, sed consectetur nulla rutrum non. Nulla nisl tellus, maximus vehicula felis in, luctus pretium quam. Pellentesque eu nunc non quam suscipit tempor nec sit amet nisi. Donec fringilla elit viverra pulvinar ultrices. Mauris egestas sapien turpis, vestibulum consequat augue ultricies ut. Vivamus lobortis lacus nec lorem ultrices, laoreet tempus ligula aliquet. Donec feugiat dignissim congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eros lacus, imperdiet sit amet fermentum nec, euismod id mauris. Fusce at orci non ipsum lacinia pulvinar. In ornare lobortis orci. Quisque condimentum malesuada libero vel semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a eleifend neque, in commodo mauris.</p>'
    }
];


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car} data={data}/>
            {/* Parameter route*/}
            <Route path="/cars/:id" component={CarDetail} data={data}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);