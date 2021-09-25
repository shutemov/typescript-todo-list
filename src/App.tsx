import Paper from '@mui/material/Paper';
import Stack from '@material-ui/core/Stack';
import {styled} from '@mui/material/styles';
import Header from "./Header";
import React from 'react';
import './App.css';
import Project from "./Project";


function App() {
    return (
        <div className="App">
            <Header/>
            <Project/>
        </div>
    );
}

export default App;
