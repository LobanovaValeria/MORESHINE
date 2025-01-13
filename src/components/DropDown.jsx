import React, { useState } from 'react';
import down from '../assets/images/down.svg';
import '../styles/components/dropDown.css';

function DropDown({ selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ['Комплекты', 'Браслеты'];
  const onOpen = () => {
    setIsOpen(!isOpen);
    console.log(categories);
  };

  return (
    <div className="wrapper_dropDown">
      <div className="dropDown">
        <div className="category" onClick={onOpen}>
          <h2 className="">{categories[selected]}</h2>
          <img src={down} alt="down" />
        </div>
        <ul className={`category-list ${isOpen ? 'open' : ''}`}>
          {categories.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(index);
                setIsOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
