const quizData1 = {
  "Python Mastery Bootcamp": {
    "Python Basics & Data Types": [
      {
        question: "What is the output of the following code?\n\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(len(x))",
        options: ["3", "4", "Error", "None"],
        correct: 1,
        explanation: "Lists are mutable and assigned by reference. Since y points to the same list object as x, appending to y also modifies x, making its length 4."
      },
      {
        question: "Which of the following correctly creates a list of squares for even numbers from 0 to 9 using a list comprehension?",
        options: [
          "[x**2 for x in range(10) if x % 2 == 0]",
          "[x**2 if x % 2 == 0 for x in range(10)]",
          "[for x in range(10) if x % 2 == 0: x**2]",
          "(x**2 for x in range(10) if x % 2 == 0)"
        ],
        correct: 0,
        explanation: "In a list comprehension the filter condition (if clause) comes after the for clause. The last option would create a generator expression, not a list."
      }
    ],
    "Control Flow & Functions": [
      {
        question: "What will the following function call print?\n\ndef greet(name, greeting=\"Hello\"):\n    print(f\"{greeting}, {name}!\")\n\ngreet(greeting=\"Hey\", name=\"Alice\")",
        options: [
          "Hello, Alice!",
          "Hey, Alice!",
          "Error: positional argument follows keyword argument",
          "Hey, Hey!"
        ],
        correct: 1,
        explanation: "Keyword arguments can be passed in any order. Here greeting is explicitly set to 'Hey' and name to 'Alice', overriding the default value of greeting."
      },
      {
        question: "In Python\u2019s LEGB scope resolution, if a variable is defined both inside a function and at the module level, which value does the function use?",
        options: [
          "The module-level (global) value",
          "The local value defined inside the function",
          "It raises a NameError",
          "It depends on the order of definition"
        ],
        correct: 1,
        explanation: "LEGB stands for Local, Enclosing, Global, Built-in. Python searches scopes in that order, so a locally defined variable is found first and used instead of the global one."
      }
    ],
    "Object-Oriented Programming": [
      {
        question: "A class Dog inherits from Animal and both define a speak() method. When you call Dog().speak(), which version runs?",
        options: [
          "Animal\u2019s speak() because it is the parent",
          "Dog\u2019s speak() due to polymorphism",
          "Both methods run sequentially",
          "Python raises an ambiguity error"
        ],
        correct: 1,
        explanation: "Polymorphism allows a subclass to override a parent\u2019s method. Python\u2019s method resolution order (MRO) finds Dog\u2019s speak() first, so that version executes."
      },
      {
        question: "What is the purpose of the __repr__ magic method in a Python class?",
        options: [
          "It defines how the object is deleted from memory",
          "It returns an unambiguous string representation of the object, mainly for debugging",
          "It controls attribute access on the object",
          "It initializes the object\u2019s attributes"
        ],
        correct: 1,
        explanation: "__repr__ should return a developer-friendly string that ideally could recreate the object. It is called by repr() and is the fallback when __str__ is not defined."
      }
    ],
    "File I/O & Error Handling": [
      {
        question: "Why is using a context manager (with statement) preferred over manually calling file.open() and file.close()?",
        options: [
          "It makes the code run faster",
          "It automatically closes the file even if an exception occurs",
          "It allows reading and writing at the same time",
          "It encrypts the file contents automatically"
        ],
        correct: 1,
        explanation: "A context manager guarantees that the file is properly closed when the block exits, even if an error is raised inside it. This prevents resource leaks."
      },
      {
        question: "You need to read a JSON config file and handle the case where the file might not exist. Which approach is correct?",
        options: [
          "try:\n    with open('config.json') as f:\n        data = json.load(f)\nexcept FileNotFoundError:\n    data = {}",
          "data = json.load('config.json') or {}",
          "with open('config.json') as f:\n    data = json.loads(f)",
          "data = json.read('config.json', default={})"
        ],
        correct: 0,
        explanation: "Wrapping the file open in a try/except for FileNotFoundError is the Pythonic way to handle missing files. json.load() takes a file object, not a string path, and there is no json.read() function."
      }
    ],
    "Web APIs & Automation": [
      {
        question: "When making a GET request to a REST API using the requests library, which method should you use to safely check for HTTP errors before processing the response?",
        options: [
          "response.validate()",
          "response.raise_for_status()",
          "response.check_error()",
          "requests.verify(response)"
        ],
        correct: 1,
        explanation: "response.raise_for_status() raises an HTTPError for 4xx/5xx status codes. This is the standard way to detect failed requests before attempting to parse the response body."
      },
      {
        question: "You are scraping a webpage with BeautifulSoup and want to extract all <a> tags that have a class of 'nav-link'. Which call is correct?",
        options: [
          "soup.find_all('a', class_='nav-link')",
          "soup.select_all('a.nav-link')",
          "soup.get('a', class='nav-link')",
          "soup.find('a', className='nav-link')"
        ],
        correct: 0,
        explanation: "find_all() is the correct BeautifulSoup method, and class_ (with underscore) is used because class is a reserved word in Python. select() uses CSS selectors but the method is select(), not select_all()."
      }
    ],
    "Data Analysis with Python": [
      {
        question: "You have a pandas DataFrame df with a column 'sales'. Which expression correctly returns a new DataFrame containing only rows where sales exceed 1000?",
        options: [
          "df.filter(sales > 1000)",
          "df[df['sales'] > 1000]",
          "df.query(sales > 1000)",
          "df.where('sales', '>', 1000)"
        ],
        correct: 1,
        explanation: "Boolean indexing with df[df['sales'] > 1000] is the standard pandas approach for filtering rows. The expression inside the brackets creates a boolean Series used as a mask."
      },
      {
        question: "After running df.groupby('region')['revenue'].mean(), what does the result represent?",
        options: [
          "The total revenue for each region",
          "The average revenue per region",
          "A DataFrame with one row per region showing all columns",
          "The median revenue across all regions"
        ],
        correct: 1,
        explanation: "groupby('region')['revenue'].mean() groups the data by the region column, selects the revenue column, and computes the arithmetic mean for each group."
      }
    ]
  },
  "Graphics & UI/UX Design": {
    "Design Principles & Fundamentals": [
      {
        question: "A designer places the most important headline in large bold text at the top of a page, with supporting details in smaller text below. Which design principle is being applied?",
        options: [
          "Repetition",
          "Visual hierarchy",
          "Proximity",
          "Alignment"
        ],
        correct: 1,
        explanation: "Visual hierarchy uses size, weight, color, and placement to guide the viewer\u2019s eye to the most important content first, establishing a clear reading order."
      },
      {
        question: "In the 60-30-10 color rule, what does the '60' represent?",
        options: [
          "The accent color used for call-to-action buttons",
          "The dominant color that covers the majority of the design surface",
          "The number of colors allowed in a palette",
          "The percentage of white space required"
        ],
        correct: 1,
        explanation: "The 60-30-10 rule divides a design\u2019s color usage: 60% dominant color (backgrounds), 30% secondary color (navigation, cards), and 10% accent color (CTAs, highlights)."
      }
    ],
    "Typography & Color Theory": [
      {
        question: "When pairing fonts for a design, which combination generally produces the best results?",
        options: [
          "Two decorative display fonts for maximum visual interest",
          "A serif and a sans-serif that share similar x-heights",
          "Fonts from the same family with identical weights",
          "Three or more contrasting script fonts"
        ],
        correct: 1,
        explanation: "Pairing a serif with a sans-serif creates visual contrast while maintaining harmony. Matching x-heights ensures the fonts feel balanced when used together at the same size."
      },
      {
        question: "According to WCAG accessibility guidelines, what is the minimum contrast ratio required for normal-sized body text?",
        options: [
          "2:1",
          "3:1",
          "4.5:1",
          "7:1"
        ],
        correct: 2,
        explanation: "WCAG 2.1 Level AA requires a minimum contrast ratio of 4.5:1 for normal text. Large text (18px+ bold or 24px+ regular) has a lower requirement of 3:1."
      }
    ],
    "Figma Essentials": [
      {
        question: "In Figma, what is the primary benefit of using Auto Layout on a frame?",
        options: [
          "It automatically generates CSS code for the design",
          "It makes the frame\u2019s children resize and reflow dynamically based on content and defined spacing rules",
          "It prevents other team members from editing the frame",
          "It exports the frame as a responsive HTML page"
        ],
        correct: 1,
        explanation: "Auto Layout lets child elements within a frame automatically adjust their position and size based on defined padding, spacing, and alignment \u2014 similar to CSS Flexbox."
      },
      {
        question: "What is the relationship between Figma components and variants?",
        options: [
          "Variants are components that have been deleted and archived",
          "Components are read-only; variants are the editable copies",
          "Variants allow a single component to have multiple states or configurations (e.g., default, hover, disabled)",
          "Variants are only used in Figma\u2019s free tier"
        ],
        correct: 2,
        explanation: "Variants let designers bundle multiple states of a component (sizes, states, themes) into one organized component set, making it easier to swap between configurations."
      }
    ],
    "UX Research & Strategy": [
      {
        question: "A UX researcher observes five users attempting to complete a checkout flow and notes where they hesitate or make errors. What research method is this?",
        options: [
          "Card sorting",
          "A/B testing",
          "Usability testing",
          "Heuristic evaluation"
        ],
        correct: 2,
        explanation: "Usability testing involves observing real users as they attempt tasks, identifying pain points and areas of confusion in the interface through direct observation."
      },
      {
        question: "Which UX artifact maps out a user\u2019s emotions, actions, and pain points across each stage of their interaction with a product?",
        options: [
          "User persona",
          "Site map",
          "User journey map",
          "Wireframe"
        ],
        correct: 2,
        explanation: "A user journey map visualizes the end-to-end experience across touchpoints, capturing what users do, think, and feel at each stage to identify opportunities for improvement."
      }
    ],
    "UI Prototyping & Interaction": [
      {
        question: "What is the key difference between a wireframe and a high-fidelity mockup?",
        options: [
          "Wireframes are interactive; mockups are static",
          "Wireframes focus on layout and structure with minimal detail, while mockups include visual design, color, and typography",
          "Mockups are created before wireframes in the design process",
          "There is no meaningful difference; the terms are interchangeable"
        ],
        correct: 1,
        explanation: "Wireframes are low-fidelity sketches focused on information architecture and layout. High-fidelity mockups add visual polish \u2014 colors, fonts, images \u2014 to represent the final design."
      },
      {
        question: "A button subtly changes color and elevates its shadow when a user hovers over it. What is this type of feedback called?",
        options: [
          "A design token",
          "A micro-interaction",
          "A responsive breakpoint",
          "An accessibility audit"
        ],
        correct: 1,
        explanation: "Micro-interactions are small, contained animations or visual responses triggered by user actions. They provide immediate feedback and make interfaces feel responsive and alive."
      }
    ],
    "Brand Identity & Design Systems": [
      {
        question: "In atomic design methodology, which level represents the smallest, most basic UI elements like buttons, input fields, and labels?",
        options: [
          "Pages",
          "Organisms",
          "Molecules",
          "Atoms"
        ],
        correct: 3,
        explanation: "Atoms are the foundational building blocks in atomic design \u2014 individual elements like buttons, icons, and form labels that cannot be broken down further while remaining functional."
      },
      {
        question: "What is the primary purpose of a design system in a large organization?",
        options: [
          "To replace the need for designers entirely",
          "To ensure visual and functional consistency across all products through shared components, patterns, and guidelines",
          "To lock down the UI so no changes can be made after launch",
          "To automatically generate marketing materials"
        ],
        correct: 1,
        explanation: "A design system provides a single source of truth for reusable components, style guidelines, and interaction patterns, ensuring consistency and speeding up development across teams."
      }
    ]
  }
};
