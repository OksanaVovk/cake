import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const NetworksBox = styled('nav')`
  display: inline-flex;
  flex-direction: column;
`;

export const NetworksBoxFooter = styled('nav')`
  display: inline-flex;
  flex-direction: rows;
`;

export const Link = styled(NavLink)`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const LinkF = styled(NavLink)`
  &:not(:last-child) {
    margin-right: 20px;
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
  height: 34px;
  fill: ${p => p.theme.mainColors.brown};
`;

export const ViberSvg = styled('svg')`
  width: 34px;
  height: 34px;
  stoke: ${p => p.theme.mainColors.grey};
`;

export const TelegramFSvg = styled('svg')`
  width: 34px;
  height: 34px;
  fill: ${p => p.theme.mainColors.grey};
`;

export const InstagramFSvg = styled('svg')`
  width: 34px;
  height: 34px;
  fill: ${p => p.theme.mainColors.grey};
`;
