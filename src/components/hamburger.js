import React from 'react';
import Sidebar from './sidebar.js';


const HamburgerMenu = () => (
    <div className='relative p-2 lg:hidden'>
        <Sidebar />
    </div>
);



export default HamburgerMenu;