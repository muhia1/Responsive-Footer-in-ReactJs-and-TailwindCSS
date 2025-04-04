import React from 'react'

const Footer = () => {
  return (
    <Footer className="bg-gray-800 px-4 md:px-16 lg:px-28">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-8'>
            <div>
                <h2 className='text-lg font-bold mb-4 text-white'>
                    About Us
                </h2>
                <p className='text-gray-300'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Esse eaque doloremque, laboriosam temporibus sapiente dignissimos quos sit pariatur odio qui.
                </p>
            </div>
            <div>
                <h2 className='text-lg font-bold mb-4 text-white'>
                    Quick Links
                </h2>
                <ul>
                    <li>
                        <a href="" className="hover:underline text-gray-300">
                            Home 
                        </a>
                    </li>
                    <li>
                        <a href="" className="hover:underline text-gray-300">Services 
                        </a>
                    </li>
                    <li>
                        <a href="" className="hover:underline text-gray-300">
                            Contact Us 
                        </a>
                    </li>
                    <li>
                        <a href="" className="hover:underline text-gray-300">
                            About Us 
                        </a>
                    </li>
                </ul>
            </div>
            <div>
            <h2 className='text-lg font-bold mb-4 text-white'>
                    Follow Us
            </h2>
                <ul className='flex space-x-4'>
                    <li>
                        {""}
                        <FaFacebookF className="text-blue-500"/>
                        {""}
                        <a href="" className="hover:underline text-gray-300">
                            Facebook 
                        </a>
                    </li>
                    <li>
                        <FaTwitter className="text-sky-500"/>
                        <a href="" className="hover:underline text-gray-300">
                        Twitter 
                        </a>
                    </li>
                    <li>
                        <FaInstagram className="text-orange-500"/>
                        <a href="" className="hover:underline text-gray-300">
                            Instagram
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div className="border-t border-gray-600 pt-6 text-gray-300 text-center mt-6">
            <p>2025 Muhia. All Rights Reserved.</p>
        </div>
    </Footer>
  )
}

export default Footer