import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold text-blue-400">John Estate</span>
            </div>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt architecto soluta laboriosam, perspiciatis, aspernatur officiis esse.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>95 South Park Avenue, USA</p>
              <p>+456 875 369 208</p>
              <p>support@johnestate.com</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Twitter Feeds */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Twitter Feeds</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-gray-300 text-sm">
                    @johnestate all share them with me baby said inspet.
                  </p>
                  <p className="text-gray-500 text-xs mt-1">about 5 days ago</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-gray-300 text-sm">
                    @johnestate all share them with me baby said inspet.
                  </p>
                  <p className="text-gray-500 text-xs mt-1">about 5 days ago</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-gray-300 text-sm">
                    @johnestate all share them with me baby said inspet.
                  </p>
                  <p className="text-gray-500 text-xs mt-1">about 5 days ago</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletters</h3>
              <p className="text-gray-300 mb-4">
                Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news in your inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            2021 © Copyright - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
