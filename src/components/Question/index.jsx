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
  return (
    <QuestionBox>
      <Title>Популярні запитання</Title>
      <ul>
        <TextBox>
          <QuestionTextBox>
            <QuestionText>
              СКІЛЬКИ ЧАСУ ПОТРІБНО ДЛЯ ВИГОТОВЛЕННЯ ЗАМОВЛЕННЯ?
            </QuestionText>
            <QuestionButton>
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
            <QuestionButton>
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
            <QuestionText>ЧИ ГОТУЄТЕ ВИ ТОРТИ З МАСТИКИ?</QuestionText>
            <QuestionButton>
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
            <QuestionText>
              ЧИ МОЖНА ЇСТИ ВАШІ ТОРТИ ДІТЯМ ТА ВАГІТНИМ?
            </QuestionText>
            <QuestionButton>
              <QuestionSvg>
                <use href={sprite + '#icon-arrow2'}></use>
              </QuestionSvg>
            </QuestionButton>
          </QuestionTextBox>
          <AnswerText>
            Замовлення необхідно зробити як мінімум за 3-4 дні до вашого свята.
          </AnswerText>
        </TextBox>
      </ul>
    </QuestionBox>
  );
};
