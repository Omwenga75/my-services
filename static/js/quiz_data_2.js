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
    "Kotlin Language Essentials": [
      {
        question: "What is the result of the following Kotlin code?\n\nval name: String? = null\nprintln(name?.length ?: \"No name\")",
        options: [
          "null",
          "0",
          "No name",
          "A NullPointerException is thrown"
        ],
        correct: 2,
        explanation: "The safe call operator (?.) returns null when name is null, and the Elvis operator (?:) then provides the fallback value \"No name\" since the left side evaluated to null."
      },
      {
        question: "Which Kotlin construct is most appropriate for replacing a complex if-else chain that checks a variable against multiple possible values?",
        options: [
          "A for loop with break statements",
          "A when expression",
          "A try-catch block",
          "A data class with default values"
        ],
        correct: 1,
        explanation: "The 'when' expression in Kotlin is a powerful replacement for switch/case and complex if-else chains, supporting pattern matching, ranges, type checks, and arbitrary conditions with cleaner syntax."
      }
    ],
    "Android App Fundamentals": [
      {
        question: "During the Android Activity lifecycle, which callback method is called when the activity becomes visible to the user but is not yet interactive?",
        options: [
          "onCreate()",
          "onStart()",
          "onResume()",
          "onPause()"
        ],
        correct: 1,
        explanation: "onStart() is called when the activity becomes visible to the user. The activity becomes fully interactive only after onResume() is called, completing the foreground transition."
      },
      {
        question: "What is the primary purpose of the AndroidManifest.xml file in an Android project?",
        options: [
          "To define the app\'s UI layout and styling",
          "To declare app components, permissions, and essential metadata to the Android system",
          "To manage third-party library dependencies",
          "To store the app\'s database schema"
        ],
        correct: 1,
        explanation: "AndroidManifest.xml declares all app components (activities, services, receivers), required permissions, hardware features, and other metadata that the Android system needs before it can run the app."
      }
    ],
    "Jetpack Compose UI": [
      {
        question: "In Jetpack Compose, what is the purpose of using remember { mutableStateOf(...) } when declaring a variable inside a composable function?",
        options: [
          "It makes the variable accessible from other composable functions",
          "It persists the value across configuration changes like screen rotation",
          "It preserves the state value across recompositions so it is not reset each time the composable re-executes",
          "It automatically saves the value to a local database"
        ],
        correct: 2,
        explanation: "remember caches the value across recompositions, and mutableStateOf makes it observable so Compose knows to recompose when the value changes. Without remember, the state would reset on every recomposition."
      },
      {
        question: "Which Compose layout composable should you use to display a large scrollable list of items efficiently?",
        options: [
          "Column with verticalScroll modifier",
          "LazyColumn",
          "Box with scroll state",
          "Row with horizontalArrangement"
        ],
        correct: 1,
        explanation: "LazyColumn only composes and renders items currently visible on screen (similar to RecyclerView), making it efficient for large lists. A regular Column with scroll composes all items upfront, wasting resources."
      }
    ],
    "Navigation & State Management": [
      {
        question: "Why is it recommended to use a ViewModel to hold UI state instead of storing it directly inside a composable with remember?",
        options: [
          "ViewModel makes the code compile faster",
          "ViewModel state survives configuration changes like screen rotations, while remember does not",
          "ViewModel is required for Compose to render any UI",
          "ViewModel automatically encrypts all stored data"
        ],
        correct: 1,
        explanation: "A ViewModel survives configuration changes (like rotation) because it is scoped to the navigation graph or activity lifecycle, whereas remember only survives recompositions within the same composition instance."
      },
      {
        question: "In a Jetpack Compose navigation setup, how do you pass a userId argument when navigating to a detail screen defined as \"detail/{userId}\"?",
        options: [
          "navController.navigate(\"detail\", userId)",
          "navController.navigate(\"detail/{userId}\")",
          "navController.navigate(\"detail/$userId\")",
          "navController.navigateWithArgs(\"detail\", userId)"
        ],
        correct: 2,
        explanation: "Compose Navigation uses URL-style routing, so you embed the argument directly into the route string using Kotlin string interpolation: \"detail/$userId\", which replaces the placeholder with the actual value."
      }
    ],
    "APIs, Networking & Data": [
      {
        question: "Why should network requests in an Android app using Retrofit be dispatched on Dispatchers.IO instead of Dispatchers.Main?",
        options: [
          "Dispatchers.IO encrypts network traffic automatically",
          "Dispatchers.Main does not support coroutines",
          "Network calls are blocking I/O operations that would freeze the UI if run on the main thread",
          "Dispatchers.IO is faster because it compresses HTTP requests"
        ],
        correct: 2,
        explanation: "The main thread handles UI rendering and user interaction. Running blocking I/O operations on it causes the UI to freeze (ANR errors). Dispatchers.IO uses a thread pool optimized for such blocking operations."
      },
      {
        question: "What is the main benefit of implementing the repository pattern between a ViewModel and data sources like Retrofit and Room?",
        options: [
          "It eliminates the need for error handling in the app",
          "It provides a single source of truth and abstracts data-fetching logic so the ViewModel doesn\'t know where data comes from",
          "It forces all data to be fetched from the network only",
          "It replaces the need for coroutines entirely"
        ],
        correct: 1,
        explanation: "The repository pattern abstracts data sources behind a clean API, allowing the ViewModel to request data without knowing if it comes from a local database, network, or cache, and enabling easier testing and maintenance."
      }
    ],
    "App Architecture & Publishing": [
      {
        question: "In the MVVM architecture pattern for Android, which layer is responsible for holding and preparing UI state, and should NOT hold references to Views or Context?",
        options: [
          "Model",
          "View",
          "ViewModel",
          "Repository"
        ],
        correct: 2,
        explanation: "The ViewModel holds UI-related state and business logic. It must not reference Views, Activities, or Context directly to avoid memory leaks, since the ViewModel outlives configuration changes."
      },
      {
        question: "Before uploading an Android app to the Google Play Console for production release, which of the following is a required step?",
        options: [
          "Enabling developer mode on the publishing computer",
          "Signing the release APK/AAB with a keystore and running code shrinking with R8",
          "Converting the project from Kotlin to Java",
          "Removing all Gradle dependencies from the project"
        ],
        correct: 1,
        explanation: "Production apps must be signed with a private keystore for identity verification. R8 (which replaces ProGuard) shrinks, obfuscates, and optimizes the code to reduce APK size and protect against reverse engineering."
      }
    ]
  }
};
