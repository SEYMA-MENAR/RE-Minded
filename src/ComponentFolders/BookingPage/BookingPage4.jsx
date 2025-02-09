import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Card1 from './Card';

function BookingPage4() {
  // window.scrollTo(0, 0);
  const { t } = useTranslation();
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });
  const navigate = useNavigate();

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  }

  function handleClick() {
    if (Object.values(checkboxes).some((val) => val === true)) {
      navigate('/booking5');
    } else {
      // eslint-disable-next-line no-alert
      alert('Please select at least one!');
    }
  }

  return (
    <div className="flex flex-col items-center p-12">
      <Card1 header={t('booking.header')} content={t('booking.content')} />
      <div className="font-poppins shadow-zinc-300 flex flex-col w-full md:max-w-2xl lg:max-w-4xl my-16 mx-auto px-8 py-4 shadow-md">
        <h1 className="text-xl pb-6 md:text-2xl lg:text-3xl lg:flex justify-center mt-4">
          {t('booking4.h1')}
        </h1>
        <form className="flex flex-col pl-6 text-md md:text-lg  lg:text-xl">
          <label htmlFor="one">
            <input
              type="checkbox"
              className="m-2 mb-6 mt-12"
              name="option1"
              checked={checkboxes.option1}
              onChange={handleCheckboxChange}
            />
            {t('booking4.b1')}
          </label>
          <label htmlFor="two">
            <input
              type="checkbox"
              className="m-2 mb-6"
              name="option2"
              checked={checkboxes.option2}
              onChange={handleCheckboxChange}
            />
            {t('booking4.b2')}
          </label>
          <label htmlFor="three">
            <input
              type="checkbox"
              className="m-2 mb-6"
              name="option3"
              checked={checkboxes.option3}
              onChange={handleCheckboxChange}
            />
            {t('booking4.b3')}
          </label>
          <label htmlFor="four">
            <input
              type="checkbox"
              className="m-2 mb-6"
              name="option4"
              checked={checkboxes.option4}
              onChange={handleCheckboxChange}
            />
            {t('booking4.b4')}
          </label>
        </form>
        <div className="flex justify-center md:justify-between lg:justify-between ">
          <Link to="/booking3">
            <button
              type="button"
              className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
            >
              {t('booking.previous')}
            </button>
          </Link>
          <button
            type="submit"
            onClick={handleClick}
            className="m-6 rounded-md box-border text-xl pr-6 pl-6 pt-2 pb-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 lg:text-2xl"
          >
            {t('booking.next')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage4;
