import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import Divider from './Divider';
import config from '../config/index.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MembInfo = () => {
  const { membInfo } = config;
  const { title, price, disclaimer, disclaimer2, disclaimer3, inventory } =
    membInfo;

  return (
    <div className="py-6 bg-background" id="membInfo">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="lg:text-center text-center mb-5">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        </div>
        <Divider />

        <div className="w-full my-2 flex text-center justify-center items-center">
          <a
            href={membInfo.link.url}
            className="block bg-primary text-white text-center border-transparent py-2 px-4 rounded-lg hover:bg-yellow-500 hover:border-none"
          >
            {membInfo.link.text}
          </a>
        </div>

        <div className="mt-10 grid gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
              <div className="bg-white flex items-center justify-center h-full">
                <p
                  style={{ fontSize: '5rem' }}
                  className="text-primary font-bold"
                >
                  {price}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 custom-bullet">
              <div className="bg-white p-6 flex justify-center">
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

          <div className="sm:text-center flex items-center mb-0 justify-center">
            <p className="mt-0 mb-0 leading-8 font-bold tracking-tight text-gray-900 sm:text-l">
              {inventory}
            </p>
          </div>

          {/* Carousel */}
          <div className="custom-carousel bg-white custom-legend max-w-md mx-auto md:max-w-lg lg:max-w-xl">
            <Carousel
              className="custom-carousel"
              showThumbs={false}
              infiniteLoop
            >
              <div className="flex items-center justify-center ">
                <img
                  src="/assets/equipment/bars.JPEG"
                  alt="Power & Olympic Bar"
                />
                <p className="legend">Power & Olympic Bar</p>
              </div>
              <div>
                <img src="/assets/equipment/maggrips.JPEG" alt="MAG Grips" />
                <p className="legend">MAG Grips</p>
              </div>
              <div>
                <img
                  src="/assets/equipment/clipChange.JPEG"
                  alt="Clips & Change Plates"
                />
                <p className="legend">Clips & Change Plates</p>
              </div>
            </Carousel>
          </div>

          {/* disclaimers */}
          <div className=" bg-white text-center text-sm p-6">
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
