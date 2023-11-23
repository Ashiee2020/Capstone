import React from 'react';
import { buynestlogo, paymentlogo } from '../assets';
import {
BsGithub,
BsInstagram,
BsTwitter,
BsFacebook,
BsHouseDoor,
} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
import { BiSolidHelpCircle } from "react-icons/bi";
import {HiOutlineSearchCircle } from "react-icons/hi";
import {PiSignOutBold} from "react-icons/pi";

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titlefont'>
        <div className='max-w-screen-xl mx-auto grid grid-cols-3'>
            <div className='flex flex-col gap-7'>
               <img className='w-40' src={buynestlogo} alt='logo' />
               <p className='text-white text-sm tracking-wider'>© BUY-NEST. 2023</p>
               <img className='w-56' src={paymentlogo} alt='paymentlogo' />
                <div className='flex gap-5 text-lg text-gray-500'>
                    <BsGithub className='hover:text-white duration-300 cursor-pointer' />
                    <BsInstagram className='hover:text-white duration-300 cursor-pointer' />
                    <BsTwitter className='hover:text-white duration-300 cursor-pointer' />
                    <BsFacebook className='hover:text-white duration-300 cursor-pointer' />
                    <BsHouseDoor className='hover:text-white duration-300 cursor-pointer' />
                </div>
            </div>
            <div>
                <h2 className='text-2x1 font-semibold text-white mb-4'>Get & Contact Us On:</h2>
                <div className='text-base flex flex-col gap-2'>
                    <p>James Gichuru Rd, Nairobi, Nairobi, Kenya</p>
                    <p>Contact Us: 0712345678</p>
                    <p>Email: talk@buynest.com</p>
                    <p>Hotline: 040 897 543</p>
                    <p>Enquires: Enquires@buynest.com</p>
                </div>
            </div>

            <div>
                <h2 className='text-2x1 font-semibold text-white mb-4'>Profile</h2>
                <div className='flex flex-col gap-3 text-base'>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span>
                            <CgProfile />
                        </span>
                        My Account
                    </p>
                   
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span>
                            <HiOutlineSearchCircle />
                        </span>
                        Search
                    </p>
                   
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span>
                            <BiSolidHelpCircle />
                        </span>
                        Help & Support
                    </p>
                    <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                        <span>
                            <PiSignOutBold />
                        </span>
                        Sign Out
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;