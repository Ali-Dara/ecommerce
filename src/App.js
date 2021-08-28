import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./components/shop/shop.component";
import SignInAndSignOur from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import Header from "./components/header/header.component";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/Shop" component={Shop}/>
                <Route path="/signIn" component={SignInAndSignOur}/>
            </Switch>
        </div>
    );
}

export default App;
