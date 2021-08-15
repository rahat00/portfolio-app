import React, { Component } from 'react'
import Home from '../MainComponentTree/Home'
import Service from '../MainComponentTree/Service'
import Contact from '../MainComponentTree/Contact'
import About from '../MainComponentTree/About'
import Portfolio from '../MainComponentTree/Portfolio'
import HireUs from '../MainComponentTree/HireUs'
import Navber from '../Navber'
import NotFound from '../MainComponentTree/NotFound'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


export default class RouteOne extends Component {


    render() {
        return (

            <Router>

                <Navber />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/service" component={Service} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/Portfolio" component={Portfolio} />
                    <Route path="/hireus" component={HireUs} />
                    <Route  component={NotFound} />
                </Switch>
               
            </Router>



        )
    }
}
