import React, {Component} from 'react';
import Home from './components/Home';
import AppRoutes from './routes';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppRoutes/>
            </div>
        );
    }
};

export default App;