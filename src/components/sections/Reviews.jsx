import React from 'react';
import { useState, useEffect } from 'react';
import { SectionTitle } from '../SectionTitle';
import cover from '../../assets/images/cover.webp';
import front from '../../assets/images/front.webp';
import next from '../../assets/images/next.svg';
import '../../styles/sections/reviews.css';
import reviewsImg from '../../reviews.json';

function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rev, serRev] = useState(reviewsImg);
  const slides = [
    { url: front, alt: 'Image 1' },
    { url: cover, alt: 'Image 2' },
    { url: front, alt: 'Image 3' },
    { url: cover, alt: 'Image 4' },
    { url: front, alt: 'Image 5' },
  ];
  const handleNextClick = () => {
    if (currentSlide + 1 <= slides.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  useEffect(()=>{
    const interval=setInterval(()=>{
      handleNextClick();
    }, 4000);
    return () => clearInterval(interval);
  })
  return (
    <section className="reviews" id="reviews">
      <SectionTitle title={'Отзывы'} />
      <div className="wrapper_section">
        <div className="reviews_wrapper">
          <div className="slider">
            <div
              className="slider-inner"
              style={{ transform: `translateX(${-currentSlide * 20}%)` }}
            >
              {rev.map((item, index) => (
                <div className="slide" key={index}>
                  <img src={`${process.env.PUBLIC_URL}${item.url1}`} alt={index} />
                </div>
              ))}
            </div>
          </div>
          <div className="slider rev">
            <div
              className="slider-inner"
              style={{ transform: `translateX(${-currentSlide * 20}%)` }}
            >
              {rev.map((item, index) => (
                <div className="slide" key={index}>
                  <img src={`${process.env.PUBLIC_URL}${item.url2}`} alt={index} />
                </div>
              ))}
            </div>
          </div>
          <button className="next" onClick={handleNextClick}>
            <img src={next} alt="next" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
