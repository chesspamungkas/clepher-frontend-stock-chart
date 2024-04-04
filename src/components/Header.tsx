import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white px-4 py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <p className="text-2xl font-bold">Clepher</p>
            </div>
        </header>
    );
};

export default Header;