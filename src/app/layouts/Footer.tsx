'use client';
// eslint-disable-next-line simple-import-sort/imports
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

import Usa from '../../../public/images/usalogo.jpg';
import India from '../../../public/images/india.jpg';
import FooterLogo from '../../../public/images/footerlogo.png';

const Australia = '/images/auslogo.svg';
const CountryInd = '/images/charminar.svg';
const CountryAus = '/images/australia.jpg';
const CountryUsa = '/images/usalogo.png';

const Locations = () => {
  // your locations data
  const AllLocations = [
    {
      id: '1',
      country: 'USA',
      flag: Usa,
      countrylogo: CountryUsa,
      main: '650 Warrenville Road, Ste 100 Lisle - IL 60532',
      email: 'info@proficientnow.com',
      contact: '+1 (872) 305-0790',
      iframe:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.182952495526!2d-88.13640622434308!3d41.6733920782068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e58d72a8a1d2f%3A0x4485fc572f6039c2!2s748%20Dalton%20Ln%2C%20Bolingbrook%2C%20IL%2060490%2C%20USA!5e0!3m2!1sen!2sin!4v1695304183170!5m2!1sen!2sin',
    },
    {
      id: '3',
      country: 'Australia',
      flag: Australia,
      countrylogo: CountryAus,
      main: 'Thomastown, Victoria - 3074, Australia',
      email: 'info@proficientnow.com',
      contact: '(02) 7259 9757',
      iframe:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.182952495526!2d-88.13640622434308!3d41.6733920782068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e58d72a8a1d2f%3A0x4485fc572f6039c2!2s748%20Dalton%20Ln%2C%20Bolingbrook%2C%20IL%2060490%2C%20USA!5e0!3m2!1sen!2sin!4v1695304396073!5m2!1sen!2sin',
    },
    {
      id: '2',
      country: 'India',
      flag: India,
      countrylogo: CountryInd,
      main: 'Sanali Info Park, 5th Floor, B Block, 8-2-120/113, Road no.2 Banjara Hills Hyderabad Telangana India 500034',
      email: 'info@proficientnow.com',
      contact: '+91 9347408217',
      iframe:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7037515098946!2d78.41959207476543!3d17.425999101692472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb912d1e3313d7%3A0x766302af7d508e45!2s5th%20Floor%2C%20B%2C%20Sanali%20Info%20Park%2C%202%2C%20LV%20Prasad%20Marg%2C%20Park%20View%20Enclave%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500034!5e0!3m2!1sen!2sin!4v1695304305007!5m2!1sen!2sin',
    },
  ];

  // social icons array
  const socialLinks = [
    {
      href: 'https://facebook.com/proficientnow',
      icon: FaFacebookF,
      label: 'Facebook',
    },
    {
      href: 'https://twitter.com/proficientnow',
      icon: FaTwitter,
      label: 'Twitter',
    },
    {
      href: 'https://instagram.com/proficientnow',
      icon: FaInstagram,
      label: 'Instagram',
    },
    {
      href: 'https://linkedin.com/company/proficientnow',
      icon: FaLinkedinIn,
      label: 'LinkedIn',
    },
  ];

  return (
    <div className='w-full flex flex-col justify-center items-center bg-[#0f005f]'>
      <div className='base:flex flex-col gap-8 lg:grid lg:grid-cols-4 w-[90%] gap-x-5 justify-center base:py-[30px] max-w-[1440px] lg:py-[100px]'>
        {/* Logo + Social Icons */}
        <div className='flex flex-col items-center lg:items-start'>
          <Link href='/'>
            <Image
              alt='ProficientNow Logo'
              src={FooterLogo}
              className='base:w-[30px] base:h-[30px] lg:w-[43px] lg:h-[43px]'
            />
          </Link>
          <div className='mt-[35px] flex space-x-4'>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='text-white hover:text-gray-300 transition-colors'
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </div>

        {/* Location Cards */}
        <div className='flex base:flex-col lg:flex-row gap-5 lg:col-span-3'>
          {AllLocations.map((item, index) => (
            <div
              key={index}
              className='flex w-[90%] flex-col lg:gap-[50px] justify-between text-white'
            >
              <div className='flex flex-col gap-[10px] base:text-[min(3.3vw,20px)] lg:text-[min(1.2vw,20px)]'>
                <p className='base:text-[min(3.8vw,20px)] font-bold tracking-wide'>
                  {item.country}
                </p>
                <div className='flex base:gap-3 lg:gap-5 items-center'>
                  <Image
                    alt={`${item.country} flag`}
                    src={item.flag}
                    width={65}
                    height={40}
                    className='object-contain base:w-[min(9vw,65px)] base:h-[min(9vw,40px)] lg:w-[min(5vw,65px)] lg:h-[min(3.5vw,40px)]'
                  />
                </div>

                <div className='base:text-[min(3.6vw,20px)] lg:text-[min(1vw,20px)] flex flex-col gap-2 lg:gap-3'>
                  <p className='text-bullet'>
                    Main:<span className='text-white'> {item.main}</span>
                  </p>
                  <p className='text-bullet'>
                    Email:<span className='text-white'> {item.email}</span>
                  </p>
                  <p className='text-bullet'>
                    Contact No:
                    <span className='text-white'> {item.contact}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Websleak = () => {
  return (
    <div className='flex base:flex-col md:flex-row lg:items-center lg:justify-between base:px-[30px] lg:px-[100px] py-[30px] text-[#ACB1E0] text-[16px] font-semibold'>
      <div className='flex base:flex-col md:flex-row gap-4'>
        <div className='flex base:flex-wrap md:flex-row gap-5'>
          <p>© ProficientNow 2023</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className='flex base:flex-row gap-4'>
          <Link className='font-normal' href='/privacypolicy'>
            Privacy Policy
          </Link>
          <Link className='font-normal' href='/termsandconditions'>
            Terms and Conditions
          </Link>
        </div>
      </div>
      <br className='lg:hidden' />
    </div>
  );
};

const Footer = () => (
  <div className='w-full'>
    <div className='w-full flex flex-col justify-center bg-[#0f005f]'>
      <div>
        <div className='h-[1px] bg-[#FFFFFFB2]' />
        <Locations />
        <div className='h-[1px] bg-[#FFFFFFB2]' />
        <Websleak />
      </div>
    </div>
  </div>
);

export default Footer;
