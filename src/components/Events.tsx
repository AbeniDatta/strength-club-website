import React from 'react';

import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Divider from './Divider';
import config from '../config/index.json';

const Events = () => {
  const { events } = config;
  const [firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem] =
    events.items;

  return (
    <section className={`bg-background py-4`} id="events">
      <div className={`container max-w-5xl mx-auto m-2`}>
        <h1
          className={`w-full my-2 text-4xl font-bold leading-tight text-center text-primary`}
        >
          {events.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className="w-full my-2 flex justify-center">
          <a
            href={events.link.url}
            className="block bg-primary text-white text-center border-transparent py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 hover:border-none"
          >
            {events.link.text}
          </a>
        </div>

        {/* left */}
        <div className={`flex flex-wrap`}>
          <div className={`w-full sm:w-1/2 p-4 sm:p-6 mt-4 sm:mt-15`}>
            <h3
              className={`text-2xl sm:text-2xl text-gray-800 font-bold leading-tight mb-3`}
            >
              {firstItem?.title}
            </h3>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon icon={faClock} className="mr-2 text-primary" />
              {firstItem?.dateTime}
            </h4>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-3 ml-0.5 text-primary"
              />
              {firstItem?.location}
            </h4>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center`}
          >
            <img
              className="h-5/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>

        {/* right */}
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center`}
          >
            <img
              className="h-5/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-4 sm:p-6 mt-4 sm:mt-15`}>
            <h3
              className={`text-2xl sm:text-2xl text-gray-800 font-bold leading-tight mb-3`}
            >
              {secondItem?.title}
            </h3>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon icon={faClock} className="mr-2 text-primary" />
              {secondItem?.dateTime}
            </h4>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-3 ml-0.5 text-primary"
              />
              {secondItem?.location}
            </h4>
            <p className={`text-gray-600`}>{secondItem?.description}</p>
          </div>
        </div>

        {/* left */}
        <div className={`flex flex-wrap`}>
          <div className={`w-full sm:w-1/2 p-4 sm:p-6 mt-4 sm:mt-15`}>
            <h3
              className={`text-2xl sm:text-2xl text-gray-800 font-bold leading-tight mb-3`}
            >
              {thirdItem?.title}
            </h3>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon icon={faClock} className="mr-2 text-primary" />
              {thirdItem?.dateTime}
            </h4>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-3 ml-0.5 text-primary"
              />
              {thirdItem?.location}
            </h4>
            <p className={`text-gray-600`}>{thirdItem?.description}</p>
          </div>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center`}
          >
            <img
              className="h-5/6"
              src={thirdItem?.img}
              alt={thirdItem?.title}
            />
          </div>
        </div>

        {/* right */}
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center`}
          >
            <img
              className="h-5/6"
              src={fourthItem?.img}
              alt={fourthItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-4 sm:p-6 mt-4 sm:mt-15`}>
            <h3
              className={`text-2xl sm:text-2xl text-gray-800 font-bold leading-tight mb-3`}
            >
              {fourthItem?.title}
            </h3>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon icon={faClock} className="mr-2 text-primary" />
              {fourthItem?.dateTime}
            </h4>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-3 ml-0.5 text-primary"
              />
              {fourthItem?.location}
            </h4>
            <p className={`text-gray-600`}>{fourthItem?.description}</p>
          </div>
        </div>

        {/* left */}
        <div className={`flex flex-wrap`}>
          <div className={`w-full sm:w-1/2 p-4 sm:p-6 mt-4 sm:mt-15`}>
            <h3
              className={`text-2xl sm:text-2xl text-gray-800 font-bold leading-tight mb-3`}
            >
              {fifthItem?.title}
            </h3>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon icon={faClock} className="mr-2 text-primary" />
              {fifthItem?.dateTime}
            </h4>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-3 ml-0.5 text-primary"
              />
              {fifthItem?.location}
            </h4>
            <p className={`text-gray-600`}>{fifthItem?.description}</p>
          </div>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center`}
          >
            <img
              className="h-5/6"
              src={fifthItem?.img}
              alt={fifthItem?.title}
            />
          </div>
        </div>

        {/* right */}
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center`}
          >
            <img
              className="h-5/6"
              src={sixthItem?.img}
              alt={sixthItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-4 sm:p-6 mt-4 sm:mt-15`}>
            <h3
              className={`text-2xl sm:text-2xl text-gray-800 font-bold leading-tight mb-3`}
            >
              {sixthItem?.title}
            </h3>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon icon={faClock} className="mr-2 text-primary" />
              {sixthItem?.dateTime}
            </h4>
            <h4
              className={`text-1xl text-yellow-500 font-bold leading-none mb-3`}
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-3 ml-0.5 text-primary"
              />
              {sixthItem?.location}
            </h4>
            <p className={`text-gray-600`}>{sixthItem?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
