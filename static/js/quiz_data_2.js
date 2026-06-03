const quizData2 = {
  "Web Development": {
    "HTML Fundamentals": [
      {
        question: "Which HTML element is the most semantically appropriate for wrapping a site\'s main navigation links?",
        options: [
          "<div id=\"navigation\">",
          "<nav>",
          "<header>",
          "<section>"
        ],
        correct: 1,
        explanation: "The <nav> element is the semantic HTML5 element specifically designed to wrap major navigation blocks, improving accessibility and SEO over a generic <div>."
      },
      {
        question: "What does adding the 'required' attribute to an <input> element inside a <form> do?",
        options: [
          "It styles the input with a red border by default",
          "It prevents the form from being submitted until the field has a value",
          "It automatically fills in a default value for the user",
          "It makes the input field read-only"
        ],
        correct: 1,
        explanation: "The 'required' attribute enables built-in browser validation that prevents form submission if the field is left empty, without needing any JavaScript."
      }
    ],
    "CSS & Layout Systems": [
      {
        question: "In the CSS box model, if an element has width: 200px, padding: 20px, and border: 5px solid black, what is its total rendered width by default (content-box)?",
        options: [
          "200px",
          "225px",
          "250px",
          "245px"
        ],
        correct: 2,
        explanation: "With the default content-box model, total width = content (200px) + left padding (20px) + right padding (20px) + left border (5px) + right border (5px) = 250px."
      },
      {
        question: "Which CSS property and value correctly centers all flex items both horizontally and vertically inside a flex container?",
        options: [
          "display: flex; text-align: center; vertical-align: middle;",
          "display: flex; justify-content: center; align-items: center;",
          "display: flex; margin: 0 auto; align-self: center;",
          "display: flex; float: center; position: middle;"
        ],
        correct: 1,
        explanation: "justify-content: center centers items along the main axis and align-items: center centers them along the cross axis, achieving full centering in a flex container."
      }
    ],
    "JavaScript Core Concepts": [
      {
        question: "What is the output of the following code?\n\nconst nums = [1, 2, 3, 4, 5];\nconst result = nums.filter(n => n > 2).map(n => n * 10);\nconsole.log(result);",
        options: [
          "[10, 20, 30, 40, 50]",
          "[30, 40, 50]",
          "[3, 4, 5]",
          "[1, 2, 30, 40, 50]"
        ],
        correct: 1,
        explanation: "filter(n => n > 2) produces [3, 4, 5], then map(n => n * 10) transforms each element, producing [30, 40, 50]."
      },
      {
        question: "What is the key difference between 'const' and 'let' in JavaScript?",
        options: [
          "'const' is function-scoped while 'let' is block-scoped",
          "'const' cannot be reassigned after initialization, while 'let' can be",
          "'const' variables are hoisted but 'let' variables are not",
          "'const' can only hold primitive values, not objects or arrays"
        ],
        correct: 1,
        explanation: "Both const and let are block-scoped, but const prevents reassignment of the binding. Note that const objects and arrays can still have their contents mutated — only the variable reference is immutable."
      }
    ],
    "DOM Manipulation & Events": [
      {
        question: "A developer attaches a single click handler to a <ul> element instead of to each <li> child. Which technique is this an example of?",
        options: [
          "Event capturing",
          "Event throttling",
          "Event delegation",
          "Event propagation"
        ],
        correct: 2,
        explanation: "Event delegation leverages event bubbling by placing a single listener on a parent element and using event.target to determine which child was clicked, improving performance and handling dynamically added items."
      },
      {
        question: "What is the difference between textContent and innerHTML when setting content on a DOM element?",
        options: [
          "textContent is faster but only works on <p> elements",
          "innerHTML sets plain text, while textContent can parse HTML tags",
          "textContent sets plain text safely, while innerHTML parses and renders HTML markup",
          "There is no functional difference; they are aliases of each other"
        ],
        correct: 2,
        explanation: "textContent treats the assigned string as plain text (safe from XSS), while innerHTML parses the string as HTML and renders any tags it contains, which can be a security risk with untrusted data."
      }
    ],
    "React Fundamentals": [
      {
        question: "Why does React require a unique 'key' prop when rendering a list of elements?",
        options: [
          "Keys are required for CSS styling of list items",
          "Keys help React efficiently identify which items changed, were added, or removed during re-renders",
          "Keys bind each list item to a specific state variable",
          "Keys are only needed for accessibility screen readers"
        ],
        correct: 1,
        explanation: "Keys give each element a stable identity so React\'s diffing algorithm can efficiently determine the minimal set of DOM updates needed when the list changes, rather than re-rendering the entire list."
      },
      {
        question: "What will happen if you call the state setter function from useState directly inside the component body without wrapping it in useEffect or an event handler?",
        options: [
          "The state will update once and stop",
          "Nothing happens — React ignores state updates outside of events",
          "It causes an infinite re-render loop, crashing the application",
          "It only updates the state on the first render"
        ],
        correct: 2,
        explanation: "Calling setState during render triggers a new render, which calls setState again, creating an infinite loop. Side effects and state updates should be placed inside useEffect or event handlers."
      }
    ],
    "Node.js & Express": [
      {
        question: "In an Express application, what is the purpose of calling next() inside a middleware function?",
        options: [
          "It sends the response back to the client",
          "It restarts the server",
          "It passes control to the next middleware function or route handler in the stack",
          "It skips all remaining middleware and goes to the error handler"
        ],
        correct: 2,
        explanation: "Calling next() tells Express to move on to the next middleware or route handler in the chain. Without it, the request will hang because no response is sent and no further processing occurs."
      },
      {
        question: "A route is defined as app.get('/users/:id', handler). If a request is made to /users/42, how do you access the value 42 inside the handler?",
        options: [
          "req.body.id",
          "req.query.id",
          "req.params.id",
          "req.headers.id"
        ],
        correct: 2,
        explanation: "Route parameters defined with the colon syntax (e.g., :id) are accessible via req.params. req.query holds query string values, and req.body holds parsed request body data."
      }
    ],
    "SQL & Databases": [
      {
        question: "Which type of SQL JOIN returns only the rows that have matching values in both tables?",
        options: [
          "LEFT JOIN",
          "RIGHT JOIN",
          "FULL OUTER JOIN",
          "INNER JOIN"
        ],
        correct: 3,
        explanation: "An INNER JOIN returns only the rows where the join condition is met in both tables, excluding rows from either table that have no corresponding match."
      },
      {
        question: "Why should you use parameterized queries instead of string concatenation when building SQL statements with user input?",
        options: [
          "Parameterized queries run faster because they skip query parsing",
          "String concatenation does not support WHERE clauses",
          "Parameterized queries prevent SQL injection by separating data from the SQL command structure",
          "Parameterized queries automatically create database indexes"
        ],
        correct: 2,
        explanation: "Parameterized queries treat user input strictly as data values, not executable SQL, which prevents attackers from injecting malicious SQL code through input fields."
      }
    ]
  },
  "Kotlin Android App Development": {
    "Kotlin Intro, Syntax & Variables": [
      {
        question: "What is the entry point of every Kotlin program?",
        options: [
          "fun main()",
          "fun entry()",
          "fun start()",
          "fun init()"
        ],
        correct: 0,
        explanation: "The main() function is the starting point of every Kotlin program and is required to execute any code."
      },
      {
        question: "What is the key difference between declaring a variable with 'val' vs 'var' in Kotlin?",
        options: [
          "val is mutable, var is immutable",
          "val is read-only (immutable), var is mutable",
          "val can only store integers, var can store any type",
          "There is no difference; they are interchangeable"
        ],
        correct: 1,
        explanation: "val creates a read-only (immutable) variable whose value cannot be reassigned, whereas var creates a mutable variable that can be changed later."
      }
    ],
    "Kotlin Data Types & Operators": [
      {
        question: "How does Kotlin handle type conversion between numeric types (e.g. Int to Double)?",
        options: [
          "It is automatically converted by the compiler (implicit conversion)",
          "It must be done explicitly using conversion functions like toDouble()",
          "It requires using the 'as' casting operator",
          "Kotlin does not allow conversion between different numeric types"
        ],
        correct: 1,
        explanation: "Kotlin does not support implicit widening conversions for numbers. You must explicitly call helper functions like toDouble(), toInt(), or toByte()."
      },
      {
        question: "What is the result of the modulus operator expression '5 % 2' in Kotlin?",
        options: [
          "2.5",
          "2",
          "1",
          "0"
        ],
        correct: 2,
        explanation: "The modulus operator (%) returns the remainder of the division of two numbers. 5 divided by 2 is 2 with a remainder of 1."
      }
    ],
    "Kotlin Strings & Control Flow": [
      {
        question: "What makes the 'if' construct in Kotlin different from Java or JavaScript?",
        options: [
          "It does not support else-if branches",
          "It is an expression that returns a value, meaning it can be assigned directly to a variable",
          "It cannot evaluate boolean conditions",
          "It is replaced entirely by the 'when' expression and is deprecated"
        ],
        correct: 1,
        explanation: "In Kotlin, if is an expression rather than just a statement. It returns a value from the branch that gets executed, eliminating the need for a ternary operator."
      },
      {
        question: "Which branch is used as the default fallback in a Kotlin 'when' expression?",
        options: [
          "default ->",
          "otherwise ->",
          "else ->",
          "fallback ->"
        ],
        correct: 2,
        explanation: "The 'else' branch is the default condition that executes when none of the other specified conditions in a 'when' expression match."
      }
    ],
    "Kotlin Loops & Arrays": [
      {
        question: "Which range expression is used to iterate backwards from 10 down to 1 in a for loop?",
        options: [
          "for (i in 10..1)",
          "for (i in 10 downTo 1)",
          "for (i in 10 until 1)",
          "for (i in 10 step -1)"
        ],
        correct: 1,
        explanation: "The 'downTo' keyword is used to define a range that progresses in reverse (decrementing) order, inclusive of both endpoints."
      },
      {
        question: "Which helper function is used to create an array with initial values in Kotlin?",
        options: [
          "arrayOf()",
          "createArray()",
          "array()",
          "listOf()"
        ],
        correct: 0,
        explanation: "arrayOf() is the standard utility function in Kotlin to instantiate an Array with the specified values (e.g. arrayOf('A', 'B'))."
      }
    ],
    "Kotlin Functions & Null Safety": [
      {
        question: "What is the syntax for a single-expression function that returns the square of a number?",
        options: [
          "fun square(x: Int) = x * x",
          "fun square(x: Int) { return x * x }",
          "fun square(x: Int) -> x * x",
          "fun square(x: Int) : x * x"
        ],
        correct: 0,
        explanation: "If a function returns a single expression, the curly braces and return keyword can be omitted by using an equals (=) symbol."
      },
      {
        question: "Which operator is the Elvis operator, used to provide a default fallback value if an expression is null?",
        options: [
          "?.",
          "!!",
          "?:",
          "?"
        ],
        correct: 2,
        explanation: "The Elvis operator (?:) evaluates the expression to its left; if it is not null, it returns it. Otherwise, it returns the fallback value to its right."
      }
    ],
    "Kotlin OOP (Classes & Objects)": [
      {
        question: "Are classes in Kotlin open for inheritance by default?",
        options: [
          "Yes, all classes can be inherited by default",
          "No, classes are final by default and require the 'open' keyword to be inheritable",
          "Only classes inside interfaces can be inherited",
          "Classes can only be inherited if they are declared inside a data class"
        ],
        correct: 1,
        explanation: "By default, all classes in Kotlin are final (non-inheritable). You must explicitly mark a class with the 'open' keyword to allow other classes to inherit from it."
      },
      {
        question: "Which keyword must be used in a subclass to override a method from a parent class?",
        options: [
          "super",
          "extends",
          "override",
          "open"
        ],
        correct: 2,
        explanation: "Kotlin enforces safe method overriding by requiring the 'override' keyword on any member that overrides a superclass function or property."
      }
    ]
  }
};
