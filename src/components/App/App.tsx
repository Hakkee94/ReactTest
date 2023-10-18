import './App.scss'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function App({children}) {
    return (
        <div className='page'>

            <Header title='Product Page'/>

            <div className='content'>
                <Sidebar/>
                {children}
            </div>
        </div>
    )
}

export default App
