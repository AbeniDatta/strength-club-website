import React from 'react';

import config from '../config/index.json';

const MeetTheTeam = () => {
  const { meetTheTeam } = config;
  const { title, subtitle, description, items: teamMembers } = meetTheTeam;

  return (
    <div className="py-12 bg-background" id="meetTheTeam">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-x-4 md:gap-y-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="relative flex flex-col items-center text-center"
              >
                <dt>
                  <div className="flex items-center justify-center h-48 w-48 rounded-md bg-background text-tertiary border-primary border-3">
                    <img
                      className="inline-block h-44 w-44 rounded-lg"
                      src={member.icon}
                      alt={member.name}
                    />
                  </div>
                </dt>
                <p className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  {member.name}
                </p>
                <dd className="mt-2 text-base text-gray-500">
                  {member.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
