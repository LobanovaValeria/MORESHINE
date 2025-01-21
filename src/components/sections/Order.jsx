import React from 'react';
import { SectionTitle } from '../SectionTitle';
import '../../styles/sections/order.css';
import telegram from '../../assets/images/telegram.svg';
import whatsapp from '../../assets/images/whatsapp.svg';

function Order() {
  return (
    <section className="section_order" id="order">
      <SectionTitle title={'Заказать'} />
      <div className="wrapper_section">
        <div className="order_wrapper">
          <div className="wrapper_text">
            <p className="HowToOrder">
              Чтобы заказать украшение, напиши мне в telegram или whatsapp. Мы подберем или создадим
              украшение, которое опишет твою историю и откликнется в твоей душе.
            </p>
          </div>
          <div className="wrapper_btn">
            <a href="https://t.me/kristina_akdemir" className="order telegram">
              <span>Оформить заказ через</span>
              <img src={telegram} alt="telegram" />
            </a>
            <p>или</p>
            <a className="order whatsapp">
              <span>Оформить заказ через</span>
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
