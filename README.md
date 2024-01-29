# EstDev React E-Portfolio

This is an equivalent of my e-portfolio built using react library.

[Hosting link](https://calvinsendawula.github.io/estdev-react-e-portfolio/)

Questions and Answers
1. What is NPM?
Node Package Manager

2. What is SPA?
Single Page Application

3. What is the event loop?
It is a programming construct that waits for and dispatches events or messages in a program.

4. What is the difference between export x and export default x? How do you import them differently?
export x is a named export and can be imported with curly braces: import { x } from 'module'.
export default x is the default export and can be imported without curly braces: import x from 'module'.

5. Why do you use className as a property in React and not class?
Because class is a reserved keyword in JavaScript, and JSX is an extension of JavaScript.

6. Why should you not write the following? What will happen?
   `<button onClick={setCounter(counter + 1)}> +1 </button>`
This will invoke setCounter during rendering, not as a callback on click.

7. What is object deconstruction and how is it connected to React components (example)?
It is a JavaScript feature that allows you to unpack values from arrays or properties from objects into distinct variables.
> Example
> `const Component = ({ title, content }) => {
    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  };`

8. How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?
In React, this is done using JSX (JavaScript XML), which allows HTML to be written in JavaScript functions.
Babel compiles JSX down to React.createElement() calls, which makes it possible to write HTML-like syntax in JavaScript code.

9. What is async/await? Bring an example
It is syntactic sugar in JavaScript that allows us to write asynchronous code that appears synchronous.
> Example
> `async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  `

10. What is a Promise? Bring an example
A Promise is an object representing the eventual completion or failure of an asynchronous operation.
> Example
> `const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data retrieved');
    }, 2000);
  });
  myPromise.then(data => {
    console.log(data); // 'Data retrieved' after 2 seconds
  }).catch(error => {
    console.error(error);
  });`
