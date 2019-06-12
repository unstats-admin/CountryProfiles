import styled, { css } from 'styled-components';

import { CalciteH2 } from 'calcite-react/Elements';

const StyledCountryHeader = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
`;

const StyledImageCard = styled.div`
  width: 450px;

  ${props =>
    props.image &&
    css`
      background: url(${props.image});
      background-position: center;
      background-size: cover;
    `};
`;

const StyledDetailsCard = styled.div`
  padding: 2rem 4rem;
  flex: 1 0 auto;
`;

const StyledCountryTitle = styled(CalciteH2)``;

const StyledMetricsContainer = styled.div``;

const StyledMetric = styled.p`
  display: flex;
  align-items: center;
`;

const StyledMetricValue = styled.span`
  margin-left: 0.5rem;
`;

export {
  StyledCountryHeader,
  StyledImageCard,
  StyledDetailsCard,
  StyledCountryTitle,
  StyledMetricsContainer,
  StyledMetric,
  StyledMetricValue
};
