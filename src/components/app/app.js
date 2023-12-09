import "./app.css"

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFiler from "../app-filter/app-filter"

const App = () => {
    return (
    <div className="app font-monospace">
        <div className="content">
            <AppInfo />
        </div>
        <div className="search-panel">
            <SearchPanel />
        </div>
        <div>
            <AppFiler/>
        </div>
    </div>
    )
}

export default App