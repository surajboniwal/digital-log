import React, { useState } from 'react'
import Home from './Home'
import Header from './../components/header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from '../Contact'
import Footer from '../components/footer/Footer'

export default function App() {

    const [activePage, setActivePage] = useState(0)

    return (
        <Router>
            <Header changePage={setActivePage} page={activePage}/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/contact' exact component={Contact}/>
            </Switch>
            <Footer changePage={setActivePage}/>
        </Router>
    )
}
