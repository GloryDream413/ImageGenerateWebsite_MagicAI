import React from 'react';
import { useState } from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import axios from 'axios'

export const Header = () => {
  const [prompt, setPrompt] = useState('')
  const sleep = ms => new Promise(r => setTimeout(r, ms))

  const onPromptChange = (event) => {
    setPrompt(event.target.value);
  };

  async function getPredictionStatus(id) {
    const response = await axios.get(
      'https://api.replicate.com/v1/predictions/' + id,
      {
        headers: {
          'Content-Type': 'application/json',
          'access-control-allow-credentials': true,
          'access-control-allow-methods': '*',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Token 57b5717e8632693a79f0747038512564a640764c`
        }
      }
    )

    const prediction = response.data
    return prediction
  }

  async function createPrediction(text) {
    const response = await axios.post(
      'https://api.replicate.com/v1/predictions',
      {
        version:
          'b78a34f0ec6d21d22ae3b10afd52b219cec65f63362e69e81e4dce07a8154ef8',
        input: { prompt: "redshift style" + text }
      },
      {
        headers: {
          Authorization: `Token 57b5717e8632693a79f0747038512564a640764c`,
          'Content-Type': 'application/json',
          'access-control-allow-credentials': true,
          'access-control-allow-methods': '*',
          'Access-Control-Allow-Origin': '*',
        }
      }
    )

    console.log(response);

    const prediction = response.data
    return prediction
  }

  const onGenerate = async () => {
    const prediction = await createPrediction(prompt);
    let response = null;
    let nCount = 0;

    while (prediction.status !== 'succeeded' && prediction.status !== 'failed') {
      await sleep(1000);
      nCount++;
      if (nCount >= 60) {
        break;
      }
      response = await getPredictionStatus(prediction.id)
      if (response.err || response.output) {
        break;
      }
      if (response.output) {
        console.log("success");
      } else {
        console.log("fail");
      }
    }
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