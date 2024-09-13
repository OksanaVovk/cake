import {
  AboutProductDiv,
  ButtonsDiv,
  ButtonAbout,
  TextGBox,
  TextLBox,
  Text,
  List,
} from './AboutProduct.styled';
import { useState } from 'react';

export const AboutProduct = ({ desctiption }) => {
  const descriptionText = (
    <TextLBox>
      <Text>{desctiption}</Text>
    </TextLBox>
  );
  const storageText = (
    <TextLBox>
      <Text>
        Зберігати в холодильнику при температурі до +6°С не більше 3-х діб.
      </Text>
    </TextLBox>
  );
  const deliveryText = (
    <TextLBox>
      <Text>Доставка здійснюється двома способами:</Text>
      <List>
        <li>Самовивіз з Печерського р-ну м. Києва.</li>
        <li>На таксі (за тарифами служби таксі).</li>
      </List>
    </TextLBox>
  );
  const [textBox, settextBox] = useState(descriptionText);
  const handleOnClicK = event => {
    const Buttons = document.querySelectorAll('button');
    for (const button of Buttons) {
      button.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
    const { dataset } = event.currentTarget;

    switch (dataset.action) {
      case '1':
        settextBox(descriptionText);
        break;
      case '2':
        settextBox(storageText);
        break;
      case '3':
        settextBox(deliveryText);
        break;
      default:
        return;
    }
  };
  return (
    <AboutProductDiv>
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
      <TextGBox>{textBox}</TextGBox>
    </AboutProductDiv>
  );
};
