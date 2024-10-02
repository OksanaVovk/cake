import sprite from '../../images/icons.svg';
import {
  QuestionBox,
  QuestionSvg,
  Title,
  QuestionTextBox,
  TextBox,
  QuestionButton,
  AnswerText,
  QuestionText,
} from './Question.styled';
export const Question = () => {
  const onBtnClick = event => {
    event.currentTarget.parentNode.nextSibling.classList.toggle('active');
  };
  return (
    <QuestionBox>
      <Title>Популярні запитання</Title>
      <ul>
        <TextBox>
          <QuestionTextBox>
            <QuestionText>
              СКІЛЬКИ ЧАСУ ПОТРІБНО ДЛЯ ВИГОТОВЛЕННЯ ЗАМОВЛЕННЯ?
            </QuestionText>
            <QuestionButton type="button" onClick={onBtnClick}>
              <QuestionSvg>
                <use href={sprite + '#icon-arrow2'}></use>
              </QuestionSvg>
            </QuestionButton>
          </QuestionTextBox>
          <AnswerText>
            Замовлення необхідно зробити як мінімум за 3-4 дні до вашого свята.
          </AnswerText>
        </TextBox>
        <TextBox>
          <QuestionTextBox>
            <QuestionText>ЧИ Є У ВАС ДОСТАВКА?</QuestionText>
            <QuestionButton type="button" onClick={onBtnClick}>
              <QuestionSvg>
                <use href={sprite + '#icon-arrow2'}></use>
              </QuestionSvg>
            </QuestionButton>
          </QuestionTextBox>
          <AnswerText>
            Так, ми можемо доставити ваше замовлення на таксі(за тарифами служби
            таксі).
          </AnswerText>
        </TextBox>
        <TextBox>
          <QuestionTextBox>
            <QuestionText>ЧИ ГОТУЄТЕ ВИ ТОРТИ З МАСТИКИ?</QuestionText>
            <QuestionButton type="button" onClick={onBtnClick}>
              <QuestionSvg>
                <use href={sprite + '#icon-arrow2'}></use>
              </QuestionSvg>
            </QuestionButton>
          </QuestionTextBox>
          <AnswerText>
            Відповідно до вашого замовлення ми можемо приготувати торт з
            мастики.
          </AnswerText>
        </TextBox>
        <TextBox>
          <QuestionTextBox>
            <QuestionText>
              ЧИ МОЖНА ЇСТИ ВАШІ ТОРТИ ДІТЯМ ТА ВАГІТНИМ?
            </QuestionText>
            <QuestionButton type="button" onClick={onBtnClick}>
              <QuestionSvg>
                <use href={sprite + '#icon-arrow2'}></use>
              </QuestionSvg>
            </QuestionButton>
          </QuestionTextBox>
          <AnswerText>
            Звісно, наша випічка виготовлена з високоякісної продукції, а ще ми
            практикуємо виготовлення тортів без цукру.
          </AnswerText>
        </TextBox>
      </ul>
    </QuestionBox>
  );
};
