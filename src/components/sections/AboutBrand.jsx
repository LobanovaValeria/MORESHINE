import React from 'react';
import { SectionTitle } from '../SectionTitle';
import '../../styles/sections/aboutBrand.css';

function AboutBrand() {
  return (
    <section className="aboutBrand" id="aboutBrand">
      <SectionTitle title={'О брэнде'} />

      <div className="aboutBrand_wrapper">
        <div className="aboutBrand_text">
          <p>
            Украшения – важная деталь, вишенка на торте, которая способна превратить образ в
            настоящее произведение искусства.
          </p>
          <p>
            Надевая красивые украшения, меняется не только образ, но и настроение! Сияющие
            уверенностью женские глаза способны на все!
          </p>
          <p>Украшайте собой этот мир, а More Shine Brand будет украшать вас!</p>
        </div>
        <div className="aboutBrand_photo">
          <div className="photo_square"></div>
          <div className="photo_oval"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutBrand;
