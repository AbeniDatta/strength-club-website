import React from 'react';

import Divider from './Divider';
import config from '../config/index.json';

const MembInfo = () => {
  const { membInfo } = config;
  const { title, price, disclaimer, disclaimer2, disclaimer3 } = membInfo;

  return (
    <div className="py-12 bg-background" id="membInfo">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="lg:text-center flex items-center mb-5 justify-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        </div>

        <Divider />

        <div className="w-full my-2 flex justify-center">
          <a
            href={membInfo.link.url}
            className="block bg-primary text-white text-center border-transparent py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 hover:border-none"
          >
            {membInfo.link.text}
          </a>
        </div>

        <div className="mt-10 grid gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
              <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center h-full">
                <p
                  style={{ fontSize: '5rem' }}
                  className="text-primary font-bold"
                >
                  {price}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 custom-bullet">
              <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
                <ul className="list-disc pl-8">
                  {membInfo.perks.map((perk, index) => (
                    <li key={index} className="text-lg">
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Full Width Content */}
            <p> ADD picture carousel here</p>
          </div>

          {/* Second Row */}
          <div className="bg-white text-sm p-6 rounded-lg shadow-md">
            <p> {disclaimer} </p>
            <p> {disclaimer2} </p>
            <p> {disclaimer3} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembInfo;
