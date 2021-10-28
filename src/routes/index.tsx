import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Grid } from '@chakra-ui/react';
import Home  from '../pages/Home';
import Login from '../pages/Login'
import Navbar from '../component/navbar/navbar';

const Routes = () => (
    <BrowserRouter>
        <Navbar/>
        <Grid gridColumn="1/4" gridRow="1">
            <Switch>
                <BrowserRouter path="/home">
                    <Home/>
                </BrowserRouter>
                <BrowserRouter path="/login">
                    <Login/>
                </BrowserRouter>    
            </Switch>
        </Grid>
    </BrowserRouter>
);

export default Routes;