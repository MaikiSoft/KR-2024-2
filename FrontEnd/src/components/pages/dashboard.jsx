import React from 'react';
import { DashProvider } from '../../context/dashContext';
import Main from '../user/main';
import Menu from '../user/menu';
import Footer from '../user/footer';

const DashBoard = () => {
    return (
        <>
            <DashProvider>
                <div className="d-flex">
                    <Menu />
                    <Main />
                </div>
                <Footer />
            </DashProvider>
        </>
    )

}

export default DashBoard;