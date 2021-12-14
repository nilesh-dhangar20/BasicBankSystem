import React from 'react'
import Navbar from './Components/Navbar';
import { Switch, Route } from 'react-router-dom';
import TransactionHistory from './Components/TransactionHistory';
import CustomerTable from './Components/CustomerTable';
import Home from './Components/Home';
import Footer from './Components/Footer';
const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/customers" component={CustomerTable} />
                <Route exact path='/transactions' component={TransactionHistory} />
            </Switch>
            <Footer/>
        </>
    )
}
export default App



