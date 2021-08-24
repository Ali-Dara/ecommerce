import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./components/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/Shop" component={Shop}/>
            </Switch>
        </div>
    );
}

export default App;
