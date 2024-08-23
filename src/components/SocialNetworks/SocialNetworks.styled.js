import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const NetworksBox = styled('nav')`
  position: absolute;
  top: 632px;
  right: 0;
  display: inline-flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const TelegramSvg = styled('svg')`
  width: 24px;
  height: 21px;
  fill: ${p => p.theme.mainColors.brown};
`;

export const InstagramSvg = styled('svg')`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.mainColors.brown};
`;

export const FacebookSvg = styled('svg')`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.mainColors.brown};
`;
