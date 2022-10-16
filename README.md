
# Quizzical (React Solo Project)

A quiz web application that uses the [Open Trivia Database API](https://opentdb.com/api_config.php) to retrieve trivia questions renders only five questions, and the player's score is displayed along with the correct answers.
## Overview

### The challenge

- To conditionally render two screens (start screen & quiz questions screen)
- To pull 5 questions from the The Open Trivia Database(OTDB) API
- Tally correct answers after _check answers_ button is clicked
- Style and polish the app as in the [figma design](https://www.figma.com/file/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?node-id=0%3A1).

### Screenshots

![Start Screen](https://user-images.githubusercontent.com/84665360/145670761-bebd9130-ea1f-4dea-9f38-e4fd3aed1c64.png)
![Quiz Screen](https://user-images.githubusercontent.com/84665360/145670794-dc8b761f-29e8-4d70-b779-6ddc988cd5b6.png)

### Links

- [Live Solution](https://myquizzical.web.app)
- [Source Code](https://github.com/A-4-Atom/Quizzical)

## My Process

### Built with

- HTML
- CSS
- JavaScript
- React [Vitejs](https://vitejs.dev/)

### What I learned

I learned and practiced the following concepts:

- React Props
- React State
- React Hooks
  - useState
  - useEffect
- Conditional Rendering

**A snippet of the code I used**:

```javascript
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
```

## Author

- Github - [@A-4-Atom](https://github.com/A-4-Atom)
- Twitter - [@Vikas Chauhan](https://twitter.com/A_4_Atom)

## Contributing

Pull requests are very welcome and you may freely fork this repository.

## Supporting Scrimba

Since 2017, scrimba has created over 20 free courses and continue's launching free courses. If you perhaps are interested in learning or maybe just would like to up your skills try out their courses at [scrimba.com](www.scrimba.com).

- [Become a professional React developer](https://scrimba.com/course/greact)
- [The Responsive Web Design Bootcamp](https://scrimba.com/course/gresponsive)
- [The Ultimate JavaScript Bootcamp](https://scrimba.com/course/gjavascript)

## License

[MIT](https://choosealicense.com/licenses/mit/)