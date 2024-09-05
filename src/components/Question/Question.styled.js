import styled from '@emotion/styled';

export const QuestionBox = styled('div')`
  margin-bottom: 100px;

  @media screen and (min-width: 1440px) {
    align-items: center;
    padding: 0 106px 0 106px;
    margin-bottom: 120px;
  }
`;

export const Title = styled('h1')`
  font-family: Moniqa;
  font-weight: 900;
  font-size: 80px;
  line-height: 83.28px;
  text-align: center;
  color: ${p => p.theme.mainColors.brown};
  margin-bottom: 48px;
  @media screen and (min-width: 1440px) {
    font-size: 100px;
    line-height: 104.1px;
    text-align: center;
    margin-bottom: 64px;
  }
`;

export const TextBox = styled('li')`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 56px;
    }
  }
`;

export const QuestionTextBox = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 355px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${p => p.theme.mainColors.brown};

  @media screen and (min-width: 1440px) {
    width: 1038px;
    padding-bottom: 24px;
  }
`;

export const QuestionText = styled('p')`
  width: 261px;
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21.94px;
  text-align: left;
  color: ${p => p.theme.mainColors.brown};
  @media screen and (min-width: 1440px) {
    width: auto;
    font-size: 24px;
    line-height: 29.26px;
  }
`;

export const QuestionSvg = styled('svg')`
  width: 25px;
  height: 25px;
`;

export const QuestionButton = styled('button')``;

export const AnswerText = styled('p')`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 19.5px;
  text-align: left;
  color: ${p => p.theme.mainColors.brown};
  margin-top: 16px;
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 21.94px;
  }
`;
