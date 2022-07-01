import React from 'react';
import BlockButtons from './BlockButtons';
import { WrapLeaveFeedback, Title } from './ContainerLeaveFeedback.styled';

const ContainerLeaveFeedback = ({
  title,
  onupValueGood,
  onupValueNeutral,
  onupValueBad,
}) => {
  return (
    <WrapLeaveFeedback>
      <Title>{title}</Title>
      <BlockButtons
        upValueGood={onupValueGood}
        upValueNeutral={onupValueNeutral}
        upValueBad={onupValueBad}
      />
    </WrapLeaveFeedback>
  );
};

export default ContainerLeaveFeedback;
