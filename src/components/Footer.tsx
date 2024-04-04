import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 p-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-8 mb-8">
                    <div>
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">CLEPHER</h3>
                            <p className="text-gray-600 text-sm mb-2">Try it RISK-FREE</p>
                            <p className="text-gray-600 text-sm mb-2">About Us</p>
                            <p className="text-gray-600 text-sm mb-2">Pricing</p>
                            <p className="text-gray-600 text-sm mb-2">Integrations</p>
                            <p className="text-gray-600 text-sm mb-2">Roadmap</p>
                            <p className="text-gray-600 text-sm mb-2">Changelog</p>
                            <p className="text-gray-600 text-sm">Feature Requests</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
                            <p className="text-gray-600 text-sm mb-2">Blog</p>
                            <p className="text-gray-600 text-sm mb-2">Customers</p>
                            <p className="text-gray-600 text-sm mb-2">Founding Members</p>
                            <p className="text-gray-600 text-sm mb-2">Affiliates</p>
                            <p className="text-gray-600 text-sm">Press Kit</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">DISCOVER</h3>
                            <p className="text-gray-600 text-sm mb-2">Features</p>
                            <p className="text-gray-600 text-sm mb-2">Chatbot Templates</p>
                            <p className="text-gray-600 text-sm mb-2">Chatbot Flows</p>
                            <p className="text-gray-600 text-sm mb-2">Chatbot Alternative</p>
                            <p className="text-gray-600 text-sm mb-2">ROI Calculator</p>
                            <p className="text-gray-600 text-sm mb-2">Email vs. Messenger</p>
                            <p className="text-gray-600 text-sm">Support Hall of Fame</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">SOLUTIONS</h3>
                            <p className="text-gray-600 text-sm mb-2">for Freelancers</p>
                            <p className="text-gray-600 text-sm mb-2">for Agencies</p>
                            <p className="text-gray-600 text-sm mb-2">for Business Owners</p>
                            <p className="text-gray-600 text-sm mb-2">for Marketers</p>
                            <p className="text-gray-600 text-sm">for Support Agents</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">HELP</h3>
                            <p className="text-gray-600 text-sm mb-2">Contact Us</p>
                            <p className="text-gray-600 text-sm mb-2">Support</p>
                            <p className="text-gray-600 text-sm mb-2">Documentation</p>
                            <p className="text-gray-600 text-sm mb-2">API</p>
                            <p className="text-gray-600 text-sm mb-2">Status Page</p>
                            <p className="text-gray-600 text-sm">Community</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
                            <p className="text-gray-600 text-sm mb-2">Terms of Service</p>
                            <p className="text-gray-600 text-sm mb-2">Privacy Policy</p>
                            <p className="text-gray-600 text-sm mb-2">Cookie Policy</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-8">
                            <div className="mb-4">
                                <img alt="Clepher Logo Black" src="https://cdn1.clepher.com/wp-content/uploads/2023/07/clepher-logo-black.png" width="125" height="42" data-lazy-src="https://cdn1.clepher.com/wp-content/uploads/2023/07/clepher-logo-black.png" data-was-processed="true" data-ll-status="loaded" className="entered lazyloaded" />
                            </div>
                            <p className="text-gray-600 text-sm">© 2024, Clepher</p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
                            <p className="text-gray-600 text-sm mb-2">
                                <a href="mailto:support@clepher.com" className="hover:text-blue-600">
                                    support@clepher.com
                                </a>
                            </p>
                            <p className="text-gray-600 text-sm">
                                <a href="tel:+1(573)599-9666" className="hover:text-blue-600">
                                    +1 (573) 599-9666
                                </a>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-8">SOCIALIZE</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-600 hover:text-blue-600">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-blue-600">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-blue-600">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-blue-600">
                                    <FaYoutube size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;