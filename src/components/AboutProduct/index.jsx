import { ButtonsDiv, ButtonAbout } from './AboutProduct.styled';
import { useState } from 'react';

export const AboutProduct = ({ desctiption }) => {
  const descriptionText = desctiption;
  console.log(descriptionText);
  const storageText =
    'Зберігати в холодильнику при температурі до +6°С не більше 3-х діб.';
  const deliveryText = 'транспорт';
  const [textBox, settextBox] = useState(descriptionText);
  const handleOnClicK = event => {
    const Buttons = document.querySelectorAll('button');
    for (const button of Buttons) {
      button.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
    const { dataset } = event.currentTarget;
    console.log(dataset);

    switch (dataset.action) {
      case '1':
        console.log('Опис');
        settextBox(descriptionText);

        break;
      case '2':
        console.log('Умови');
        settextBox(storageText);
        break;
      case '3':
        console.log('Доставка');
        settextBox(deliveryText);
        break;
      default:
        return;
    }
  };
  return (
    <div>
      <ButtonsDiv>
        <li>
          <ButtonAbout
            className="active"
            type="button"
            data-action="1"
            onClick={handleOnClicK}
          >
            Опис
          </ButtonAbout>
        </li>
        <li>
          <ButtonAbout type="button" data-action="2" onClick={handleOnClicK}>
            Умови зберігання
          </ButtonAbout>
        </li>
        <li>
          <ButtonAbout type="button" data-action="3" onClick={handleOnClicK}>
            Доставка
          </ButtonAbout>
        </li>
      </ButtonsDiv>
      <div>
        <p>{textBox}</p>
      </div>
    </div>
  );
};
