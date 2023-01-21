import React from 'react'
import useSticky from './hooks/useSticky.js'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'

function App() {
    const { isSticky, element } = useSticky()
    return (
        <>
            <Navbar sticky={isSticky} />
            <Welcome element={element} />
        </>
    )
}

export default App
