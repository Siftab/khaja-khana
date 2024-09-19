import React from 'react';

const Header = () => {
    const navLinks = [
        {
            name: "Home",
            link: "/home"
        },
        {
            name: "About Us",
            link: "/about-us"
        },
        {
            name: "Our Menu",
            link: "/our-menu"
        }
    ];

    return (
        <header className='lg:max-w-screen-lg flex justify-center '>
            <nav>
                <ul className='flex gap-5'>
                    {navLinks.map((aLink) => (
                        <li key={aLink.link}> 
                            <a href={aLink.link}>{aLink.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
