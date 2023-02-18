import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Logo from './Images/Logo.svg';
import About from './About';
import MultiLangDropDown from './MultiLanguageButton';
import ProfilePhoto from './Images/ProfilePhoto.svg';

export default function NavBar({ handleSignout }) {
  const [navbar, setNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { t } = useTranslation();
  const signoutButton = useSelector((state) => state.signoutButton);
  const navigate = useNavigate();

  return (
    <nav className="w-full sticky top-0 z-50 bg-cyan-50 shadow font-poppins">
      <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center  py-3 md:py-5 md:block">
            <Link to="/">
              <div className="flex flex-row ">
                <img src={Logo} alt="Logo" />
                <a href="Logo">
                  <h2 className="text-3xl text-bold m-4 ml-3 font-medium">
                    Healing
                  </h2>
                </a>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    className="w-6 h-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="mt-3 space-y-2 lg:hidden md:hidden ">
              <div className="flex flex-col  items-center  text-xl ">
                <Link to="/">
                  <a className=" hover:text-indigo-200 pb-1 " href="Home">
                    {t('navbar.home')}
                  </a>
                </Link>
                <Link to="blog">
                  <a className=" hover:text-indigo-200 p-2" href="Blog">
                    {t('navbar.blog')}
                  </a>
                </Link>
                <Link to="About">
                  <a className=" hover:text-indigo-200 p-2" href="Home">
                    <About />
                  </a>
                </Link>
                <Link to="contactus">
                  <a className=" hover:text-indigo-200 p-2" href="Blog">
                    {t('navbar.contact_us')}
                  </a>
                </Link>

                <Link to={signoutButton ? 'profilepage' : 'login'}>
                  {!signoutButton ? (
                    <button
                      type="button"
                      className="flex justify-center px-4 py-2 text-center rounded-md shadowtransition-all duration-250 bg-cyan-400 hover:bg-cyan-500 text-xl"
                    >
                      {t('navbar.log_in')}
                    </button>
                  ) : (
                    <img
                      className="w-11 h-11"
                      src={ProfilePhoto}
                      alt="Abstract profile pic"
                    />
                  )}
                </Link>
                <button
                  type="button"
                  onClick={() => handleSignout(() => navigate('/'))}
                >
                  Log Out
                </button>
                <div>
                  <MultiLangDropDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <Link to="/">
              <li className=" hover:text-indigo-200">
                <a href="Home">{t('navbar.home')}</a>
              </li>
            </Link>
            <Link to="blog">
              <li className=" hover:text-indigo-200">
                <a href="Blog">{t('navbar.blog')}</a>
              </li>
            </Link>

            <li className=" hover:text-indigo-200 cursor-pointer">
              <About />
            </li>

            <Link to="contactus">
              <li className=" hover:text-indigo-200">
                <a href="Contact">{t('navbar.contact_us')}</a>
              </li>
            </Link>

            {signoutButton ? (
              <div className="relative">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md shadow transition-all duration-250 bg-cyan-400 hover:bg-cyan-500"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <img
                    className="w-11 h-11"
                    src={ProfilePhoto}
                    alt="Abstract profile pic"
                  />
                </button>
                {showDropdown && (
                  <ul className="font-poppins absolute right-0  w-48 py-2 mt-1 rounded-md shadow-2xl  bg-[#c2e5eb]">
                    <li>
                      <Link
                        to="profilepage"
                        onClick={() => setShowDropdown(false)}
                        className="font-poppins flex justify-center px-4 py-2 text-md text-gray-700 hover:bg-cyan-500"
                      >
                        Profile Page
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => handleSignout(() => navigate('/'))}
                        className=" font-poppins w-full block px-4 py-2 text-md text-gray-700  hover:bg-cyan-500"
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link to="login">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md shadow transition-all duration-250 bg-cyan-400 hover:bg-cyan-500"
                >
                  {t('navbar.log_in')}
                </button>
              </Link>
            )}
            <li>
              <MultiLangDropDown />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
