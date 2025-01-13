import React from 'react';
import { useState } from 'react';
import { SectionTitle } from '../SectionTitle';
import necklace1 from '../../assets/images/necklace1.jpg';
import cover from '../../assets/images/cover.png';
import '../../styles/sections/catalog.css';
import ellipse from '../../assets/images/Ellipse.png';
import next from '../../assets/images/next.svg';
import DropDown from '../DropDown';
import imagesData from '../../images.json';
import { useEffect } from 'react';


const Slider = () => {
  const [selected, setSelected] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState(imagesData[selected]);
  useEffect(() => {
    setImages(imagesData[selected]);
  }, [selected]);
 

  const handleNextClick = () => {
    if (currentSlide + 1 <= 4) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  return (
    <section className="catalog" id="catalog">
      <SectionTitle title={'Каталог'}/>
      <DropDown selected={selected} setSelected={setSelected} />
      <div className="catalog_wrapper">
        <div className="wrapper_Slider">
            <div className='square sOne'></div>
            <div className='square sTwo'></div>
          <div className="slider">
            <div
              className="slider-inner"
              style={{ transform: `translateX(${-currentSlide * 20}%)` }}
            >
              {images.map((item, index) => (
                <div className="slide" key={index}>
                  <img src={item.url1} alt={index} />
                </div>
              ))}
            </div>
          </div>
          <div className="details">
            <img className="details_tracery" src={ellipse} alt="ellipse" />
            <p className="details_name">Сет браслетов из гематита, агата вены дракона, циркона</p>
            <div className="slider two">
              <div
                className="slider-inner"
                style={{ transform: `translateX(${-currentSlide * 20}%)` }}
              >
                {images.map((item, index) => (
                  <div className="slide" key={index}>
                    <img src={item.url2} alt={index} />
                  </div>
                ))}
              </div>
            </div>
            <button className="btn_next" onClick={handleNextClick}>
            <img src={next} alt="next" />
          </button>
          </div>
          <button className="btn_next btn_two" onClick={handleNextClick}><img src={next} alt="next" /></button>
        </div>
        <a target="_blank" rel="noreferrer" href="https://t.me/moreshine_brand" className="order btn-catalog">
          больше украшений в telegram-канале
        </a>
      </div>
    </section>
  );
};

export default Slider;
