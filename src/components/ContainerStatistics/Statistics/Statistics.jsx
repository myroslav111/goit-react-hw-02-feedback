import React from 'react';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  // const countTotalFeedback = total();
  // const feedbackPercentage = percentage();

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>Positive feedback: {percentage()} %</p>
    </div>
  );
};

export default Statistics;
