import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

// Create the app context
export const AppContext = createContext();

function App() {
    const [apps] = useState(
        [
            {
                app_id: 'clipboards-app',
                app_name: 'Clipboards',
            },
            {
                app_id: 'my-app-2',
                app_name: 'My app 2',
            },
            {
                app_id: 'my-app-3',
                app_name: 'My app 3',
            },

        ]
    );
    const [selected_app_id, select_app_id] = useState(null);

    return (
        <AppContext.Provider value={{ apps, selected_app_id, select_app_id }}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </Router>
        </AppContext.Provider>
    );
}

export default App;