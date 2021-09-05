import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
    const [ isSubmenuOpen, setIsSubmenuOpen ] = useState(false);
    const [ location, setLocation ] = useState({});
    const [ page, setPage ] = useState({page: '', links: []})


    const handleOpenSidebar = () => {
        setIsSidebarOpen(true);
    }

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    }

    const handleOpenSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates)
        setIsSubmenuOpen(true);
    }

    const handleCloseSubmenu = () => {
        setIsSubmenuOpen(false);
    }
    
    return <AppContext.Provider value={{
        isSubmenuOpen,
        isSidebarOpen,
        handleOpenSubmenu,
        handleOpenSidebar,
        handleCloseSidebar,
        handleCloseSubmenu,
        location,
        page,
    }}>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = () => {
    // eslint-disable-next-line no-undef
    return useContext(AppContext)
}