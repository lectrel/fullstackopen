import { useState } from "react";

const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const FeedbackInput = (props) => {
  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" handleClick={props.handleGoodClick} />
      <Button text="neutral" handleClick={props.handleNeutralClick} />
      <Button text="bad" handleClick={props.handleBadClick} />
    </div>
  );
};

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / sum;
  const positive = (props.good / sum) * 100;
  if (sum !== 0) {
    return (
      <>
        <Header text="statistics" />
        <table>
          <tbody>
            <StatisticsLine text="good" value={props.good} />
            <StatisticsLine text="neutral" value={props.neutral} />
            <StatisticsLine text="bad" value={props.bad} />
            <StatisticsLine text="all" value={sum} />
            <StatisticsLine text="average" value={average} />
            <StatisticsLine text="positive" value={positive + " %"} />
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        <Header text="statistics" />
        <p>No feedback given</p>
      </>
    );
  }
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseByOne = (state, stateSetter) => {
    return function incrementState(newState) {
      stateSetter(state + 1);
    };
  };

  return (
    <div>
      <FeedbackInput
        handleGoodClick={increaseByOne(good, setGood)}
        handleNeutralClick={increaseByOne(neutral, setNeutral)}
        handleBadClick={increaseByOne(bad, setBad)}
      ></FeedbackInput>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
