import './Sidebar.scss'
import SidebarItem from "../SidebarItem/SidebarItem";

function Sidebar() {


    return (
        <div className='sidebar'>
            <div className='title'>Favorites</div>
            <SidebarItem/>
        </div>
    )
}

export default Sidebar
