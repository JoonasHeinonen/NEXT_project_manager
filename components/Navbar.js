import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex text-center'>
            <div className='w-1/2'>
                <nav>
                    <ul className='flex'>
                        <li>
                            <Link className='link' href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='link' href='/projects'>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link className='link' href='/about'>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='w-1/2'>
                <nav>
                    <ul>
                        <li>
                            <Link className='link' href='/login'>
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <style jsx>{`
                nav > ul {
                    padding: 4px 16px;
                }
                li {
                    display: flex;
                    padding: 6px 8px;
                }
            `}</style>
        </div>
    );
};

export default Navbar;