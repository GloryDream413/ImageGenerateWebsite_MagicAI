import React from 'react';
import { useState } from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

export const Header = () => {
  const [prompt, setPrompt] = useState('')
  const onPromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const onGenerate = async () => {
    const response = await axios.post(
      'http://65.21.236.218:8081/getImage',
      {
        input: prompt
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    console.log(response);
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">IMAGE GENERATOR</h1>
        <textarea
          class="desc"
          placeholder="Enter your imagine"
          name="prompt"
          value={prompt}
          onChange={onPromptChange}
        >

        </textarea>

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