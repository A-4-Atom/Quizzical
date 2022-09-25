export default function Question(props) {
    let normalButtonElements = []; //For Normal Buttons at start of Quiz
    let answerButtonElements = []; //For AnswerButtons to show correct answers
  
    if (props.isChecked === false) {
      normalButtonElements = props.options.map((option) => {
        return (
          <button
            id={props.selectedAnswer === option.choice ? "selected" : ""}
            key={option.id}
            onClick={() => props.handleButtonClick(option.choice, props.id)}
          >
            {option.choice}
          </button>
        );
      });
    } else {
      answerButtonElements = props.options.map((option) => {
        let myId;
        if (
          props.selectedAnswer === props.correctAnswer &&
          option.choice === props.selectedAnswer
        )
          myId = "correct";
        else if (
          option.choice === props.selectedAnswer &&
          props.selectedAnswer !== props.correctAnswer
        )
          myId = "incorrect";
        else if (
          option.choice === props.correctAnswer &&
          props.selectedAnswser !== props.selectedAnswer
        )
          myId = "correct";
  
        return (
          <button id={myId} key={option.id}>
            {option.choice}
          </button>
        );
      });
    }
    return (
      <div className="question">
        <h1 className="question-title">{props.question}</h1>
        {props.isChecked ? answerButtonElements : normalButtonElements}
        <hr className="question-divider" />
      </div>
    );
  }
  