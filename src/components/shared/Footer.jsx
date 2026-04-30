import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#00aeef] text-white py-12 mt-20">
            <div className="container mx-auto px-6 flex flex-col3 justify-between gap-10">
                {/* About */}
                <div className='flex-1'>
                    <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">Tile Gallery</h2>
                    <p className="text-sm leading-relaxed opacity-90">
                        Discover the perfect aesthetic for your home with our premium collection of ceramic, marble, and decorative tiles. Quality guaranteed.
                    </p>
                </div>

                {/* Contact Us */}
                <div className='flex-1'>
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm opacity-90">
                        <li>📍 Palash, Dhaka Division, Bangladesh</li>
                        <li>📧 mshb5778@gmail.com</li>
                        <li>📞 +8801776344313</li>
                        <div className="flex gap-4 mt-4 text-xl">

                            <Link target='blank' href={'https://www.facebook.com/share/14ZXerZM1bz/'}>
                                <FaFacebook className="cursor-pointer hover:text-gray-200" />
                            </Link>

                            <Link target='blank' href={'https://www.linkedin.com/in/md-sabbir-hossain-dev'}>
                                <FaLinkedin className="cursor-pointer hover:text-gray-200" />
                            </Link>

                            <Link target='blank' href={'https://github.com/sabbirhossain778'}>
                                <FaGithub className="cursor-pointer hover:text-gray-200" />
                            </Link>
                        </div>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className='flex-1'>
                    <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                    <p className="text-sm mb-4 opacity-90">Subscribe to get 10% off on your first purchase!</p>

                    <button className="bg-black text-white px-4 py-2 rounded-r-md font-bold hover:bg-gray-800 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-70">
                <p>© 2026 Tile Gallery. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;