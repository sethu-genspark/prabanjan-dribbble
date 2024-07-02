import React from 'react'
import './App.css'
import NavBarComponent from './assets/Components/NavBarComponent/NavBarComponent'
import ContextProvider from './ContextProvider'
import FeedComponent from './assets/Components/FeedComponent/FeedComponent'
import FooterComponent from './assets/Components/FooterComponent/FooterComponent'

function App() {
    return (
        <ContextProvider>
            <div className='app'>
                <NavBarComponent />
                <FeedComponent />
                {/* <FooterComponent /> */}
            </div>
        </ContextProvider>
    )
}

export default App
