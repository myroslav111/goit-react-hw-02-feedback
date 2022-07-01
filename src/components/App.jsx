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
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let positiveFeedbackPercentage = (good / (good + neutral + bad)) * 100;
    if (!positiveFeedbackPercentage) {
      positiveFeedbackPercentage = 0;
    }
    return Math.floor(positiveFeedbackPercentage);
  };

  upValueGood = e => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  upValueNeutral = e => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  upValueBad = e => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
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
            onupValueGood={this.upValueGood}
            onupValueNeutral={this.upValueNeutral}
            onupValueBad={this.upValueBad}
          />
        </WrapStatisticWithFeedback>
      </MainBody>
    );
  }
}

export default App;
