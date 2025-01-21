import React from 'react';
import { SectionTitle } from '../SectionTitle';
import gilding24K from '../../assets/images/coatings/gilding24K.png';
import gilding18K from '../../assets/images/coatings/gilding18K.png';
import platinumCoating from '../../assets/images/coatings/platinumCoating.png';
import rhodiumPlating from '../../assets/images/coatings/rhodiumPlating.png';
import '../../styles/sections/aboutMaterials.css';

function AboutMaterials() {
  return (
    <section className="aboutMaterials" id="aboutMaterials">
      <SectionTitle title={'О материалах'} />
      <div className="wrapper_section">
        <div className="wrapper_Brass">
          <div className="aboutBrass">
            <div className="aboutBrass_text">
              <h3>Латунь</h3>
              <p className="aboutBrass-text">
                сплав металлов на основе меди с добавлением цинка. Податливая, стойкая к коррозии и
                сверкающая золотом. Латунь применятся еще с античности. И в те времена латунь
                называли “вечным металлом”.
              </p>
            </div>
            <div className='wrapper_pluses'>
              <h3>Плюсы латуни</h3>
            <ul className="pluses">
              <li className="plus">Если латунь с покрытием, то держит цвет дольше многих других</li>
              <li className="plus">Изделия из латуни теплые на ощупь</li>
              <li className="plus">Не вызывает аллергии</li>
            </ul>
            </div>
          </div>

          <div className="aboutAllergies">
            <h3>Об аллергии</h3>
            <p className="">
              Наша кожа невероятно чувствительна, особенно ушки. 90% клиенток приходят с этой
              проблемой, уходят счастливые с нашими сережками, а потом много-много раз
              возвращаются.Однажды, попробовав некачественную бижутерию, начинаем подозревать все и
              всех. Аллергии вызывают тяжелые металлы, например, никель, хром, свинец, кадмий. Этих
              металлов не должно быть в составе сплава. Но , покупая дешевую бижутерию, будьте
              готовы к том, что один из этих металлов точно будет в составе. Своих поставщиков я
              отбирала годами! И сейчас работаю только с теми, кто , действительно, хорош в своей
              нише.
            </p>
          </div>
        </div>
        <div className="aboutMaterials-item">
          <h3>О покрытиях</h3>
          <div className="aboutCoatings">
            <div className="coating">
              <img src={gilding24K} alt="gilding24K" />
              <div className='coating-wrapper'>

              <span>Позолота 24К</span>
              <p>Количество золота в сплаве, который используется в верхнем слое, составляет 100%</p>
              </div>
            </div>
            <div className="coating">
              <img src={gilding18K} alt="gilding18K" />
              <div className='coating-wrapper'>

              <span>Позолота 18К</span>
              <p>Количество золота в сплаве, который используется в верхнем слое, составляет 75%</p>
            
              </div>
            </div>
            <div className="coating">
              <img src={platinumCoating} alt="platinumCoating" />
              <div className='coating-wrapper'>

              <span>Родиевые покрытие </span>
              <p>(серебряный цвет). Родий драгоценный металл платиновой группы</p>
            
              </div>
            </div>
            <div className="coating">
              <img src={rhodiumPlating} alt="rhodiumPlating" />
              <div className='coating-wrapper'>

              <span>Платиновое покрытие</span>
              
            
              </div>
            </div>
          </div>
        </div>
        <p className="results">
          Все вышеперечисленные покрытия - драгоценные металлы. Поэтому такую бижутерию называют
          ювелирной. Она не вызывает аллергии и не поддается коррозии. Но, чтобы украшения
          прослужили вам долго, за ними нужен уход.
        </p>
      </div>
    </section>
  );
}

export default AboutMaterials;
