import blobTop from "../assets/blobTop.svg";
import blobBottom from "../assets/blobBottom.svg";
export default function OpeningPage(props) {
  console.log("Developed & Designed by Vikas Chauhan");
  return (
    <div className="openingpage-container">
      <h1>Quizzical</h1>
      <p>Test your knowledge</p>
      <button onClick={props.isGameStarted}>Start Quiz</button>
      <img className="blob-top" src={blobTop} alt="" />
      <img className="blob-bottom" src={blobBottom} alt="" />
    </div>
  );
}
