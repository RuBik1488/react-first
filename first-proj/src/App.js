import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="mainContSec">
                    <Route path={'/profile'} component={Profile} />
                    <Route path={'/dialogs'} component={Dialogs} />
                    <Route path={'/news'} component={News} />
                    <Route path={'/music'} component={Music} />

                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;
