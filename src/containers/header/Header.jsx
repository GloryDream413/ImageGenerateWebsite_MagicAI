import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

export const Header = () => {
  const onGenerate = async () => {
    console.log("asdf");
  };
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">IMAGE GENERATOR</h1>
        <textarea class="desc" placeholder="Enter your imagine"></textarea>

        <div className="gpt3__header-content__input">
          <button type="button" onClick={onGenerate}>Generate</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;