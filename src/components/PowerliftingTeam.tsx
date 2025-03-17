import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Divider from './Divider';
import config from '../config/index.json';
/* import { exec } from 'child_process'; */

const PowerliftingTeam = () => {
  const { powerlifting } = config;
  const { title, mainImage, disclaimer, captain, assistantCaptains } =
    powerlifting;

  return (
    <section className="py-10 bg-background" id="powerlifting">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="lg:text-center text-center mb-5">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <Divider />

        {/* Main Image Section */}
        <div className="flex justify-center mb-8">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="rounded-lg shadow-lg max-w-lg h-auto"
          />
        </div>

        <div className="mt-10 text-center text-gray-900 text-xl max-w-3xl mx-auto bg-white p-8 rounded-lg">
          <p>{disclaimer}</p>
        </div>

        <div className="mt-16 text-center w-full">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            Our Exclusive Equipment
          </h3>

          {/* Carousel Wrapper */}

          <div className="custom-carousel bg-white custom-legend max-w-md mx-auto md:max-w-lg lg:max-w-xl">
            <Carousel
              className="custom-carousel"
              showThumbs={false}
              infiniteLoop
            >
              <div className="flex items-center justify-center ">
                <img
                  src="/assets/powerliftingteamequipment/TeamOnlyBar.JPG"
                  alt="Team Power Bar"
                />
                <p className="legend">Team Only Bar</p>
              </div>
              <div>
                <img
                  src="assets/powerliftingteamequipment/BabyPow_TeamSalts_CompCollars.JPG"
                  alt="Competition Collars,Baby Powder, Smelling Salts"
                />
                <p className="legend">
                  Competition Collars,Baby Powder, Smelling Salts{' '}
                </p>
              </div>
              <div>
                <img
                  src="/assets/powerliftingteamequipment/Carpet.JPG"
                  alt="Team Carpet"
                />
                <p className="legend">Team Carpet</p>
              </div>
              <div>
                <img
                  src="assets/powerliftingteamequipment/MeetDaybag.JPG"
                  alt="Meet Day Bag"
                />
                <p className="legend">Meet Day Bag</p>
              </div>
            </Carousel>
          </div>
        </div>

        {/* Captains Section */}
        <div className="mt-16 text-center w-full">
          <h3 className="text-3xl font-bold text-gray-900 mb-10">
            Our Leadership
          </h3>

          {/* Captain (Centered on Top) */}
          <div className="flex flex-col items-center mb-10">
            <img
              src={captain.image}
              alt={captain.name}
              className="w-40 h-40 rounded-full object-cover shadow-lg"
            />
            <h4 className="text-2xl font-bold text-gray-900 mt-4">
              {captain.name}
            </h4>
            <p className="text-gray-500 text-lg">Captain</p>
          </div>

          {/* Assistant Captains (Below in a Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {assistantCaptains.map((assistantCaptain, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={assistantCaptain.image}
                  alt={assistantCaptain.name}
                  className="w-32 h-32 rounded-full object-cover transition-transform duration-300 hover:scale-105 shadow-md"
                />
                <h4 className="text-lg font-semibold text-gray-900 mt-4">
                  {assistantCaptain.name}
                </h4>
                <p className="text-gray-500 text-sm">Assistant Captain</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        {/* <div className="mt-16 text-center w-full">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Powerlifting Team Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <p key={index} className="text-lg font-semibold text-gray-900">
                • {member.name}
              </p>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PowerliftingTeam;
