import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./components/shop/shop.component";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/Shop" component={Shop}/>
            </Switch>
        </div>
    );
}

export default App;
