import { keyframes } from 'styled-components';

export const slide = keyframes`
0%{
   transform: translateX(0);
} 
100%{
   transform: translateX(-50%);
}
`;

export const pulse = keyframes`
   0% {
   transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const swing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(5deg);
  }
  20% {
    transform: rotate(-5deg);
  }
  30% {
    transform: rotate(5deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  60% {
    transform: rotate(-5deg);
  }
  70% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  90% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const headerPulsate = keyframes`
0% {
    box-shadow: 0 0 4px var(--main-color-blue);
  }
  50% {
    box-shadow: 0 0 12px var(--main-color-blue);
  }
  100% {
    box-shadow: 0 0 4px var(--main-color-blue);
  }
`;
