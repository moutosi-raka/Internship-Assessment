import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div className='w-11/12 mx-auto py-5'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;