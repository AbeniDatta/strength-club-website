import React, { useEffect } from 'react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Header from '../components/Header';

const Gallery: React.FC = () => {
  useEffect(() => {
    const galleryElement = document.querySelector('.gallery') as HTMLElement;
    if (galleryElement) {
      lightGallery(galleryElement, {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
      });
    }
  }, []);

  const images = [
    { src: '/assets/gallery/g1.jpg', thumb: '/assets/gallery/g1.jpg' },
    { src: '/assets/gallery/g2.jpg', thumb: '/assets/gallery/g2.jpg' },
    { src: '/assets/gallery/g3.jpg', thumb: '/assets/gallery/g3.jpg' },
    { src: '/assets/gallery/g4.JPG', thumb: '/assets/gallery/g4.JPG' },
    { src: '/assets/gallery/g5.JPG', thumb: '/assets/gallery/g5.JPG' },
    { src: '/assets/gallery/g6.JPEG', thumb: '/assets/gallery/g6.JPEG' },
    { src: '/assets/gallery/g7.JPG', thumb: '/assets/gallery/g7.JPG' },
    { src: '/assets/gallery/g8.JPEG', thumb: '/assets/gallery/g8.JPEG' },
    { src: '/assets/gallery/g9.JPG', thumb: '/assets/gallery/g9.JPG' },
    { src: '/assets/gallery/g10.JPG', thumb: '/assets/gallery/g10.JPG' },
    { src: '/assets/gallery/g11.JPG', thumb: '/assets/gallery/g11.JPG' },
    { src: '/assets/gallery/g12.JPG', thumb: '/assets/gallery/g12.JPG' },
    { src: '/assets/gallery/g13.JPG', thumb: '/assets/gallery/g13.JPG' },
    { src: '/assets/gallery/g14.JPG', thumb: '/assets/gallery/g14.JPG' },
    { src: '/assets/gallery/g15.JPG', thumb: '/assets/gallery/g15.JPG' },
    { src: '/assets/gallery/g16.JPG', thumb: '/assets/gallery/g16.JPG' },
    { src: '/assets/gallery/g17.JPG', thumb: '/assets/gallery/g17.JPG' },
    { src: '/assets/gallery/g18.JPG', thumb: '/assets/gallery/g18.JPG' },
    { src: '/assets/gallery/g21.JPG', thumb: '/assets/gallery/g21.JPG' },
    { src: '/assets/gallery/g22.JPG', thumb: '/assets/gallery/g22.JPG' },
    { src: '/assets/gallery/g24.JPG', thumb: '/assets/gallery/g24.JPG' },
    { src: '/assets/gallery/g25.JPEG', thumb: '/assets/gallery/g25.JPEG' },
    { src: '/assets/gallery/g26.JPEG', thumb: '/assets/gallery/g26.JPEG' },
    { src: '/assets/gallery/g28.jpg', thumb: '/assets/gallery/g28.jpg' },
    { src: '/assets/gallery/g29.JPG', thumb: '/assets/gallery/g29.JPG' },
  ];

  return (
    <div className="bg-background grid gap-y-4 overflow-hidden">
      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-4 bg-background sm:pb-4 md:pb-4 lg:max-w-2xl lg:w-full lg:pb-4 xl:pb-4">
            <Header />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Gallery</h1>
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.src}
              data-lg-size="1600-2400"
              className="transition-transform transition-shadow hover:scale-105"
            >
              <img
                src={image.thumb}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto rounded opacity-90 transition-opacity"
                onLoad={(e) => e.currentTarget.classList.remove('loading')}
                onError={(e) => e.currentTarget.classList.remove('loading')}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
