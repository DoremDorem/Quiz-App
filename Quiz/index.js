
//url security
let userText=document.querySelector(".user-text");
let logBtn=document.querySelector("#log-btn")
let data=sessionStorage.getItem("user");
if(data===null){
    window.location.href="http://127.0.0.1:5500/Quiz/login.html"
}

logBtn.onclick=()=>{
    sessionStorage.removeItem("user");
    window.location.href="http://127.0.0.1:5500/Quiz/login.html"
}

let user=JSON.parse(sessionStorage.getItem("user"));


userText.innerHTML="🙋‍♂️Hey"+" "+user.name || "🙋‍♂️Hey"+" "+sessionStorage.getItem("user").name;








        // --- QUIZ DATA ---
        // Note: To meet the 30-question requirement, you need to add 25 more questions
        // to each category array below. The application logic is set up for 30 questions.
        const quizData = {
            'React JS':[
                // 🟢 EASY (1–10)
                {
                    question: "What is React primarily used for?",
                    options: ["Building APIs", "Building user interfaces", "Managing databases", "Styling web pages"],
                    answer: "Building user interfaces"
                },
                {
                    question: "React was developed by which company?",
                    options: ["Google", "Facebook", "Microsoft", "Amazon"],
                    answer: "Facebook"
                },
                {
                    question: "What is JSX in React?",
                    options: ["Java Syntax Extension", "JavaScript XML", "JSON Extension", "JavaScript XHR"],
                    answer: "JavaScript XML"
                },
                {
                    question: "Which of the following is a correct way to create a React component?",
                    options: ["function App() {}", "createComponent(App)", "React.component()", "App.React()"],
                    answer: "function App() {}"
                },
                {
                    question: "How many elements can a React component return?",
                    options: ["Only one root element", "Two elements", "Unlimited", "Zero"],
                    answer: "Only one root element"
                },
                {
                    question: "Which command creates a new React app?",
                    options: ["npm start", "npx create-react-app myApp", "npm run react", "npm build app"],
                    answer: "npx create-react-app myApp"
                },
                {
                    question: "What does 'props' stand for in React?",
                    options: ["Properties", "Prototypes", "Propositions", "Proper functions"],
                    answer: "Properties"
                },
                {
                    question: "Which hook is used to manage state in a functional component?",
                    options: ["useEffect", "useState", "useReducer", "useRef"],
                    answer: "useState"
                },
                {
                    question: "In React, data flows in which direction?",
                    options: ["Top to bottom", "Bottom to top", "Both directions", "Circular"],
                    answer: "Top to bottom"
                },
                {
                    question: "Which method is used to render React elements to the DOM?",
                    options: ["React.mount()", "ReactDOM.render()", "render.React()", "React.attach()"],
                    answer: "ReactDOM.render()"
                },

                // 🟡 MEDIUM (11–20)
                {
                    question: "Which hook runs after every render by default?",
                    options: ["useState", "useEffect", "useMemo", "useLayoutEffect"],
                    answer: "useEffect"
                },
                {
                    question: "What is a 'key' prop used for in React lists?",
                    options: ["For styling", "For identifying unique elements", "For sorting data", "For debugging only"],
                    answer: "For identifying unique elements"
                },
                {
                    question: "What will happen if you update state directly without using setState or setter?",
                    options: ["Re-render will occur", "Component will crash", "No re-render will occur", "App will reload"],
                    answer: "No re-render will occur"
                },
                {
                    question: "Which hook is used for performing side effects in React?",
                    options: ["useState", "useEffect", "useRef", "useReducer"],
                    answer: "useEffect"
                },
                {
                    question: "How can you prevent a component from re-rendering?",
                    options: ["By using React.memo", "By removing JSX", "By deleting state", "By clearing DOM"],
                    answer: "By using React.memo"
                },
                {
                    question: "Which hook replaces componentDidMount, componentDidUpdate, and componentWillUnmount?",
                    options: ["useEffect", "useState", "useCallback", "useMemo"],
                    answer: "useEffect"
                },
                {
                    question: "What does useRef hook do?",
                    options: ["Stores DOM reference", "Renders a new component", "Creates state variable", "Updates props"],
                    answer: "Stores DOM reference"
                },
                {
                    question: "What is the purpose of useContext?",
                    options: ["To manage local storage", "To consume values from Context API", "To handle API requests", "To fetch CSS classes"],
                    answer: "To consume values from Context API"
                },
                {
                    question: "What is the default port for running React apps?",
                    options: ["8080", "3000", "5000", "4000"],
                    answer: "3000"
                },
                {
                    question: "What is React Fragment used for?",
                    options: ["To wrap multiple elements without adding extra DOM node", "To group CSS files", "To style components", "To optimize memory"],
                    answer: "To wrap multiple elements without adding extra DOM node"
                },

                // 🔴 HARD (21–30)
                {
                    question: "What does useCallback hook do?",
                    options: ["Returns a memoized function", "Creates a callback API", "Stores DOM node", "Handles async tasks"],
                    answer: "Returns a memoized function"
                },
                {
                    question: "What does useMemo hook do?",
                    options: ["Memoizes expensive computations", "Creates a memo list", "Stores component state", "Runs async tasks"],
                    answer: "Memoizes expensive computations"
                },
                {
                    question: "What is the virtual DOM?",
                    options: ["A real copy of the DOM", "A lightweight representation of real DOM", "A browser cache", "A CSS tree"],
                    answer: "A lightweight representation of real DOM"
                },
                {
                    question: "Which library is commonly used for routing in React?",
                    options: ["React Navigation", "React Router", "Next.js", "React Path"],
                    answer: "React Router"
                },
                {
                    question: "What is Redux primarily used for in React?",
                    options: ["Routing", "Global state management", "Styling components", "API creation"],
                    answer: "Global state management"
                },
                {
                    question: "In React, which lifecycle method is used to clean up side effects?",
                    options: ["componentWillUnmount", "componentDidMount", "shouldComponentUpdate", "render"],
                    answer: "componentWillUnmount"
                },
                {
                    question: "Which of the following is NOT a React hook?",
                    options: ["useFetch", "useReducer", "useEffect", "useState"],
                    answer: "useFetch"
                },
                {
                    question: "What is React.StrictMode used for?",
                    options: ["To highlight potential problems in an application", "To improve performance", "To handle errors", "To style components"],
                    answer: "To highlight potential problems in an application"
                },
                {
                    question: "What is server-side rendering (SSR) in React?",
                    options: ["Rendering components in browser only", "Rendering React components on server before sending HTML", "Rendering CSS on server", "Rendering database queries"],
                    answer: "Rendering React components on server before sending HTML"
                },
                {
                    question: "Which React hook helps in optimizing performance when passing functions to child components?",
                    options: ["useCallback", "useEffect", "useMemo", "useRef"],
                    answer: "useCallback"
                },
                {
                    question: "React's Context API helps with what?",
                    options: ["Avoiding prop drilling", "Faster API calls", "Server rendering", "DOM access"],
                    answer: "Avoiding prop drilling"
                },
                {
                    question: "How can you lazy load a React component?",
                    options: ["Using React.lazy() and Suspense", "Using setTimeout", "Using React.memo", "Using useEffect"],
                    answer: "Using React.lazy() and Suspense"
                },
                {
                    question: "What is the main advantage of React Fiber architecture?",
                    options: ["Better concurrency and rendering performance", "Smaller bundle size", "Easier CSS integration", "Simpler JSX syntax"],
                    answer: "Better concurrency and rendering performance"
                },
                {
                    question: "What is the difference between useEffect and useLayoutEffect?",
                    options: ["useLayoutEffect runs synchronously after DOM mutations", "useEffect runs before rendering", "They are identical", "useLayoutEffect is used only for styling"],
                    answer: "useLayoutEffect runs synchronously after DOM mutations"
                },
                {
                    question: "What is hydration in React?",
                    options: ["Attaching event listeners to server-rendered HTML", "Converting JSX to JS", "Adding CSS to DOM", "Creating a new React project"],
                    answer: "Attaching event listeners to server-rendered HTML"
                },
                {
                    question: "Which React method is used to update state based on previous state?",
                    options: ["setState(prev => ...)", "updateState()", "stateChange()", "stateUpdate()"],
                    answer: "setState(prev => ...)"
                },
                {
                    question: "What is the purpose of the React key attribute?",
                    options: ["Helps React identify which items changed", "Used for event binding", "Defines priority", "Manages rendering order"],
                    answer: "Helps React identify which items changed"
                },
                {
                    question: "React components must return ____?",
                    options: ["A single JSX element", "Multiple JSX elements", "Strings only", "Nothing"],
                    answer: "A single JSX element"
                },
                {
                    question: "How can you share logic between React components?",
                    options: ["Using custom hooks", "Using CSS", "Using refs", "Using HTML templates"],
                    answer: "Using custom hooks"
                },
                {
                    question: "What is the main difference between class and functional components?",
                    options: ["Functional components use hooks, class components use lifecycle methods", "Class components are faster", "Functional components can’t have state", "Class components don’t render JSX"],
                    answer: "Functional components use hooks, class components use lifecycle methods"
                }
                ],
            'JavaScript': [
            // 🟢 EASY (1–10)
            {
                question: "What is JavaScript primarily used for?",
                options: ["Styling web pages", "Creating dynamic web content", "Managing databases", "Designing graphics"],
                answer: "Creating dynamic web content"
            },
            {
                question: "Which company developed JavaScript?",
                options: ["Microsoft", "Netscape", "Google", "IBM"],
                answer: "Netscape"
            },
            {
                question: "Which keyword is used to declare a variable in JavaScript?",
                options: ["int", "let", "var", "Both let and var"],
                answer: "Both let and var"
            },
            {
                question: "What is the output of `typeof null`?",
                options: ["null", "object", "undefined", "number"],
                answer: "object"
            },
            {
                 question: "Which of the following is not a JavaScript data type?",
                options: ["String", "Boolean", "Float", "Undefined"],
                answer: "Float"
            },
            {
                question: "What will `console.log(2 + '2')` print?",
                options: ["4", "22", "Error", "NaN"],
                answer: "22"
            },
            {
                question: "Which symbol is used for comments in JavaScript?",
                options: ["//", "#", "/* */", "Both // and /* */"],
                answer: "Both // and /* */"
            },
            {
                question: "How do you create an array in JavaScript?",
                options: ["[]", "{}", "()", "<>"],
                answer: "[]"
            },
            {
                question: "Which method is used to print something to the console?",
                options: ["console.log()", "print()", "log.console()", "write.console()"],
                answer: "console.log()"
            },
            {
                question: "What is the result of `Boolean(0)`?",
                options: ["true", "false", "undefined", "0"],
                answer: "false"
            },

            // 🟡 MEDIUM (11–20)
            {
                question: "What does the `===` operator check for?",
                options: ["Equality only", "Value equality", "Value and type equality", "Type only"],
                answer: "Value and type equality"
            },
            {
                question: "What will `NaN === NaN` return?",
                options: ["true", "false", "undefined", "Error"],
                answer: "false"
            },
            {
                question: "Which function is used to parse a string to an integer?",
                options: ["parseInt()", "parseFloat()", "Number()", "int()"],
                answer: "parseInt()"
            },
            {
                question: "How can you add an element to the end of an array?",
                options: [".add()", ".push()", ".append()", ".insert()"],
                answer: ".push()"
            },
            {
                question: "What is a callback function in JavaScript?",
                options: ["A function passed into another function as an argument", "A function that runs automatically", "A function with no parameters", "A function that returns another function"],
                answer: "A function passed into another function as an argument"
            },
            {
                question: "What is the scope of a variable declared with `let`?",
                options: ["Global", "Block", "Function", "Object"],
                answer: "Block"
            },
            {
                question: "What will be the result of `typeof NaN`?",
                options: ["number", "NaN", "undefined", "object"],
                answer: "number"
            },
            {
                question: "Which array method creates a new array with all elements that pass a test?",
                options: ["map()", "filter()", "forEach()", "reduce()"],
                answer: "filter()"
            },
            {
                question: "What is the result of `'5' - 2`?",
                options: ["3", "52", "NaN", "Error"],
                answer: "3"
            },
            {
                question: "What is the purpose of `use strict` in JavaScript?",
                options: ["Enables modern JS features", "Enforces stricter parsing and error handling", "Makes code faster", "Disables ES6 syntax"],
                answer: "Enforces stricter parsing and error handling"
            },

            // 🔴 HARD (21–30)
            {
                question: "What will `[] + []` evaluate to?",
                options: ["[]", "0", "'' (empty string)", "undefined"],
                answer: "'' (empty string)"
            },
            {
                question: "What is a closure in JavaScript?",
                options: ["A function inside another function that accesses outer variables", "A function that closes itself", "An object with private data", "A type of promise"],
                answer: "A function inside another function that accesses outer variables"
            },
            {
                question: "What does the `bind()` method do?",
                options: ["Binds an event to a DOM element", "Creates a new function with `this` set to the given value", "Binds a variable to a scope", "Links two objects"],
                answer: "Creates a new function with `this` set to the given value"
            },
            {
                question: "Which keyword is used to handle errors in JavaScript?",
                options: ["catch", "throw", "try", "Both try and catch"],
                answer: "Both try and catch"
            },
            {
                question: "What is the output of `typeof undefined`?",
                options: ["object", "undefined", "string", "null"],
                answer: "undefined"
            },
            {
                question: "Which statement is true about promises?",
                options: ["They block execution", "They represent a future value", "They are synchronous", "They return immediately with data"],
                answer: "They represent a future value"
            },
            {
                question: "What will `console.log([] == 0)` print?",
                options: ["true", "false", "undefined", "Error"],
                answer: "true"
            },
            {
                question: "What is the purpose of async/await?",
                options: ["Handle asynchronous code in a synchronous way", "Create promises", "Delay execution", "Pause loops"],
                answer: "Handle asynchronous code in a synchronous way"
            },
            {
                question: "What does the `this` keyword refer to in arrow functions?",
                options: ["Global object", "Current object", "Lexical scope", "Window object only"],
                answer: "Lexical scope"
            },
            {
                question: "Which built-in method combines all elements of an array into a string?",
                options: ["concat()", "join()", "toString()", "merge()"],
                answer: "join()"
            },
            {
                question: "How can you copy an array in JavaScript?",
                options: ["Using = operator", "Using spread operator [...arr]", "Using arr.copy()", "Using Object.assign()"],
                answer: "Using spread operator [...arr]"
            },
            {
                question: "What is event bubbling in JavaScript?",
                options: ["Event flows from target to root element", "Event flows from root to target element", "Event occurs twice", "No relation with DOM"],
                answer: "Event flows from target to root element"
            },
            {
                question: "What does JSON stand for?",
                options: ["JavaScript Object Node", "JavaScript Object Notation", "Java Syntax Output", "JavaScript Online Network"],
                answer: "JavaScript Object Notation"
            },
            {
                question: "What is the purpose of `Object.freeze()`?",
                options: ["Prevents modification of object properties", "Deletes object", "Copies object", "Resets object values"],
                answer: "Prevents modification of object properties"
            },
            {
                question: "What is the difference between `map()` and `forEach()`?",
                options: ["map() returns a new array, forEach() does not", "Both are same", "forEach() is faster", "map() modifies original array"],
                answer: "map() returns a new array, forEach() does not"
            },
            {
                question: "Which method is used to remove the last element from an array?",
                options: ["pop()", "shift()", "splice()", "remove()"],
                answer: "pop()"
            },
            {
                question: "What is a pure function in JavaScript?",
                options: ["A function with no side effects and same output for same input", "A function that modifies global state", "An async function", "A callback function"],
                answer: "A function with no side effects and same output for same input"
            },
            {
                question: "What does `Promise.all()` do?",
                options: ["Runs promises in sequence", "Resolves when all promises are resolved", "Rejects first promise only", "Executes one promise at a time"],
                answer: "Resolves when all promises are resolved"
            },
            {
                question: "What will `setTimeout(() => console.log('Hi'), 0)` do?",
                options: ["Logs immediately", "Logs after 0ms but after current call stack", "Throws error", "Blocks main thread"],
                answer: "Logs after 0ms but after current call stack"
            },
            {
                question: "What is debouncing in JavaScript?",
                options: ["Delaying function execution until a pause in events", "Executing function multiple times quickly", "Pausing loops", "Canceling timeouts"],
                answer: "Delaying function execution until a pause in events"
            }
            ],

            'HTML': [
                    // 🟢 EASY (1–10)
                    {
                        question: "What does HTML stand for?",
                        options: [
                        "Hyper Text Markup Language",
                        "High Transfer Markup Language",
                        "Hyperlink and Text Markup Language",
                        "Home Tool Markup Language"
                        ],
                        answer: "Hyper Text Markup Language"
                    },
                    {
                        question: "Which HTML tag is used to define the largest heading?",
                        options: ["<heading>", "<h6>", "<head>", "<h1>"],
                        answer: "<h1>"
                    },
                    {
                        question: "Which tag is used to create a hyperlink in HTML?",
                        options: ["<link>", "<a>", "<href>", "<url>"],
                        answer: "<a>"
                    },
                    {
                        question: "Which tag is used to insert an image in HTML?",
                        options: ["<img>", "<src>", "<image>", "<pic>"],
                        answer: "<img>"
                    },
                    {
                        question: "Which HTML element is used to display a numbered list?",
                        options: ["<ul>", "<ol>", "<li>", "<dl>"],
                        answer: "<ol>"
                    },
                    {
                        question: "What is the correct HTML tag for inserting a line break?",
                        options: ["<break>", "<lb>", "<br>", "<newline>"],
                        answer: "<br>"
                    },
                    {
                        question: "What is the purpose of the <title> tag?",
                        options: [
                        "Displays the page title on the browser tab",
                        "Creates a heading in the page",
                        "Shows tooltip text",
                        "Adds a subtitle"
                        ],
                        answer: "Displays the page title on the browser tab"
                    },
                    {
                        question: "Which HTML element defines the body of a web page?",
                        options: ["<main>", "<section>", "<body>", "<div>"],
                        answer: "<body>"
                    },
                    {
                        question: "Which attribute specifies an image source in HTML?",
                        options: ["alt", "src", "href", "title"],
                        answer: "src"
                    },
                    {
                        question: "Which element is used to create a paragraph?",
                        options: ["<p>", "<para>", "<text>", "<body>"],
                        answer: "<p>"
                    },

                    // 🟡 MEDIUM (11–20)
                    {
                        question: "What is the correct HTML tag for inserting a background image?",
                        options: [
                        "<background>",
                        "<body background='image.jpg'>",
                        "<bg>",
                        "<img background>"
                        ],
                        answer: "<body background='image.jpg'>"
                    },
                    {
                        question: "Which tag is used to make text bold in HTML?",
                        options: ["<strong>", "<b>", "Both <b> and <strong>", "<em>"],
                        answer: "Both <b> and <strong>"
                    },
                    {
                        question: "Which tag is used to make text italic in HTML?",
                        options: ["<italic>", "<i>", "<em>", "Both <i> and <em>"],
                        answer: "Both <i> and <em>"
                    },
                    {
                        question: "Which HTML element is used for inserting a horizontal line?",
                        options: ["<line>", "<hr>", "<border>", "<rule>"],
                        answer: "<hr>"
                    },
                    {
                        question: "What does the 'alt' attribute in the <img> tag do?",
                        options: [
                        "Provides alternate text if image fails to load",
                        "Specifies image alignment",
                        "Sets image size",
                        "Defines image color"
                        ],
                        answer: "Provides alternate text if image fails to load"
                    },
                    {
                        question: "Which tag is used to create a table in HTML?",
                        options: ["<table>", "<tab>", "<tbl>", "<t>"],
                        answer: "<table>"
                    },
                    {
                        question: "What does the <thead> tag define?",
                        options: [
                        "Table footer",
                        "Table heading section",
                        "Table data rows",
                        "Main header of the page"
                        ],
                        answer: "Table heading section"
                    },
                    {
                        question: "Which tag is used to define a list item?",
                        options: ["<item>", "<li>", "<list>", "<ul>"],
                        answer: "<li>"
                    },
                    {
                        question: "Which tag defines a drop-down list?",
                        options: ["<select>", "<dropdown>", "<input type='list'>", "<list>"],
                        answer: "<select>"
                    },
                    {
                        question: "What is the purpose of the <meta> tag?",
                        options: [
                        "To define metadata like keywords and description",
                        "To display media files",
                        "To link external files",
                        "To define JavaScript code"
                        ],
                        answer: "To define metadata like keywords and description"
                    },

                    // 🔴 HARD (21–30)
                    {
                        question: "What is the purpose of the <!DOCTYPE html> declaration?",
                        options: [
                        "Defines HTML version and document type",
                        "Includes CSS file",
                        "Declares language of the document",
                        "Starts the HTML document"
                        ],
                        answer: "Defines HTML version and document type"
                    },
                    {
                        question: "What is the correct way to specify an email link?",
                        options: [
                        "<a href='mailto:example@mail.com'>Email Me</a>",
                        "<mail>example@mail.com</mail>",
                        "<a email='example@mail.com'>Email Me</a>",
                        "<contact href='example@mail.com'>"
                        ],
                        answer: "<a href='mailto:example@mail.com'>Email Me</a>"
                    },
                    {
                        question: "Which HTML5 element defines navigation links?",
                        options: ["<navigate>", "<menu>", "<nav>", "<links>"],
                        answer: "<nav>"
                    },
                    {
                        question: "What does the <canvas> element do in HTML5?",
                        options: [
                        "Displays graphics on the fly using JavaScript",
                        "Displays static images",
                        "Plays audio files",
                        "Embeds video content"
                        ],
                        answer: "Displays graphics on the fly using JavaScript"
                    },
                    {
                        question: "Which HTML tag is used to play a video file?",
                        options: ["<media>", "<movie>", "<video>", "<mp4>"],
                        answer: "<video>"
                    },
                    {
                        question: "What is the use of the <section> tag?",
                        options: [
                        "Defines a thematic grouping of content",
                        "Creates a navigation bar",
                        "Defines a footer area",
                        "Links CSS files"
                        ],
                        answer: "Defines a thematic grouping of content"
                    },
                    {
                        question: "What is the difference between <div> and <span>?",
                        options: [
                        "<div> is block-level, <span> is inline",
                        "Both are inline",
                        "Both are block-level",
                        "No difference"
                        ],
                        answer: "<div> is block-level, <span> is inline"
                    },
                    {
                        question: "Which attribute is used to open a link in a new tab?",
                        options: ["new", "tab", "target='_blank'", "window='_new'"],
                        answer: "target='_blank'"
                    },
                    {
                        question: "Which tag is used to embed an external webpage inside another page?",
                        options: ["<embed>", "<iframe>", "<object>", "<include>"],
                        answer: "<iframe>"
                    },
                    {
                        question: "Which tag is used to define inline JavaScript code?",
                        options: ["<script>", "<js>", "<javascript>", "<code>"],
                        answer: "<script>"
                    },
                    {
                        question: "Which tag defines emphasized text in HTML?",
                        options: ["<italic>", "<strong>", "<em>", "<b>"],
                        answer: "<em>"
                    },
                    {
                        question: "What is the correct HTML for creating a checkbox?",
                        options: [
                        "<checkbox>",
                        "<input type='checkbox'>",
                        "<check>",
                        "<input checkbox>"
                        ],
                        answer: "<input type='checkbox'>"
                    },
                    {
                        question: "Which element represents the footer section of a webpage?",
                        options: ["<bottom>", "<footer>", "<end>", "<section>"],
                        answer: "<footer>"
                    },
                    {
                        question: "Which HTML tag is used to define a form?",
                        options: ["<form>", "<input>", "<field>", "<data>"],
                        answer: "<form>"
                    },
                    {
                        question: "What is the correct HTML for inserting an external CSS file?",
                        options: [
                        "<link rel='stylesheet' href='style.css'>",
                        "<style src='style.css'>",
                        "<css link='style.css'>",
                        "<stylesheet>style.css</stylesheet>"
                        ],
                        answer: "<link rel='stylesheet' href='style.css'>"
                    },
                    {
                        question: "Which HTML attribute is used to specify inline styles?",
                        options: ["class", "id", "style", "font"],
                        answer: "style"
                    },
                    {
                        question: "What does the <label> tag do in HTML forms?",
                        options: [
                        "Defines a caption for an input element",
                        "Creates a text box",
                        "Displays hints below forms",
                        "Adds icons to inputs"
                        ],
                        answer: "Defines a caption for an input element"
                    },
                    {
                        question: "What is the purpose of the <fieldset> tag?",
                        options: [
                        "Groups related elements in a form",
                        "Creates a table border",
                        "Defines a footer for form",
                        "Adds extra space between fields"
                        ],
                        answer: "Groups related elements in a form"
                    },
                    {
                        question: "Which attribute specifies that an input field must be filled out?",
                        options: ["required", "validate", "must", "checked"],
                        answer: "required"
                    },
                    {
                        question: "Which new input type was introduced in HTML5?",
                        options: ["date", "image", "password", "file"],
                        answer: "date"
                    }
                    ],
            'CSS': [
                // 🟢 EASY (1–10)
                {
                    question: "What does CSS stand for?",
                    options: [
                    "Colorful Style Sheets",
                    "Creative Style System",
                    "Cascading Style Sheets",
                    "Computer Style Syntax"
                    ],
                    answer: "Cascading Style Sheets"
                },
                {
                    question: "Which HTML tag is used to include CSS styles?",
                    options: ["<script>", "<link>", "<style>", "<css>"],
                    answer: "<style>"
                },
                {
                    question: "Which property is used to change text color in CSS?",
                    options: ["text-color", "font-color", "color", "text-style"],
                    answer: "color"
                },
                {
                    question: "How do you add a background color in CSS?",
                    options: [
                    "background-color: blue;",
                    "color-background: blue;",
                    "bgcolor: blue;",
                    "background:color(blue);"
                    ],
                    answer: "background-color: blue;"
                },
                {
                    question: "Which property controls text size?",
                    options: ["font-size", "text-size", "font-style", "size"],
                    answer: "font-size"
                },
                {
                    question: "How do you select an element with the id 'header'?",
                    options: ["header", ".header", "#header", "*header"],
                    answer: "#header"
                },
                {
                    question: "How do you select all elements with the class name 'menu'?",
                    options: [".menu", "#menu", "menu", "class.menu"],
                    answer: ".menu"
                },
                {
                    question: "Which property is used to make text bold?",
                    options: ["text-weight", "font-weight", "font-bold", "text-bold"],
                    answer: "font-weight"
                },
                {
                    question: "Which property is used to center text?",
                    options: ["align", "text-center", "text-align", "center"],
                    answer: "text-align"
                },
                {
                    question: "What does the 'margin' property do?",
                    options: [
                    "Sets space between elements",
                    "Sets space inside the element",
                    "Adds a border",
                    "Changes element height"
                    ],
                    answer: "Sets space between elements"
                },

                // 🟡 MEDIUM (11–20)
                {
                    question: "What does the 'padding' property do?",
                    options: [
                    "Creates space between elements",
                    "Creates space inside the element",
                    "Adds a border",
                    "Moves an element"
                    ],
                    answer: "Creates space inside the element"
                },
                {
                    question: "Which property changes the font of text?",
                    options: ["font-family", "font-type", "text-font", "font-style"],
                    answer: "font-family"
                },
                {
                    question: "How can you make a list display horizontally?",
                    options: [
                    "display: inline;",
                    "list-style: none;",
                    "float: left;",
                    "display: inline-block;"
                    ],
                    answer: "display: inline;"
                },
                {
                    question: "Which CSS property controls the order of overlapping elements?",
                    options: ["z-index", "position", "display", "float"],
                    answer: "z-index"
                },
                {
                    question: "Which position value makes an element stay fixed in one place on screen?",
                    options: ["relative", "absolute", "fixed", "sticky"],
                    answer: "fixed"
                },
                {
                    question: "Which unit is relative to the font size of the root element?",
                    options: ["em", "px", "rem", "%"],
                    answer: "rem"
                },
                {
                    question: "What does 'float: left;' do?",
                    options: [
                    "Aligns an element to the left side",
                    "Centers an element",
                    "Fixes an element position",
                    "Moves element off-screen"
                    ],
                    answer: "Aligns an element to the left side"
                },
                {
                    question: "What does the 'display: none;' property do?",
                    options: [
                    "Hides an element and removes it from layout",
                    "Makes an element invisible but keeps space",
                    "Deletes the element",
                    "Sets element opacity to zero"
                    ],
                    answer: "Hides an element and removes it from layout"
                },
                {
                    question: "Which CSS property is used to set the space between lines of text?",
                    options: ["letter-spacing", "line-height", "word-spacing", "spacing"],
                    answer: "line-height"
                },
                {
                    question: "How can you make text all uppercase in CSS?",
                    options: [
                    "text-transform: uppercase;",
                    "font-case: upper;",
                    "text-decoration: upper;",
                    "text-style: upper;"
                    ],
                    answer: "text-transform: uppercase;"
                },

                // 🔴 HARD (21–30)
                {
                    question: "Which property is used to make a rounded corner?",
                    options: ["border-shape", "border-radius", "corner", "round-edge"],
                    answer: "border-radius"
                },
                {
                    question: "How can you apply multiple classes to one element?",
                    options: [
                    "Separate class names with commas",
                    "Separate class names with spaces",
                    "Use brackets",
                    "Only one class allowed"
                    ],
                    answer: "Separate class names with spaces"
                },
                {
                    question: "What does the 'opacity' property control?",
                    options: ["Brightness", "Transparency", "Contrast", "Visibility"],
                    answer: "Transparency"
                },
                {
                    question: "Which property is used for a grid layout in CSS?",
                    options: ["display: grid;", "layout: grid;", "grid: enable;", "grid-mode: on;"],
                    answer: "display: grid;"
                },
                {
                    question: "What is the default position value for HTML elements?",
                    options: ["relative", "absolute", "static", "inherit"],
                    answer: "static"
                },
                {
                    question: "Which CSS pseudo-class is used to style a link when hovered?",
                    options: [":hover", ":focus", ":visited", ":active"],
                    answer: ":hover"
                },
                {
                    question: "Which property adds shadow to text?",
                    options: ["text-shadow", "font-shadow", "box-shadow", "shadow-text"],
                    answer: "text-shadow"
                },
                {
                    question: "How do you create a transition effect in CSS?",
                    options: [
                    "animation:",
                    "transition:",
                    "motion:",
                    "effect:"
                    ],
                    answer: "transition:"
                },
                {
                    question: "Which property is used to control the layout of flex items?",
                    options: ["display: flex;", "flex-direction", "flex-wrap", "justify-content"],
                    answer: "flex-direction"
                },
                {
                    question: "What is the difference between 'absolute' and 'relative' positioning?",
                    options: [
                    "Absolute positions relative to parent; relative positions relative to itself",
                    "Relative positions to viewport; absolute to parent",
                    "They are identical",
                    "Relative fixes position"
                    ],
                    answer: "Absolute positions relative to parent; relative positions relative to itself"
                },
                {
                    question: "What does 'overflow: hidden;' do?",
                    options: [
                    "Hides content that overflows the element’s box",
                    "Adds scrollbar",
                    "Clips content with scroll",
                    "Shows overflow content"
                    ],
                    answer: "Hides content that overflows the element’s box"
                },
                {
                    question: "Which property specifies the space between letters?",
                    options: ["word-spacing", "letter-spacing", "line-height", "spacing"],
                    answer: "letter-spacing"
                },
                {
                    question: "What is the use of 'calc()' function in CSS?",
                    options: [
                    "Performs calculations to determine CSS values",
                    "Adds animations",
                    "Changes variable values",
                    "Combines selectors"
                    ],
                    answer: "Performs calculations to determine CSS values"
                },
                {
                    question: "Which property defines how flex items are aligned horizontally?",
                    options: [
                    "align-items",
                    "justify-content",
                    "align-content",
                    "flex-wrap"
                    ],
                    answer: "justify-content"
                },
                {
                    question: "Which CSS property creates animation keyframes?",
                    options: ["@keyframes", "animation-frames", "motion-key", "@animation"],
                    answer: "@keyframes"
                },
                {
                    question: "Which value of display property hides an element but keeps its layout space?",
                    options: ["none", "hidden", "visibility: hidden;", "display: block;"],
                    answer: "visibility: hidden;"
                },
                {
                    question: "What does the 'cursor: pointer;' property do?",
                    options: [
                    "Changes the mouse cursor to a hand symbol",
                    "Adds a pointer shape",
                    "Triggers an animation",
                    "Selects the element"
                    ],
                    answer: "Changes the mouse cursor to a hand symbol"
                },
                {
                    question: "What does the 'min-width' property do?",
                    options: [
                    "Sets the minimum width of an element",
                    "Sets the default width",
                    "Fixes the maximum width",
                    "Centers the element"
                    ],
                    answer: "Sets the minimum width of an element"
                },
                {
                    question: "Which property controls stacking order of positioned elements?",
                    options: ["position", "z-index", "stack", "order"],
                    answer: "z-index"
                },
                {
                    question: "Which property is used to make an element a flex container?",
                    options: [
                    "display: flex;",
                    "flex-container: true;",
                    "flexbox: enable;",
                    "container: flex;"
                    ],
                    answer: "display: flex;"
                }
                ],
            'Tailwind CSS': [
                // 🟢 EASY (1–10)
                {
                    question: "What is Tailwind CSS?",
                    options: [
                    "A JavaScript framework",
                    "A utility-first CSS framework",
                    "A CSS preprocessor",
                    "A UI design tool"
                    ],
                    answer: "A utility-first CSS framework"
                },
                {
                    question: "Who created Tailwind CSS?",
                    options: [
                    "Facebook",
                    "Google",
                    "Adam Wathan",
                    "Twitter"
                    ],
                    answer: "Adam Wathan"
                },
                {
                    question: "Which command installs Tailwind CSS via npm?",
                    options: [
                    "npm install tailwind",
                    "npm install tailwindcss",
                    "npm tailwind init",
                    "npm start tailwind"
                    ],
                    answer: "npm install tailwindcss"
                },
                {
                    question: "Which file is used to configure Tailwind settings?",
                    options: [
                    "tailwind.config.js",
                    "style.css",
                    "config.tailwind.json",
                    "app.css"
                    ],
                    answer: "tailwind.config.js"
                },
                {
                    question: "Which directive is used to include Tailwind base styles?",
                    options: [
                    "@tailwind base;",
                    "@tailwindcss;",
                    "@import base;",
                    "@use tailwind;"
                    ],
                    answer: "@tailwind base;"
                },
                {
                    question: "Which class is used to center text in Tailwind?",
                    options: [
                    "text-center",
                    "center-text",
                    "align-center",
                    "text-align"
                    ],
                    answer: "text-center"
                },
                {
                    question: "Which class sets the background color to blue?",
                    options: [
                    "bg-blue",
                    "background-blue",
                    "bg-blue-500",
                    "blue-bg"
                    ],
                    answer: "bg-blue-500"
                },
                {
                    question: "Which class adds margin of 4 units?",
                    options: [
                    "m-4",
                    "margin-4",
                    "p-4",
                    "space-4"
                    ],
                    answer: "m-4"
                },
                {
                    question: "Which class makes text bold?",
                    options: [
                    "font-bold",
                    "text-bold",
                    "bold-text",
                    "fw-bold"
                    ],
                    answer: "font-bold"
                },
                {
                    question: "Which class adds padding of 2 units on all sides?",
                    options: [
                    "padding-2",
                    "pd-2",
                    "p-2",
                    "pt-2"
                    ],
                    answer: "p-2"
                },

                // 🟡 MEDIUM (11–20)
                {
                    question: "Which class applies a shadow effect?",
                    options: [
                    "shadow",
                    "box-shadow",
                    "shadow-4",
                    "bg-shadow"
                    ],
                    answer: "shadow"
                },
                {
                    question: "How do you make text uppercase in Tailwind?",
                    options: [
                    "uppercase",
                    "text-upper",
                    "text-uppercase",
                    "font-upper"
                    ],
                    answer: "uppercase"
                },
                {
                    question: "Which class is used for flex container?",
                    options: [
                    "d-flex",
                    "display-flex",
                    "flex",
                    "flexbox"
                    ],
                    answer: "flex"
                },
                {
                    question: "Which class justifies content to the center in flexbox?",
                    options: [
                    "justify-middle",
                    "justify-content-center",
                    "justify-center",
                    "center-justify"
                    ],
                    answer: "justify-center"
                },
                {
                    question: "Which class applies rounded corners?",
                    options: [
                    "rounded",
                    "border-radius",
                    "corner-round",
                    "radius-5"
                    ],
                    answer: "rounded"
                },
                {
                    question: "What does 'sm:' prefix mean in Tailwind?",
                    options: [
                    "Applies style for mobile screens",
                    "Applies style for small screens (min-width: 640px)",
                    "Applies style globally",
                    "Applies style for printing"
                    ],
                    answer: "Applies style for small screens (min-width: 640px)"
                },
                {
                    question: "Which class adds a border of 2px width?",
                    options: [
                    "border-2",
                    "b-2",
                    "border-width-2",
                    "borderline-2"
                    ],
                    answer: "border-2"
                },
                {
                    question: "How can you add space between flex items in Tailwind?",
                    options: [
                    "gap-4",
                    "space-between-4",
                    "margin-4",
                    "grid-gap-4"
                    ],
                    answer: "gap-4"
                },
                {
                    question: "Which class sets width to 100%?",
                    options: [
                    "w-100",
                    "width-full",
                    "w-full",
                    "max-w-full"
                    ],
                    answer: "w-full"
                },
                {
                    question: "Which class applies gradient background?",
                    options: [
                    "bg-gradient",
                    "bg-gradient-to-r",
                    "gradient-bg",
                    "background-gradient"
                    ],
                    answer: "bg-gradient-to-r"
                },

                // 🔴 HARD (21–30)
                {
                    question: "Which directive includes Tailwind utilities?",
                    options: [
                    "@tailwind utilities;",
                    "@tailwind tools;",
                    "@use utilities;",
                    "@import tailwind-utils;"
                    ],
                    answer: "@tailwind utilities;"
                },
                {
                    question: "Which Tailwind class makes an element invisible but keeps its space?",
                    options: [
                    "hidden",
                    "invisible",
                    "opacity-0",
                    "none"
                    ],
                    answer: "invisible"
                },
                {
                    question: "What does 'max-w-screen-lg' do?",
                    options: [
                    "Sets maximum width to large screen size",
                    "Sets fixed width to 640px",
                    "Makes screen full width",
                    "Hides content on large screens"
                    ],
                    answer: "Sets maximum width to large screen size"
                },
                {
                    question: "Which class applies transition to all properties?",
                    options: [
                    "transition",
                    "animate",
                    "ease",
                    "motion"
                    ],
                    answer: "transition"
                },
                {
                    question: "What does 'hover:bg-blue-500' do?",
                    options: [
                    "Always applies blue background",
                    "Changes background to blue on hover",
                    "Applies gradient color",
                    "Adds shadow on hover"
                    ],
                    answer: "Changes background to blue on hover"
                },
                {
                    question: "How do you apply dark mode styles in Tailwind?",
                    options: [
                    "Use 'dark:' prefix before classes",
                    "Use 'theme:dark'",
                    "Use '@dark'",
                    "Tailwind doesn’t support dark mode"
                    ],
                    answer: "Use 'dark:' prefix before classes"
                },
                {
                    question: "Which class adds a drop shadow to an element?",
                    options: [
                    "shadow-lg",
                    "drop-shadow",
                    "shadow-md",
                    "shadow-effect"
                    ],
                    answer: "shadow-lg"
                },
                {
                    question: "What is the purpose of 'container' class in Tailwind?",
                    options: [
                    "Sets max-width and auto horizontal margin",
                    "Centers text vertically",
                    "Adds default padding",
                    "Creates a flex container"
                    ],
                    answer: "Sets max-width and auto horizontal margin"
                },
                {
                    question: "Which Tailwind utility controls opacity?",
                    options: [
                    "opacity-50",
                    "transparency-50",
                    "alpha-50",
                    "color-opacity"
                    ],
                    answer: "opacity-50"
                },
                {
                    question: "Which class makes an element sticky to the top?",
                    options: [
                    "sticky top-0",
                    "fixed-top",
                    "position-sticky",
                    "top-fixed"
                    ],
                    answer: "sticky top-0"
                },
                {
                    question: "How do you make text responsive in Tailwind?",
                    options: [
                    "Use responsive prefixes like sm:text-xl, lg:text-2xl",
                    "Use @media queries",
                    "Use text-auto",
                    "Use responsive:true"
                    ],
                    answer: "Use responsive prefixes like sm:text-xl, lg:text-2xl"
                },
                {
                    question: "What does 'space-x-4' do?",
                    options: [
                    "Adds horizontal space between children elements",
                    "Adds vertical space between elements",
                    "Adds padding to parent element",
                    "Sets text spacing"
                    ],
                    answer: "Adds horizontal space between children elements"
                },
                {
                    question: "Which Tailwind class makes an element flex column?",
                    options: [
                    "flex-column",
                    "flex-col",
                    "flex-dir-column",
                    "direction-column"
                    ],
                    answer: "flex-col"
                },
                {
                    question: "Which utility makes text truncate with ellipsis?",
                    options: [
                    "truncate",
                    "overflow-ellipsis",
                    "text-truncate",
                    "clip-text"
                    ],
                    answer: "truncate"
                },
                {
                    question: "What does 'aspect-video' do?",
                    options: [
                    "Sets element ratio to 16:9",
                    "Sets element ratio to 4:3",
                    "Auto adjusts width",
                    "Adds border to video"
                    ],
                    answer: "Sets element ratio to 16:9"
                },
                {
                    question: "Which class sets flex item alignment to bottom?",
                    options: [
                    "items-end",
                    "justify-end",
                    "align-bottom",
                    "content-end"
                    ],
                    answer: "items-end"
                },
                {
                    question: "Which Tailwind class sets text color to white?",
                    options: [
                    "text-white",
                    "color-white",
                    "font-white",
                    "white-text"
                    ],
                    answer: "text-white"
                },
                {
                    question: "Which class makes an element take full height of the screen?",
                    options: [
                    "h-screen",
                    "height-full",
                    "h-full",
                    "screen-height"
                    ],
                    answer: "h-screen"
                },
                {
                    question: "What does 'divide-y-2' do?",
                    options: [
                    "Adds 2px border between vertical child elements",
                    "Adds padding between rows",
                    "Adds top border",
                    "Adds background separation"
                    ],
                    answer: "Adds 2px border between vertical child elements"
                },
                {
                    question: "Which Tailwind class controls letter spacing?",
                    options: [
                    "tracking-wide",
                    "letter-spacing",
                    "space-letters",
                    "font-space"
                    ],
                    answer: "tracking-wide"
                }
                ],

            'Node.js':[
                // 🟢 EASY (1–10)
                {
                    question: "What is Node.js?",
                    options: [
                    "A JavaScript runtime built on Chrome's V8 engine",
                    "A front-end JavaScript framework",
                    "A database management system",
                    "A CSS framework"
                    ],
                    answer: "A JavaScript runtime built on Chrome's V8 engine"
                },
                {
                    question: "Who created Node.js?",
                    options: [
                    "Ryan Dahl",
                    "Brendan Eich",
                    "Linus Torvalds",
                    "Guido van Rossum"
                    ],
                    answer: "Ryan Dahl"
                },
                {
                    question: "Which command is used to check Node.js version?",
                    options: [
                    "node -version",
                    "node --version",
                    "npm version",
                    "node -v"
                    ],
                    answer: "node -v"
                },
                {
                    question: "What is the default package manager for Node.js?",
                    options: [
                    "Yarn",
                    "Composer",
                    "npm",
                    "pnpm"
                    ],
                    answer: "npm"
                },
                {
                    question: "Which command initializes a new Node.js project?",
                    options: [
                    "npm start",
                    "npm init",
                    "node init",
                    "create-node"
                    ],
                    answer: "npm init"
                },
                {
                    question: "Which file is used to define dependencies in Node.js?",
                    options: [
                    "package.js",
                    "package.json",
                    "node.config.js",
                    "dependencies.json"
                    ],
                    answer: "package.json"
                },
                {
                    question: "Which module is used to create a web server in Node.js?",
                    options: [
                    "http",
                    "fs",
                    "os",
                    "url"
                    ],
                    answer: "http"
                },
                {
                    question: "Which method is used to read files in Node.js?",
                    options: [
                    "fs.readFile()",
                    "fileSystem.read()",
                    "read.file()",
                    "getFile()"
                    ],
                    answer: "fs.readFile()"
                },
                {
                    question: "Which of the following is a core module in Node.js?",
                    options: [
                    "express",
                    "react",
                    "path",
                    "axios"
                    ],
                    answer: "path"
                },
                {
                    question: "Which of these is used to import a module in Node.js?",
                    options: [
                    "include()",
                    "import",
                    "require()",
                    "use()"
                    ],
                    answer: "require()"
                },

                // 🟡 MEDIUM (11–20)
                {
                    question: "Which method writes data to a file in Node.js?",
                    options: [
                    "fs.write()",
                    "fs.writeFile()",
                    "file.write()",
                    "fs.saveFile()"
                    ],
                    answer: "fs.writeFile()"
                },
                {
                    question: "What does the 'os' module provide?",
                    options: [
                    "Operating system-related utility methods",
                    "File system methods",
                    "HTTP utilities",
                    "Database functions"
                    ],
                    answer: "Operating system-related utility methods"
                },
                {
                    question: "Which module is used to handle routes in Node.js?",
                    options: [
                    "router",
                    "express",
                    "path",
                    "url"
                    ],
                    answer: "express"
                },
                {
                    question: "Which statement about Node.js is true?",
                    options: [
                    "It is multi-threaded",
                    "It is single-threaded and non-blocking",
                    "It blocks I/O operations",
                    "It runs only on Windows"
                    ],
                    answer: "It is single-threaded and non-blocking"
                },
                {
                    question: "Which function is used to create a server in the http module?",
                    options: [
                    "http.createServer()",
                    "http.newServer()",
                    "http.startServer()",
                    "server.create()"
                    ],
                    answer: "http.createServer()"
                },
                {
                    question: "What is the default port for Node.js HTTP server if not specified?",
                    options: [
                    "8080",
                    "3000",
                    "5000",
                    "80"
                    ],
                    answer: "80"
                },
                {
                    question: "Which global object provides information about the current process?",
                    options: [
                    "process",
                    "system",
                    "global",
                    "os"
                    ],
                    answer: "process"
                },
                {
                    question: "Which of the following is used to execute asynchronous code?",
                    options: [
                    "Promises",
                    "For loop",
                    "If statement",
                    "Console.log"
                    ],
                    answer: "Promises"
                },
                {
                    question: "Which method is used to send a response in Express.js?",
                    options: [
                    "res.send()",
                    "response.write()",
                    "send.response()",
                    "res.output()"
                    ],
                    answer: "res.send()"
                },
                {
                    question: "How can you install Express.js using npm?",
                    options: [
                    "npm install express",
                    "npm get express",
                    "install express",
                    "node install express"
                    ],
                    answer: "npm install express"
                },

                // 🔴 HARD (21–30)
                {
                    question: "What does 'cluster' module in Node.js do?",
                    options: [
                    "Helps to create child processes that share the same server port",
                    "Handles database connections",
                    "Manages user sessions",
                    "Creates event listeners"
                    ],
                    answer: "Helps to create child processes that share the same server port"
                },
                {
                    question: "Which of the following is true about the EventEmitter class?",
                    options: [
                    "Used for handling events in Node.js",
                    "Used for file system management",
                    "Used for networking",
                    "Used for HTTP requests"
                    ],
                    answer: "Used for handling events in Node.js"
                },
                {
                    question: "Which function is used to end a response in Node.js HTTP server?",
                    options: [
                    "res.finish()",
                    "res.end()",
                    "res.close()",
                    "end.response()"
                    ],
                    answer: "res.end()"
                },
                {
                    question: "How can you handle unhandled exceptions in Node.js?",
                    options: [
                    "process.on('uncaughtException', callback)",
                    "try/catch everywhere",
                    "node.handleError()",
                    "exceptionHandler()"
                    ],
                    answer: "process.on('uncaughtException', callback)"
                },
                {
                    question: "Which module is used to handle file paths in Node.js?",
                    options: [
                    "path",
                    "fs",
                    "url",
                    "http"
                    ],
                    answer: "path"
                },
                {
                    question: "Which module allows you to work with streams?",
                    options: [
                    "stream",
                    "events",
                    "buffer",
                    "http"
                    ],
                    answer: "stream"
                },
                {
                    question: "How do you export a function from a Node.js module?",
                    options: [
                    "export function",
                    "module.export = myFunction",
                    "module.exports = myFunction",
                    "exports: myFunction"
                    ],
                    answer: "module.exports = myFunction"
                },
                {
                    question: "What does 'npm install -g' do?",
                    options: [
                    "Installs a package globally",
                    "Installs a package locally",
                    "Updates a package",
                    "Removes a package"
                    ],
                    answer: "Installs a package globally"
                },
                {
                    question: "What does the 'require' function return?",
                    options: [
                    "Always an object",
                    "Exports of the required module",
                    "A promise",
                    "Undefined"
                    ],
                    answer: "Exports of the required module"
                },
                {
                    question: "Which of the following can improve Node.js performance?",
                    options: [
                    "Using clustering and caching",
                    "Using only synchronous code",
                    "Disabling the event loop",
                    "Avoiding async/await"
                    ],
                    answer: "Using clustering and caching"
                },
                {
                    question: "Which module is used to parse URL strings in Node.js?",
                    options: [
                    "url",
                    "path",
                    "fs",
                    "querystring"
                    ],
                    answer: "url"
                },
                {
                    question: "What is the role of middleware in Express.js?",
                    options: [
                    "To handle requests before reaching the route handler",
                    "To manage database connections",
                    "To create API documentation",
                    "To run cron jobs"
                    ],
                    answer: "To handle requests before reaching the route handler"
                },
                {
                    question: "Which event is emitted when a Node.js process exits?",
                    options: [
                    "exit",
                    "close",
                    "stop",
                    "end"
                    ],
                    answer: "exit"
                },
                {
                    question: "What does 'buffer' represent in Node.js?",
                    options: [
                    "A temporary memory for binary data",
                    "A cache for HTTP responses",
                    "A storage for cookies",
                    "An error log file"
                    ],
                    answer: "A temporary memory for binary data"
                },
                {
                    question: "Which statement about Node.js streams is correct?",
                    options: [
                    "Streams handle continuous data flow efficiently",
                    "Streams block I/O",
                    "Streams can only read data",
                    "Streams don’t support events"
                    ],
                    answer: "Streams handle continuous data flow efficiently"
                }
                ],
            'Python': [
                // 🟢 EASY (1–10)
                {
                    question: "Who developed Python programming language?",
                    options: [
                    "Dennis Ritchie",
                    "Guido van Rossum",
                    "James Gosling",
                    "Bjarne Stroustrup"
                    ],
                    answer: "Guido van Rossum"
                },
                {
                    question: "What type of programming language is Python?",
                    options: [
                    "Compiled",
                    "Interpreted",
                    "Assembly",
                    "Markup"
                    ],
                    answer: "Interpreted"
                },
                {
                    question: "Which symbol is used for comments in Python?",
                    options: [
                    "//",
                    "/* */",
                    "#",
                    "<!-- -->"
                    ],
                    answer: "#"
                },
                {
                    question: "What is the correct file extension for Python files?",
                    options: [
                    ".py",
                    ".pt",
                    ".p",
                    ".python"
                    ],
                    answer: ".py"
                },
                {
                    question: "How do you output text in Python?",
                    options: [
                    "print()",
                    "echo()",
                    "printf()",
                    "output()"
                    ],
                    answer: "print()"
                },
                {
                    question: "Which keyword is used to define a function in Python?",
                    options: [
                    "func",
                    "function",
                    "def",
                    "define"
                    ],
                    answer: "def"
                },
                {
                    question: "How do you start a conditional statement in Python?",
                    options: [
                    "if condition:",
                    "if (condition)",
                    "if {condition}",
                    "if condition then"
                    ],
                    answer: "if condition:"
                },
                {
                    question: "Which data type is mutable in Python?",
                    options: [
                    "tuple",
                    "list",
                    "string",
                    "int"
                    ],
                    answer: "list"
                },
                {
                    question: "Which of these is used to create a list?",
                    options: [
                    "()",
                    "[]",
                    "{}",
                    "<>"
                    ],
                    answer: "[]"
                },
                {
                    question: "How do you insert comments in Python?",
                    options: [
                    "# This is a comment",
                    "// This is a comment",
                    "/* This is a comment */",
                    "-- This is a comment"
                    ],
                    answer: "# This is a comment"
                },

                // 🟡 MEDIUM (11–20)
                {
                    question: "Which method is used to add an element to a list?",
                    options: [
                    "list.append()",
                    "list.add()",
                    "list.insert()",
                    "list.push()"
                    ],
                    answer: "list.append()"
                },
                {
                    question: "Which function returns the length of an object?",
                    options: [
                    "length()",
                    "count()",
                    "len()",
                    "size()"
                    ],
                    answer: "len()"
                },
                {
                    question: "How do you start a for loop in Python?",
                    options: [
                    "for x in y:",
                    "for(x in y)",
                    "foreach x in y",
                    "loop x in y"
                    ],
                    answer: "for x in y:"
                },
                {
                    question: "Which keyword is used to handle exceptions in Python?",
                    options: [
                    "error",
                    "try",
                    "catch",
                    "except"
                    ],
                    answer: "except"
                },
                {
                    question: "What will 'type([])' return?",
                    options: [
                    "<class 'list'>",
                    "<class 'tuple'>",
                    "<class 'dict'>",
                    "<class 'set'>"
                    ],
                    answer: "<class 'list'>"
                },
                {
                    question: "Which operator is used for exponentiation in Python?",
                    options: [
                    "^",
                    "**",
                    "exp",
                    "pow"
                    ],
                    answer: "**"
                },
                {
                    question: "Which function converts a string to lowercase?",
                    options: [
                    "str.lower()",
                    "str.down()",
                    "str.small()",
                    "str.lowercase()"
                    ],
                    answer: "str.lower()"
                },
                {
                    question: "What will 'bool(0)' return?",
                    options: [
                    "True",
                    "False",
                    "None",
                    "Error"
                    ],
                    answer: "False"
                },
                {
                    question: "Which of the following is an immutable data type?",
                    options: [
                    "List",
                    "Set",
                    "Tuple",
                    "Dictionary"
                    ],
                    answer: "Tuple"
                },
                {
                    question: "How do you remove whitespace from the beginning and end of a string?",
                    options: [
                    "strip()",
                    "trim()",
                    "cut()",
                    "remove()"
                    ],
                    answer: "strip()"
                },

                // 🔴 HARD (21–30)
                {
                    question: "What will be the output of: print(2 ** 3 ** 2)?",
                    options: [
                    "64",
                    "512",
                    "256",
                    "8"
                    ],
                    answer: "512"
                },
                {
                    question: "Which of these is used to define a class in Python?",
                    options: [
                    "class",
                    "defclass",
                    "object",
                    "cls"
                    ],
                    answer: "class"
                },
                {
                    question: "What is the output of: len({'a':1, 'b':2, 'c':3})?",
                    options: [
                    "3",
                    "6",
                    "2",
                    "1"
                    ],
                    answer: "3"
                },
                {
                    question: "What does the 'self' keyword represent in a class?",
                    options: [
                    "It represents the current instance of the class",
                    "It is a reserved variable for static methods",
                    "It refers to the parent class",
                    "It defines a global variable"
                    ],
                    answer: "It represents the current instance of the class"
                },
                {
                    question: "Which module in Python is used to work with regular expressions?",
                    options: [
                    "regex",
                    "pyregex",
                    "re",
                    "match"
                    ],
                    answer: "re"
                },
                {
                    question: "Which of the following statements is true about Python dictionaries?",
                    options: [
                    "They are ordered and mutable",
                    "They are unordered and immutable",
                    "They are ordered and immutable",
                    "They are unordered and mutable"
                    ],
                    answer: "They are unordered and mutable"
                },
                {
                    question: "What is the output of: list(range(2,10,2))?",
                    options: [
                    "[2, 4, 6, 8]",
                    "[2, 3, 4, 5, 6, 7, 8, 9]",
                    "[2, 10, 2]",
                    "[4, 6, 8, 10]"
                    ],
                    answer: "[2, 4, 6, 8]"
                },
                {
                    question: "What is the correct syntax for a lambda function?",
                    options: [
                    "lambda x: x + 1",
                    "function(x) => x + 1",
                    "def lambda(x): x + 1",
                    "lambda(x) = x + 1"
                    ],
                    answer: "lambda x: x + 1"
                },
                {
                    question: "Which built-in function is used to get the absolute value of a number?",
                    options: [
                    "abs()",
                    "absolute()",
                    "fabs()",
                    "num.abs()"
                    ],
                    answer: "abs()"
                },
                {
                    question: "Which of the following is used to handle multiple exceptions?",
                    options: [
                    "except (Error1, Error2):",
                    "try Error1, Error2:",
                    "catch Error1, Error2:",
                    "handle Error1 Error2"
                    ],
                    answer: "except (Error1, Error2):"
                },
                {
                    question: "What is the output of: print(bool('False'))?",
                    options: [
                    "False",
                    "True",
                    "None",
                    "Error"
                    ],
                    answer: "True"
                },
                {
                    question: "Which of the following creates a generator in Python?",
                    options: [
                    "Using yield keyword",
                    "Using return keyword",
                    "Using def keyword only",
                    "Using generator() function"
                    ],
                    answer: "Using yield keyword"
                },
                {
                    question: "Which module is used to work with JSON data in Python?",
                    options: [
                    "json",
                    "pickle",
                    "data",
                    "serialization"
                    ],
                    answer: "json"
                },
                {
                    question: "Which method is called when an object is created?",
                    options: [
                    "__init__()",
                    "__create__()",
                    "constructor()",
                    "__object__()"
                    ],
                    answer: "__init__()"
                },
                {
                    question: "Which of these statements about Python is true?",
                    options: [
                    "Python uses indentation to define code blocks",
                    "Python uses semicolons to end statements",
                    "Python does not support object-oriented programming",
                    "Python cannot handle exceptions"
                    ],
                    answer: "Python uses indentation to define code blocks"
                }
                ],
            'Django':[
                                {
                    question: "What is Django?",
                    options: [
                        "A JavaScript framework",
                        "A Python web framework",
                        "A CSS library",
                        "A database system"
                    ],
                    answer: "A Python web framework"
                },
                {
                    question: "Which design pattern does Django follow?",
                    options: [
                        "MVC (Model View Controller)",
                        "MVVM (Model View ViewModel)",
                        "MVT (Model View Template)",
                        "MVP (Model View Presenter)"
                    ],
                    answer: "MVT (Model View Template)"
                },
                {
                    question: "Which command is used to start a new Django project?",
                    options: [
                        "django-admin startproject",
                        "django-admin startapp",
                        "django startproject",
                        "django createproject"
                    ],
                    answer: "django-admin startproject"
                },
                {
                    question: "Which file in a Django project contains database settings?",
                    options: [
                        "models.py",
                        "urls.py",
                        "settings.py",
                        "views.py"
                    ],
                    answer: "settings.py"
                },
                {
                    question: "What is the default database used in Django?",
                    options: [
                        "MySQL",
                        "PostgreSQL",
                        "SQLite",
                        "Oracle"
                    ],
                    answer: "SQLite"
                },
                {
                    question: "Which command is used to create a new app in Django?",
                    options: [
                        "django createapp",
                        "python manage.py startapp",
                        "python manage.py createapp",
                        "django-admin newapp"
                    ],
                    answer: "python manage.py startapp"
                },
                {
                    question: "Which file defines URL routing in Django?",
                    options: [
                        "models.py",
                        "urls.py",
                        "views.py",
                        "settings.py"
                    ],
                    answer: "urls.py"
                },
                {
                    question: "What is a model in Django?",
                    options: [
                        "A database table structure",
                        "A frontend component",
                        "A routing system",
                        "A template file"
                    ],
                    answer: "A database table structure"
                },
                {
                    question: "Which command applies database migrations?",
                    options: [
                        "python manage.py migrate",
                        "python manage.py makemigrations",
                        "python manage.py apply",
                        "python manage.py runmigrate"
                    ],
                    answer: "python manage.py migrate"
                },
                {
                    question: "What is the purpose of `makemigrations` command?",
                    options: [
                        "To create migration files",
                        "To delete models",
                        "To apply changes to database",
                        "To start the server"
                    ],
                    answer: "To create migration files"
                },
                {
                    question: "Which Django file stores app configuration?",
                    options: [
                        "__init__.py",
                        "apps.py",
                        "models.py",
                        "manage.py"
                    ],
                    answer: "apps.py"
                },
                {
                    question: "Which function is used to render HTML templates in Django views?",
                    options: [
                        "render_template()",
                        "template()",
                        "render()",
                        "load_template()"
                    ],
                    answer: "render()"
                },
                {
                    question: "Which Django command starts the local development server?",
                    options: [
                        "python manage.py startserver",
                        "python manage.py runserver",
                        "django-admin startserver",
                        "python runserver.py"
                    ],
                    answer: "python manage.py runserver"
                },
                {
                    question: "What is a Django template?",
                    options: [
                        "A Python class",
                        "An HTML file with dynamic content",
                        "A database model",
                        "A CSS stylesheet"
                    ],
                    answer: "An HTML file with dynamic content"
                },
                {
                    question: "How do you register a model in the Django admin?",
                    options: [
                        "By adding it in views.py",
                        "By creating a model form",
                        "By registering it in admin.py",
                        "By editing settings.py"
                    ],
                    answer: "By registering it in admin.py"
                },
                {
                    question: "Which decorator is used to restrict access to logged-in users only?",
                    options: [
                        "@login_required",
                        "@authenticated_user",
                        "@require_login",
                        "@check_user"
                    ],
                    answer: "@login_required"
                },
                {
                    question: "What is the purpose of middleware in Django?",
                    options: [
                        "To modify requests/responses globally",
                        "To define models",
                        "To serve static files",
                        "To manage database connections"
                    ],
                    answer: "To modify requests/responses globally"
                },
                {
                    question: "Where are Django templates typically stored?",
                    options: [
                        "In the static directory",
                        "In the templates directory",
                        "In the models directory",
                        "In the root folder"
                    ],
                    answer: "In the templates directory"
                },
                {
                    question: "What does the Django ORM do?",
                    options: [
                        "Connects Django to JavaScript",
                        "Maps Python objects to database tables",
                        "Compiles CSS files",
                        "Handles URL routing"
                    ],
                    answer: "Maps Python objects to database tables"
                },
                {
                    question: "Which command creates a superuser in Django?",
                    options: [
                        "python manage.py admin",
                        "python manage.py createsuperuser",
                        "python manage.py makeadmin",
                        "django-admin superuser"
                    ],
                    answer: "python manage.py createsuperuser"
                },
                {
                    question: "What is `manage.py` used for?",
                    options: [
                        "To control app settings",
                        "To manage Django project commands",
                        "To define URL patterns",
                        "To compile templates"
                    ],
                    answer: "To manage Django project commands"
                },
                {
                    question: "Which file defines database models?",
                    options: [
                        "models.py",
                        "views.py",
                        "urls.py",
                        "admin.py"
                    ],
                    answer: "models.py"
                },
                {
                    question: "What is a Django view?",
                    options: [
                        "A database schema",
                        "A function or class that handles HTTP requests",
                        "An HTML page",
                        "A static file"
                    ],
                    answer: "A function or class that handles HTTP requests"
                },
                {
                    question: "What is the default port of Django development server?",
                    options: [
                        "5000",
                        "8080",
                        "8000",
                        "3000"
                    ],
                    answer: "8000"
                },
                {
                    question: "What does CSRF stand for in Django?",
                    options: [
                        "Cross Site Request Forgery",
                        "Cross Script Resource File",
                        "Client Side Request Framework",
                        "Content Security Request Format"
                    ],
                    answer: "Cross Site Request Forgery"
                },
                {
                    question: "Which command is used to collect static files?",
                    options: [
                        "python manage.py collectstatic",
                        "python manage.py static",
                        "django-admin getstatic",
                        "python manage.py makestatic"
                    ],
                    answer: "python manage.py collectstatic"
                },
                {
                    question: "What is a QuerySet in Django?",
                    options: [
                        "A list of HTML templates",
                        "A collection of database queries",
                        "A list of model instances from the database",
                        "A middleware component"
                    ],
                    answer: "A list of model instances from the database"
                },
                {
                    question: "Which function is used to redirect users to another URL?",
                    options: [
                        "redirect()",
                        "go_to()",
                        "navigate()",
                        "send_to()"
                    ],
                    answer: "redirect()"
                },
                {
                    question: "What file defines URL patterns at the project level?",
                    options: [
                        "urls.py inside project folder",
                        "views.py inside app folder",
                        "models.py",
                        "admin.py"
                    ],
                    answer: "urls.py inside project folder"
                },
                {
                    question: "What is Django REST framework used for?",
                    options: [
                        "Creating APIs",
                        "Designing templates",
                        "Managing static files",
                        "Creating models"
                    ],
                    answer: "Creating APIs"
                }

                ] ,   
            'History':[{
                question: "Who was the first President of the United States?",
                options: [
                    "Thomas Jefferson",
                    "George Washington",
                    "Abraham Lincoln",
                    "John Adams"
                ],
                answer: "George Washington"
            },
            {
                question: "In which year did World War I begin?",
                options: [
                    "1914",
                    "1918",
                    "1939",
                    "1920"
                ],
                answer: "1914"
            },
            {
                question: "Who discovered America in 1492?",
                options: [
                    "Vasco da Gama",
                    "Christopher Columbus",
                    "Ferdinand Magellan",
                    "Marco Polo"
                ],
                answer: "Christopher Columbus"
            },
            {
                question: "Who was known as the Iron Man of India?",
                options: [
                    "Mahatma Gandhi",
                    "Sardar Vallabhbhai Patel",
                    "Jawaharlal Nehru",
                    "Subhas Chandra Bose"
                ],
                answer: "Sardar Vallabhbhai Patel"
            },
            {
                question: "Who was the founder of the Mughal Empire in India?",
                options: [
                    "Akbar",
                    "Babur",
                    "Humayun",
                    "Aurangzeb"
                ],
                answer: "Babur"
            },
            {
                question: "In which year did India get independence?",
                options: [
                    "1942",
                    "1945",
                    "1947",
                    "1950"
                ],
                answer: "1947"
            },
            {
                question: "Who wrote the Indian National Anthem?",
                options: [
                    "Rabindranath Tagore",
                    "Bankim Chandra Chatterjee",
                    "Sarojini Naidu",
                    "Mahatma Gandhi"
                ],
                answer: "Rabindranath Tagore"
            },
            {
                question: "Who was the first Prime Minister of independent India?",
                options: [
                    "Sardar Patel",
                    "Mahatma Gandhi",
                    "Jawaharlal Nehru",
                    "Rajendra Prasad"
                ],
                answer: "Jawaharlal Nehru"
            },
            {
                question: "Where did the Industrial Revolution begin?",
                options: [
                    "France",
                    "Germany",
                    "Britain",
                    "USA"
                ],
                answer: "Britain"
            },
            {
                question: "Who was the first woman to become Prime Minister of India?",
                options: [
                    "Sarojini Naidu",
                    "Indira Gandhi",
                    "Pratibha Patil",
                    "Sushma Swaraj"
                ],
                answer: "Indira Gandhi"
            },
            {
                question: "Which Indian leader gave the slogan 'Do or Die'?",
                options: [
                    "Bhagat Singh",
                    "Subhas Chandra Bose",
                    "Mahatma Gandhi",
                    "Jawaharlal Nehru"
                ],
                answer: "Mahatma Gandhi"
            },
            {
                question: "Who was the first Emperor of China?",
                options: [
                    "Kublai Khan",
                    "Qin Shi Huang",
                    "Sun Yat-sen",
                    "Confucius"
                ],
                answer: "Qin Shi Huang"
            },
            {
                question: "Who invented the printing press?",
                options: [
                    "Galileo Galilei",
                    "Johannes Gutenberg",
                    "Leonardo da Vinci",
                    "Isaac Newton"
                ],
                answer: "Johannes Gutenberg"
            },
            {
                question: "Which ancient civilization built the pyramids?",
                options: [
                    "Greek",
                    "Roman",
                    "Egyptian",
                    "Mayan"
                ],
                answer: "Egyptian"
            },
            {
                question: "When did World War II end?",
                options: [
                    "1942",
                    "1945",
                    "1947",
                    "1950"
                ],
                answer: "1945"
            },
            {
                question: "Who was the first man to walk on the Moon?",
                options: [
                    "Buzz Aldrin",
                    "Neil Armstrong",
                    "Yuri Gagarin",
                    "John Glenn"
                ],
                answer: "Neil Armstrong"
            },
            {
                question: "Who was the founder of Buddhism?",
                options: [
                    "Lord Vishnu",
                    "Gautama Buddha",
                    "Mahavira",
                    "Ashoka"
                ],
                answer: "Gautama Buddha"
            },
            {
                question: "Who was the last Mughal emperor of India?",
                options: [
                    "Bahadur Shah I",
                    "Aurangzeb",
                    "Bahadur Shah II",
                    "Shah Alam"
                ],
                answer: "Bahadur Shah II"
            },
            {
                question: "Who built the Taj Mahal?",
                options: [
                    "Akbar",
                    "Shah Jahan",
                    "Aurangzeb",
                    "Humayun"
                ],
                answer: "Shah Jahan"
            },
            {
                question: "When did the French Revolution begin?",
                options: [
                    "1776",
                    "1789",
                    "1800",
                    "1820"
                ],
                answer: "1789"
            },
            {
                question: "Who was the father of the Indian Constitution?",
                options: [
                    "Mahatma Gandhi",
                    "B. R. Ambedkar",
                    "Sardar Patel",
                    "Rajendra Prasad"
                ],
                answer: "B. R. Ambedkar"
            },
            {
                question: "Which war was fought between the North and South regions of the USA?",
                options: [
                    "Civil War",
                    "World War I",
                    "Revolutionary War",
                    "Vietnam War"
                ],
                answer: "Civil War"
            },
            {
                question: "Who discovered the sea route to India?",
                options: [
                    "Christopher Columbus",
                    "Ferdinand Magellan",
                    "Vasco da Gama",
                    "Marco Polo"
                ],
                answer: "Vasco da Gama"
            },
            {
                question: "Who was known as the 'Napoleon of India'?",
                options: [
                    "Ashoka",
                    "Chandragupta Maurya",
                    "Samudragupta",
                    "Harsha"
                ],
                answer: "Samudragupta"
            },
            {
                question: "Who was the first female ruler of Delhi?",
                options: [
                    "Razia Sultana",
                    "Nur Jahan",
                    "Jhansi Rani",
                    "Ahilyabai Holkar"
                ],
                answer: "Razia Sultana"
            },
            {
                question: "Who was the founder of the Maurya Empire?",
                options: [
                    "Ashoka",
                    "Bindusara",
                    "Chandragupta Maurya",
                    "Chanakya"
                ],
                answer: "Chandragupta Maurya"
            },
            {
                question: "Who gave the slogan 'Jai Hind'?",
                options: [
                    "Bhagat Singh",
                    "Subhas Chandra Bose",
                    "Mahatma Gandhi",
                    "Bal Gangadhar Tilak"
                ],
                answer: "Subhas Chandra Bose"
            },
            {
                question: "When was the United Nations founded?",
                options: [
                    "1942",
                    "1945",
                    "1950",
                    "1960"
                ],
                answer: "1945"
            },
            {
                question: "Who was known as the 'Father of the Nation' in India?",
                options: [
                    "B. R. Ambedkar",
                    "Sardar Patel",
                    "Mahatma Gandhi",
                    "Jawaharlal Nehru"
                ],
                answer: "Mahatma Gandhi"
            },
            {
                question: "Who led the Salt March in 1930?",
                options: [
                    "Jawaharlal Nehru",
                    "Mahatma Gandhi",
                    "Subhas Chandra Bose",
                    "Sardar Patel"
                ],
                answer: "Mahatma Gandhi"
            },
            {
                question: "Who was the first Emperor of the Mauryan Dynasty?",
                options: [
                    "Ashoka",
                    "Chandragupta Maurya",
                    "Bindusara",
                    "Harsha"
                ],
                answer: "Chandragupta Maurya"
            },
            {
                question: "Which empire was ruled by Akbar the Great?",
                options: [
                    "Maurya Empire",
                    "Mughal Empire",
                    "Gupta Empire",
                    "Chola Empire"
                ],
                answer: "Mughal Empire"
            },
            {
                question: "Who discovered the sea route from Europe to America?",
                options: [
                    "Christopher Columbus",
                    "Vasco da Gama",
                    "Magellan",
                    "Marco Polo"
                ],
                answer: "Christopher Columbus"
            },
            {
                question: "When did the Revolt of 1857 take place in India?",
                options: [
                    "1848",
                    "1857",
                    "1869",
                    "1875"
                ],
                answer: "1857"
            },
            {
                question: "Who was the founder of the Gupta Empire?",
                options: [
                    "Samudragupta",
                    "Chandragupta I",
                    "Vikramaditya",
                    "Skandagupta"
                ],
                answer: "Chandragupta I"
            },
            {
                question: "Which country was ruled by Adolf Hitler?",
                options: [
                    "France",
                    "Germany",
                    "Italy",
                    "Russia"
                ],
                answer: "Germany"
            },
            {
                question: "When did India become a republic?",
                options: [
                    "1947",
                    "1948",
                    "1950",
                    "1952"
                ],
                answer: "1950"
            },
            {
                question: "Who was the first woman to rule ancient Egypt?",
                options: [
                    "Nefertiti",
                    "Cleopatra",
                    "Hatshepsut",
                    "Tiye"
                ],
                answer: "Hatshepsut"
            },
            {
                question: "Who was the famous Greek philosopher who taught Alexander the Great?",
                options: [
                    "Socrates",
                    "Plato",
                    "Aristotle",
                    "Herodotus"
                ],
                answer: "Aristotle"
            },
            {
                question: "Which country gifted the Statue of Liberty to the USA?",
                options: [
                    "France",
                    "Britain",
                    "Germany",
                    "Italy"
                ],
                answer: "France"
            },
            {
                question: "When did the Berlin Wall fall?",
                options: [
                    "1987",
                    "1989",
                    "1991",
                    "1995"
                ],
                answer: "1989"
            }
            ],
            'DSA':[{
                question: "What does DSA stand for?",
                options: [
                    "Data Science Applications",
                    "Data Structures and Algorithms",
                    "Digital System Architecture",
                    "Dynamic Storage Allocation"
                ],
                answer: "Data Structures and Algorithms"
            },
            {
                question: "Which data structure uses LIFO order?",
                options: [
                    "Queue",
                    "Stack",
                    "Array",
                    "Tree"
                ],
                answer: "Stack"
            },
            {
                question: "Which data structure uses FIFO order?",
                options: [
                    "Stack",
                    "Queue",
                    "Heap",
                    "Graph"
                ],
                answer: "Queue"
            },
            {
                question: "Which of the following is a linear data structure?",
                options: [
                    "Graph",
                    "Tree",
                    "Stack",
                    "Hash Table"
                ],
                answer: "Stack"
            },
            {
                question: "Which data structure is used for recursion?",
                options: [
                    "Array",
                    "Stack",
                    "Queue",
                    "Linked List"
                ],
                answer: "Stack"
            },
            {
                question: "Which data structure allows random access of elements?",
                options: [
                    "Linked List",
                    "Stack",
                    "Array",
                    "Queue"
                ],
                answer: "Array"
            },
            {
                question: "What is the time complexity of binary search in a sorted array?",
                options: [
                    "O(n)",
                    "O(log n)",
                    "O(n log n)",
                    "O(1)"
                ],
                answer: "O(log n)"
            },
            {
                question: "Which sorting algorithm has the best average case performance?",
                options: [
                    "Bubble Sort",
                    "Selection Sort",
                    "Merge Sort",
                    "Insertion Sort"
                ],
                answer: "Merge Sort"
            },
            {
                question: "Which algorithm is used to find the shortest path in a graph?",
                options: [
                    "Depth First Search",
                    "Breadth First Search",
                    "Dijkstra’s Algorithm",
                    "Kruskal’s Algorithm"
                ],
                answer: "Dijkstra’s Algorithm"
            },
            {
                question: "Which data structure is used to implement a priority queue?",
                options: [
                    "Array",
                    "Linked List",
                    "Heap",
                    "Stack"
                ],
                answer: "Heap"
            },
            {
                question: "Which traversal technique is used in Depth First Search?",
                options: [
                    "Level Order",
                    "Breadth-wise",
                    "Depth-wise",
                    "Random"
                ],
                answer: "Depth-wise"
            },
            {
                question: "Which traversal technique is used in Breadth First Search?",
                options: [
                    "Depth-wise",
                    "Inorder",
                    "Level Order",
                    "Preorder"
                ],
                answer: "Level Order"
            },
            {
                question: "In a binary tree, each node has at most how many children?",
                options: [
                    "One",
                    "Two",
                    "Three",
                    "Four"
                ],
                answer: "Two"
            },
            {
                question: "What is the space complexity of recursive Fibonacci function?",
                options: [
                    "O(n)",
                    "O(log n)",
                    "O(1)",
                    "O(2^n)"
                ],
                answer: "O(n)"
            },
            {
                question: "Which of the following is NOT a stable sorting algorithm?",
                options: [
                    "Merge Sort",
                    "Bubble Sort",
                    "Selection Sort",
                    "Insertion Sort"
                ],
                answer: "Selection Sort"
            },
            {
                question: "What is the worst-case time complexity of Quick Sort?",
                options: [
                    "O(n^2)",
                    "O(n log n)",
                    "O(log n)",
                    "O(n)"
                ],
                answer: "O(n^2)"
            },
            {
                question: "Which data structure is best suited for implementing undo operations?",
                options: [
                    "Queue",
                    "Stack",
                    "Array",
                    "Heap"
                ],
                answer: "Stack"
            },
            {
                question: "Which of the following is a non-linear data structure?",
                options: [
                    "Stack",
                    "Queue",
                    "Tree",
                    "Array"
                ],
                answer: "Tree"
            },
            {
                question: "Which algorithm is used to detect cycles in a graph?",
                options: [
                    "Prim’s Algorithm",
                    "Floyd’s Cycle Detection Algorithm",
                    "Kruskal’s Algorithm",
                    "Dijkstra’s Algorithm"
                ],
                answer: "Floyd’s Cycle Detection Algorithm"
            },
            {
                question: "Which traversal of binary search tree gives sorted output?",
                options: [
                    "Preorder",
                    "Inorder",
                    "Postorder",
                    "Level Order"
                ],
                answer: "Inorder"
            },
            {
                question: "What is the auxiliary space complexity of Merge Sort?",
                options: [
                    "O(1)",
                    "O(log n)",
                    "O(n)",
                    "O(n^2)"
                ],
                answer: "O(n)"
            },
            {
                question: "Which data structure is used for backtracking algorithms?",
                options: [
                    "Queue",
                    "Stack",
                    "Linked List",
                    "Array"
                ],
                answer: "Stack"
            },
            {
                question: "Which of the following operations has O(1) complexity in HashMap?",
                options: [
                    "Insertion",
                    "Traversal",
                    "Sorting",
                    "Searching in array"
                ],
                answer: "Insertion"
            },
            {
                question: "Which algorithm technique does Merge Sort use?",
                options: [
                    "Dynamic Programming",
                    "Divide and Conquer",
                    "Greedy",
                    "Backtracking"
                ],
                answer: "Divide and Conquer"
            },
            {
                question: "What is the height of a balanced binary tree with n nodes?",
                options: [
                    "O(1)",
                    "O(n)",
                    "O(log n)",
                    "O(n log n)"
                ],
                answer: "O(log n)"
            },
            {
                question: "Which algorithm finds Minimum Spanning Tree?",
                options: [
                    "Kruskal’s and Prim’s",
                    "Dijkstra’s and Bellman-Ford",
                    "DFS and BFS",
                    "Merge and Quick Sort"
                ],
                answer: "Kruskal’s and Prim’s"
            },
            {
                question: "In Big-O notation, O(1) means?",
                options: [
                    "Constant time",
                    "Linear time",
                    "Logarithmic time",
                    "Quadratic time"
                ],
                answer: "Constant time"
            },
            {
                question: "Which of these algorithms uses dynamic programming?",
                options: [
                    "Dijkstra’s Algorithm",
                    "Floyd-Warshall Algorithm",
                    "Prim’s Algorithm",
                    "Kruskal’s Algorithm"
                ],
                answer: "Floyd-Warshall Algorithm"
            },
            {
                question: "Which data structure uses pointers to connect nodes?",
                options: [
                    "Array",
                    "Linked List",
                    "Queue",
                    "Stack"
                ],
                answer: "Linked List"
            },
            {
                question: "Which searching algorithm works on sorted data only?",
                options: [
                    "Linear Search",
                    "Binary Search",
                    "Depth First Search",
                    "Breadth First Search"
                ],
                answer: "Binary Search"
            }
            ]
        };
        
        // --- APPLICATION STATE & CONSTANTS ---
        const QUIZ_DURATION_MINUTES = 15; // 5 minutes (300 seconds) for 30 questions
        const TOTAL_QUESTIONS = 30;

        let currentCategory = '';
        let questions = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let timerInterval;
        let timeLeft = QUIZ_DURATION_MINUTES * 60; // seconds
        let startTime;

        // --- DOM REFERENCES ---
        const categoryScreen = document.getElementById('category-screen');
        const quizScreen = document.getElementById('quiz-screen');
        const resultScreen = document.getElementById('result-screen');
        const categoryList = document.getElementById('category-list');
        const quizTitle = document.getElementById('quiz-title');
        const questionCounter = document.getElementById('question-counter');
        const timerDisplay = document.getElementById('timer');
        const questionContent = document.getElementById('question-content');
        const optionsContainer = document.getElementById('options-container');
        const nextButton = document.getElementById('next-button');
        const messageBox = document.getElementById('message-box');
        const pdfContentContainer = document.getElementById('pdf-content-container');
        
        // --- UTILITY FUNCTIONS ---

        function showMessage(text, isError = false) {
            messageBox.textContent = text;
            messageBox.classList.remove('hidden');
            if (isError) {
                messageBox.classList.remove('text-yellow-800', 'bg-yellow-50');
                messageBox.classList.add('text-red-800', 'bg-red-50');
            } else {
                messageBox.classList.remove('text-red-800', 'bg-red-50');
                messageBox.classList.add('text-yellow-800', 'bg-yellow-50');
            }
            setTimeout(() => {
                messageBox.classList.add('hidden');
            }, 3000);
        }

        // Fisher-Yates shuffle algorithm
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            const pad = (num) => String(num).padStart(2, '0');
            return `${pad(minutes)}:${pad(remainingSeconds)}`;
        }

        // --- QUIZ FLOW FUNCTIONS ---

        // 1. Initialize Category Screen
        function loadCategories() {
            categoryList.innerHTML = '';
            Object.keys(quizData).forEach(category => {
                const button = document.createElement('button');
                button.textContent = category;
                button.classList.add(
                    'bg-white', 'border', 'border-indigo-200', 'text-indigo-600', 'hover:bg-indigo-100', 'font-semibold',
                    'py-4', 'px-6', 'rounded-lg', 'shadow-md', 'transition', 'duration-150', 'ease-in-out',
                    'transform', 'hover:scale-105', 'active:scale-95'
                );
                button.onclick = () => startQuiz(category);
                categoryList.appendChild(button);
            });
        }

        // 2. Start Quiz from selected category
        function startQuiz(category) {
            currentCategory = category;
            
            // Check if there are enough questions (at least 5 for a functional demo)
            if (quizData[category].length < 5) {
                showMessage(`Error: Not enough questions in the '${category}' category. Please add more.`, true);
                return;
            }

            // Shuffle all available questions and select the first TOTAL_QUESTIONS (30)
            let categoryQuestions = [...quizData[category]];
            shuffleArray(categoryQuestions);
            questions = categoryQuestions.slice(0, TOTAL_QUESTIONS);

            currentQuestionIndex = 0;
            score = 0;
            timeLeft = QUIZ_DURATION_MINUTES * 60;
            startTime = Date.now();
            
            // UI state transition
            categoryScreen.classList.add('hidden');
            resultScreen.classList.add('hidden');
            quizScreen.classList.remove('hidden');

            quizTitle.textContent = currentCategory;
            nextButton.textContent = 'Next Question';
            nextButton.disabled = true;

            startTimer();
            loadQuestion();
        }

        // 3. Timer Logic
        function startTimer() {
            clearInterval(timerInterval);
            timerDisplay.textContent = formatTime(timeLeft);
            
            timerInterval = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = formatTime(timeLeft);
                
                if (timeLeft <= 30 && timeLeft > 0) {
                    timerDisplay.classList.remove('text-red-600');
                    timerDisplay.classList.add('text-orange-600');
                } else if (timeLeft <= 0) {
                    timerDisplay.classList.remove('text-orange-600');
                    timerDisplay.classList.add('text-red-600');
                    clearInterval(timerInterval);
                    endQuiz(true); // End quiz due to timeout
                }
            }, 1000);
        }

        // 4. Load Next Question
        function loadQuestion() {
            if (currentQuestionIndex >= questions.length || timeLeft <= 0) {
                endQuiz();
                return;
            }

            const q = questions[currentQuestionIndex];
            questionContent.textContent = q.question;
            questionCounter.textContent = `Q ${currentQuestionIndex + 1} / ${questions.length}`;
            optionsContainer.innerHTML = '';
            nextButton.disabled = true;

            // Prepare options and shuffle them
            const shuffledOptions = [...q.options];
            shuffleArray(shuffledOptions);

            shuffledOptions.forEach(option => {
                const optionButton = document.createElement('button');
                optionButton.textContent = option;
                optionButton.setAttribute('data-option', option);
                optionButton.classList.add(
                    'w-full', 'text-left', 'p-4', 'border', 'border-gray-200', 'rounded-lg', 'font-medium', 
                    'text-gray-700', 'bg-white', 'hover:bg-indigo-50', 'transition', 'duration-150', 'ease-in-out'
                );
                optionButton.onclick = (e) => handleAnswer(e.target, q.answer);
                optionsContainer.appendChild(optionButton);
            });
            
            // Check if it's the last question
            if (currentQuestionIndex === questions.length - 1) {
                nextButton.textContent = 'Finish Quiz';
            } else {
                nextButton.textContent = 'Next Question';
            }
        }

        // 5. Handle User Answer Selection
        function handleAnswer(selectedButton, correctAnswer) {
            // Disable all options after selection
            Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
            
            const selectedAnswer = selectedButton.getAttribute('data-option');
            const isCorrect = selectedAnswer === correctAnswer;

            // Store the user's selected answer and correctness for results/PDF
            questions[currentQuestionIndex].selectedAnswer = selectedAnswer;
            questions[currentQuestionIndex].isCorrect = isCorrect;

            // Apply visual feedback
            if (isCorrect) {
                selectedButton.classList.remove('hover:bg-indigo-50');
                selectedButton.classList.add('bg-green-100', 'border-green-500');
                score++;
            } else {
                selectedButton.classList.remove('hover:bg-indigo-50');
                selectedButton.classList.add('bg-red-100', 'border-red-500');
                // Highlight correct answer
                Array.from(optionsContainer.children).forEach(btn => {
                    if (btn.getAttribute('data-option') === correctAnswer) {
                        btn.classList.add('bg-green-200', 'border-green-600');
                    }
                });
            }

            nextButton.disabled = false;
        }

        // 6. Next Question Button Handler
        nextButton.addEventListener('click', () => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
            } else {
                endQuiz();
            }
        });

        // 7. End Quiz and Show Results
        function endQuiz(timedOut = false) {
            clearInterval(timerInterval);
            const endTime = Date.now();
            const totalDurationSeconds = Math.round((endTime - startTime) / 1000);
            
            quizScreen.classList.add('hidden');
            categoryScreen.classList.add('hidden');
            resultScreen.classList.remove('hidden');

            const correctCount = score;
            const incorrectCount = questions.length - score;
            const percentage = (score / questions.length) * 100;
            
            let message = '';
            if (timedOut) {
                message = "Time's up! The quiz has ended.";
                document.getElementById('final-score').classList.remove('text-green-600');
                document.getElementById('final-score').classList.add('text-red-600');
            } else if (percentage >= 80) {
                message = "Outstanding job! You have mastered this category.";
            } else if (percentage >= 50) {
                message = "Well done! A solid performance, keep practicing.";
            } else {
                message = "Good attempt! Review the material and try again.";
            }

            // Update Result Display
            document.getElementById('final-category').textContent = currentCategory;
            document.getElementById('final-score').textContent = score;
            document.getElementById('correct-count').textContent = correctCount;
            document.getElementById('incorrect-count').textContent = incorrectCount;
            document.getElementById('time-taken').textContent = `${totalDurationSeconds}s`;
            document.getElementById('result-message').textContent = message;

            // Revert color if not timed out
            if (!timedOut) {
                document.getElementById('final-score').classList.remove('text-red-600');
                document.getElementById('final-score').classList.add('text-green-600');
            }

            // Generate HTML content for the PDF
            generatePdfContent(totalDurationSeconds);
        }
        
      // 8. Prepare content for PDF download (ONLY RESULT PAGE)
function generatePdfContent(totalDurationSeconds) {
    const correctCount = score;
    const incorrectCount = questions.length - score;
    const percentage = (score / questions.length) * 100;
    let message = '';

    if (percentage >= 80) {
        message = "Outstanding job! You have mastered this category.";
    } else if (percentage >= 50) {
        message = "Well done! A solid performance, keep practicing.";
    } else {
        message = "Good attempt! Review the material and try again.";
    }

    let pdfHtml = `
        <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-xl" 
             style="font-family: 'Inter', sans-serif;">
            
            <h2 style="font-size: 28px; font-weight: bold; color: #16a34a; 
                       text-align: center; margin-bottom: 10px;">
                Quiz Result Summary
            </h2>
            
            <p style="font-size: 18px; text-align: center; color: #374151; margin-bottom: 20px;">
                Category: <strong>${currentCategory}</strong>
            </p>
            
            <div style="display: flex; justify-content: space-around; 
                        background-color: #f9fafb; border-radius: 10px; padding: 20px; 
                        margin-bottom: 24px;">
                
                <div style="text-align: center;">
                    <p style="font-size: 14px; color: #6b7280;">Final Score</p>
                    <p style="font-size: 32px; font-weight: bold; color: #16a34a;">
                        ${score} / ${questions.length}
                    </p>
                </div>

                <div style="text-align: center;">
                    <p style="font-size: 14px; color: #6b7280;">Correct Answers</p>
                    <p style="font-size: 28px; font-weight: bold; color: #10b981;">
                        ${correctCount}
                    </p>
                </div>

                <div style="text-align: center;">
                    <p style="font-size: 14px; color: #6b7280;">Incorrect Answers</p>
                    <p style="font-size: 28px; font-weight: bold; color: #ef4444;">
                        ${incorrectCount}
                    </p>
                </div>

                <div style="text-align: center;">
                    <p style="font-size: 14px; color: #6b7280;">Time Taken</p>
                    <p style="font-size: 28px; font-weight: bold; color: #3b82f6;">
                        ${totalDurationSeconds}s
                    </p>
                </div>
            </div>

            <p style="font-size: 16px; text-align: center; color: #374151; margin-top: 20px;">
                ${message}
            </p>

            <p style="text-align: center; margin-top: 30px; font-size: 12px; color: #9ca3af;">
                © ${new Date().getFullYear()} Quiz Report Generated Automatically
            </p>
        </div>
    `;

    pdfContentContainer.innerHTML = pdfHtml;
}

        // 9. Download PDF using jsPDF and html2canvas
        function downloadResultsPDF() {
            const { jsPDF } = window.jspdf;
            const element = document.getElementById('pdf-content-container');
            
            // Temporarily show the PDF content container for conversion
            element.style.display = 'block';

            html2canvas(element, { 
                scale: 2, // Improves quality
                useCORS: true 
            }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                
                // Add the image (of the result HTML) to the PDF
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save(`${currentCategory}_Quiz_Result.pdf`);

                // Hide the container again
                element.style.display = 'none';
                showMessage("PDF generated successfully!");

            }).catch(error => {
                element.style.display = 'none';
                console.error("PDF generation failed:", error);
                showMessage("PDF generation failed. Check console for details.", true);
            });
        }

        // 10. Start New Quiz (Return to Category Selection)
        function startNewQuiz() {
            // Clear any lingering state
            clearInterval(timerInterval);
            currentCategory = '';
            questions = [];
            currentQuestionIndex = 0;
            score = 0;
            timeLeft = QUIZ_DURATION_MINUTES * 60;
            
            // UI state transition
            quizScreen.classList.add('hidden');
            resultScreen.classList.add('hidden');
            categoryScreen.classList.remove('hidden');
            
            // Reset timer style
            timerDisplay.classList.remove('text-orange-600', 'text-red-600');
            timerDisplay.classList.add('text-red-600');

            loadCategories(); // Re-render categories
        }

        // --- INITIALIZATION ---
        window.onload = startNewQuiz; // Start on the category screen