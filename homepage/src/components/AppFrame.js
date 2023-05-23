import React, { useContext } from 'react';
import { AppContext } from '../App';

function AppFrame() {
    const { apps, selected_app_id } = useContext(AppContext);
    const app = apps.find(app => app.app_id === selected_app_id);

    if (!app) {
        return (
            <div id="no-app-selected">
                No app selected
            </div>
        );
    }

    const app_id = app.app_id
    const app_name = app.app_name
    // const app_url = `${window.location.host}/${app_id}`
    const app_url = `http://localhost:80/${app_id}`
    return (
        <iframe src={app_url} id='app-frame'></iframe>
    );
}

export default AppFrame;