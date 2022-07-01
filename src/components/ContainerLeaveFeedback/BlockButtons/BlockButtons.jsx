import React from 'react';
import { ButtonsWrap, Button, ButtonText } from './BlockButtons.styled';

const BlockButtons = ({ upValueGood, upValueNeutral, upValueBad }) => {
  return (
    <ButtonsWrap>
      <Button onClick={upValueGood} type="button">
        <ButtonText>Good</ButtonText>
      </Button>
      <Button onClick={upValueNeutral} type="button">
        <ButtonText>Neutral</ButtonText>
      </Button>
      <Button onClick={upValueBad} type="button">
        <ButtonText>Bad</ButtonText>
      </Button>
    </ButtonsWrap>
  );
};

export default BlockButtons;
