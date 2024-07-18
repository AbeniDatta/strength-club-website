import React from 'react';

import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Divider from './Divider';
import config from '../config/index.json';

const Events = () => {
  const { events } = config;
  const [firstItem, secondItem] = events.items;

  return (
    <section className={`bg-background py-8`} id="events">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
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
            className="block bg-primary text-white text-center py-2 px-4 rounded-lg shadow-md hover:bg-secondary"
          >
            {events.link.text}
          </a>
        </div>
        {/* first event */}
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

        {/* second event */}

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
      </div>
    </section>
  );
};

export default Events;
