import React from 'react';

const Layout3 = () => {
    return (
        <div>
            <div>
                <h1>My name is Raka</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div className='border'>
                    <h1>dev 1</h1>
                </div>
                <div className='col-span-2 border'>
                    <h1>dev 2</h1>
                </div>
                <div className='border'>
                    <h1>dev 3</h1>
                </div>
            </div>
            <div>
                <h1>footer</h1>
            </div>
        </div>
    );
};

export default Layout3;