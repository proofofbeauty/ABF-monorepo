import styled from 'styled-components';
import { BREAKPTS } from '../../constants/styles';
import { FlexCenterColumn } from '../flexs';

export const TwoColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  border: 1px solid #e0e0e0;
  grid-gap: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  > div {
    background-color: white;
  }
`;

export const TwoColumnContentContainer = styled(FlexCenterColumn)`
  width: 100%;
  padding: 100px;
  > div + div {
    margin-top: 100px;
    @media (max-width: ${BREAKPTS.LG}px) {
      margin-top: 50px;
    }
  }
  @media (max-width: ${BREAKPTS.LG}px) {
    padding: 50px;
  }
`;
