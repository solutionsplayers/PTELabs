import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-left">
          <img src="/logo.png" alt="PTE Labs" className="mb-4" loading="lazy" />
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Rentals Section */}
        <div className="text-left">
          <h5 className="font-bold mb-4">Rentals</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Speaking
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Writing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Reading
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Listening
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Intensive Training
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="text-left">
          <h5 className="font-bold mb-4">Support</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Security
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-left">
          <h5 className="font-bold mb-4">Contact Us</h5>
          <p className="text-sm mb-2">+92-0423-8933-499</p>
          <p className="text-sm mb-2">contact@ptealabs.com</p>
          <p className="text-sm">Alhadeea Executive 8th Floor #13, Lahore</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-xs">&copy; 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
