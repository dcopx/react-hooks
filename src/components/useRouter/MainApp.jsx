import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { LoginScreen } from './LoginScreen'
import { HomeScreen } from './HomeScreen'
import { AboutScreen } from './AboutScreen'
import { NavBar } from './NavBar'

export const MainApp = () => {
    return (
        <>
            <h1>Main</h1>
            <NavBar />
            <hr />

            <Routes>
                <Route path='/' element={< HomeScreen />} />
                <Route path='login' element={<LoginScreen />} />
                <Route path='about' element={<AboutScreen />} />
                <Route path='/*' element={<Navigate to='about' />} />
            </Routes>
        </>
    )
}
