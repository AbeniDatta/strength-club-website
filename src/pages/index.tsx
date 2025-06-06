import React from 'react';

import About from '../components/About';
import Events from '../components/Events';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import MeetTheTeam from '../components/MeetTheTeam';
import MembInfo from '../components/MembInfo';
import PowerliftingTeam from '../components/PowerliftingTeam';

const App = () => {
  return (
    <div className="bg-background grid gap-y-12 overflow-hidden">
      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <LazyShow>
        <>
          <MembInfo />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Events />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <MeetTheTeam />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <PowerliftingTeam />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
    </div>
  );
};

export default App;
