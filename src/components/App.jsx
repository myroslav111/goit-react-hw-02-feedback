import React, { Component } from 'react';
import ContainerStatistics from './ContainerStatistics';
import ContainerLeaveFeedback from './ContainerLeaveFeedback';
import { MainBody, WrapStatisticWithFeedback } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positiveFeedbackPercentage = (good / this.countTotalFeedback()) * 100;
    if (!positiveFeedbackPercentage) {
      positiveFeedbackPercentage = 0;
    }
    return Math.floor(positiveFeedbackPercentage);
  };

  upValueState = objKey => {
    this.setState(prevState => {
      return {
        [objKey]: prevState[objKey] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <MainBody>
        <WrapStatisticWithFeedback>
          <ContainerStatistics
            title={'Statistics'}
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />

          <ContainerLeaveFeedback
            title={'Please leave feedback'}
            onupValue={this.upValueState}
            stateKeys={Object.keys(this.state)}
          />
        </WrapStatisticWithFeedback>
      </MainBody>
    );
  }
}

export default App;
