// Course Notes Data Map and slider utilities
const courseNotesMap = {
    "Python Mastery Bootcamp": {
        modules: [
            {
                title: "Python Basics & Data Types",
                badge: "Foundation",
                notes: [
                    "Variables are created by assignment: <code>x = 10</code>. Python is dynamically typed — no need to declare types explicitly.",
                    "<strong>Core data types:</strong> <code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>, <code>list</code>, <code>tuple</code>, <code>dict</code>, <code>set</code>. Use <code>type()</code> to inspect any object's type at runtime.",
                    "Strings support f-string formatting: <code>f\"Hello {name}\"</code>. Use <code>.strip()</code>, <code>.split()</code>, <code>.replace()</code>, and <code>.join()</code> for common string operations.",
                    "<strong>Lists</strong> are mutable and ordered: <code>my_list.append(item)</code>. <strong>Tuples</strong> are immutable. <strong>Dicts</strong> store key-value pairs: <code>data['key']</code>.",
                    "Use <code>len()</code>, <code>range()</code>, <code>enumerate()</code>, and <code>zip()</code> as essential built-in functions for everyday coding.",
                    "List comprehensions provide concise syntax: <code>[x**2 for x in range(10) if x % 2 == 0]</code> creates a filtered, transformed list in one line."
                ]
            },
            {
                title: "Control Flow & Functions",
                badge: "Logic",
                notes: [
                    "Conditional statements: <code>if</code>, <code>elif</code>, <code>else</code>. Python uses indentation (4 spaces) instead of braces to define code blocks.",
                    "<strong>Loops:</strong> <code>for item in iterable:</code> iterates over sequences. <code>while condition:</code> runs until the condition is false. Use <code>break</code> to exit and <code>continue</code> to skip.",
                    "Functions are defined with <code>def func_name(params):</code>. Use <code>return</code> to send values back. Functions are first-class objects in Python.",
                    "<strong>Default & keyword arguments:</strong> <code>def greet(name, greeting='Hello'):</code>. Use <code>*args</code> for variable positional args and <code>**kwargs</code> for keyword args.",
                    "Lambda functions are anonymous: <code>square = lambda x: x**2</code>. Use with <code>map()</code>, <code>filter()</code>, and <code>sorted()</code> for functional-style programming.",
                    "Scope follows the <strong>LEGB rule:</strong> Local → Enclosing → Global → Built-in. Use <code>global</code> or <code>nonlocal</code> keywords to modify outer-scope variables."
                ]
            },
            {
                title: "Object-Oriented Programming",
                badge: "OOP",
                notes: [
                    "Classes are blueprints: <code>class Dog:</code>. The <code>__init__</code> method is the constructor. <code>self</code> refers to the current instance.",
                    "<strong>Encapsulation:</strong> prefix with <code>_</code> for protected and <code>__</code> for private (name-mangled). Use <code>@property</code> decorators for getter/setter patterns.",
                    "<strong>Inheritance:</strong> <code>class Puppy(Dog):</code> inherits all methods. Use <code>super().__init__()</code> to call the parent constructor. Python supports multiple inheritance.",
                    "<strong>Polymorphism:</strong> different classes can implement the same method name. Python uses duck typing — if it walks and quacks like a duck, it's a duck.",
                    "<strong>Magic methods:</strong> <code>__str__</code> for string representation, <code>__len__</code> for length, <code>__eq__</code> for equality comparison, <code>__repr__</code> for debugging output.",
                    "Use <code>@staticmethod</code> for utility methods that don't need instance access, and <code>@classmethod</code> for factory methods that receive the class as first argument."
                ]
            },
            {
                title: "File I/O & Error Handling",
                badge: "Reliability",
                notes: [
                    "Open files with context managers: <code>with open('file.txt', 'r') as f:</code> — this guarantees the file is properly closed, even if an error occurs.",
                    "<strong>File modes:</strong> <code>'r'</code> read, <code>'w'</code> write (overwrites), <code>'a'</code> append, <code>'rb'</code>/<code>'wb'</code> for binary. Use <code>f.read()</code>, <code>f.readline()</code>, or <code>f.readlines()</code>.",
                    "<strong>Exception handling:</strong> <code>try: ... except TypeError as e: ... finally:</code>. Always catch specific exceptions rather than bare <code>except:</code>.",
                    "Common exceptions: <code>ValueError</code>, <code>TypeError</code>, <code>KeyError</code>, <code>IndexError</code>, <code>FileNotFoundError</code>. Raise custom exceptions with <code>raise</code>.",
                    "Use the <code>json</code> module for structured data: <code>json.load(f)</code> reads from file, <code>json.dumps(data, indent=2)</code> serializes to a formatted string.",
                    "The <code>os</code> and <code>pathlib</code> modules handle file paths cross-platform: <code>Path('data') / 'file.csv'</code> builds paths safely."
                ]
            },
            {
                title: "Web APIs & Automation",
                badge: "Integration",
                notes: [
                    "The <code>requests</code> library makes HTTP calls: <code>requests.get(url)</code>, <code>requests.post(url, json=data)</code>. Always check <code>response.status_code</code> before parsing.",
                    "<strong>REST API pattern:</strong> GET (read), POST (create), PUT (update), DELETE (remove). APIs return JSON — parse with <code>response.json()</code>.",
                    "Use <strong>API keys</strong> for authentication. Store secrets in environment variables: <code>os.environ.get('API_KEY')</code> — never hardcode credentials.",
                    "<strong>Automation with Python:</strong> schedule scripts with <code>schedule</code> library, automate browser tasks with <code>selenium</code>, and send emails with <code>smtplib</code>.",
                    "Web scraping with <code>BeautifulSoup</code>: <code>soup.find_all('div', class_='item')</code> extracts elements. Always respect <code>robots.txt</code> and rate-limit your requests.",
                    "<strong>Error handling in APIs:</strong> implement retries with exponential backoff. Use <code>try/except</code> around network calls and set <code>timeout</code> parameters."
                ]
            },
            {
                title: "Data Analysis with Python",
                badge: "Analytics",
                notes: [
                    "<strong>Pandas</strong> is the core library: <code>import pandas as pd</code>. Load data with <code>pd.read_csv('data.csv')</code>. A DataFrame is a 2D labeled data structure.",
                    "Key operations: <code>df.head()</code>, <code>df.describe()</code>, <code>df.info()</code> for exploration. Filter rows: <code>df[df['age'] > 25]</code>. Select columns: <code>df[['name', 'age']]</code>.",
                    "Handle missing data: <code>df.dropna()</code> removes rows, <code>df.fillna(0)</code> replaces. Use <code>df.isnull().sum()</code> to count missing values per column.",
                    "<strong>GroupBy</strong> for aggregation: <code>df.groupby('category')['price'].mean()</code>. Chain operations: <code>.sort_values()</code>, <code>.reset_index()</code>.",
                    "<strong>Matplotlib</strong> for plotting: <code>plt.plot(x, y)</code>, <code>plt.bar()</code>, <code>plt.scatter()</code>. Use <code>plt.title()</code>, <code>plt.xlabel()</code> to label charts.",
                    "Export results: <code>df.to_csv('output.csv', index=False)</code>. For Excel: <code>df.to_excel('output.xlsx')</code>. Combine with <code>pd.merge()</code> or <code>pd.concat()</code>."
                ]
            }
        ]
    },
    "Graphics & UI/UX Design": {
        modules: [
            {
                title: "Design Principles & Fundamentals",
                badge: "Foundation",
                notes: [
                    "<strong>Visual hierarchy</strong> guides the eye through size, color, contrast, and position. The most important element should be the most visually prominent.",
                    "<strong>Proximity & grouping:</strong> related elements should be placed close together. White space (negative space) separates unrelated groups and reduces cognitive load.",
                    "<strong>Alignment</strong> creates visual order. Use grids and guides to align elements consistently — left-align body text for readability in LTR languages.",
                    "<strong>Contrast</strong> creates emphasis: light vs. dark, large vs. small, thick vs. thin. WCAG requires a minimum 4.5:1 contrast ratio for body text accessibility.",
                    "<strong>Repetition</strong> builds consistency: use the same colors, fonts, spacing, and button styles throughout. This creates a cohesive brand feel.",
                    "The <strong>60-30-10 rule</strong> for color: 60% dominant color (background), 30% secondary (cards/sections), 10% accent (CTAs/highlights)."
                ]
            },
            {
                title: "Typography & Color Theory",
                badge: "Visual",
                notes: [
                    "<strong>Font pairing:</strong> combine a serif heading font with a sans-serif body font, or use weight contrast within one font family (e.g., Outfit 800 + Outfit 400).",
                    "Ideal body text size: <strong>16px minimum</strong> for screens. Line height should be 1.5–1.8× the font size. Line length: 50–75 characters per line for readability.",
                    "<strong>Type scale:</strong> use a consistent ratio (e.g., 1.25 or 1.333) to generate heading sizes. Example: 16px → 20px → 25px → 31px → 39px.",
                    "<strong>Color psychology:</strong> blue conveys trust, red signals urgency, green suggests growth, purple represents creativity. Choose brand colors that align with your message.",
                    "<strong>HSL color model</strong> is best for UI design: adjust Hue for color, Saturation for vibrancy, Lightness for shade variants. Create tint ladders (100–900) for a full palette.",
                    "Always test colors for <strong>accessibility:</strong> use tools like Stark or Contrast Checker. Avoid conveying meaning through color alone — add icons or labels."
                ]
            },
            {
                title: "Figma Essentials",
                badge: "Tool",
                notes: [
                    "<strong>Frames</strong> are the core building block in Figma. Use device-sized frames (1440×900 Desktop, 375×812 Mobile) as your artboards.",
                    "<strong>Auto Layout</strong> works like CSS flexbox: set direction, spacing, and padding. Nest Auto Layout frames for complex responsive structures.",
                    "<strong>Components</strong> are reusable elements: create a main component, then use instances. Changes to the main propagate to all instances automatically.",
                    "<strong>Variants</strong> let you define states: Default, Hover, Active, Disabled. Combine with <strong>Interactive Components</strong> for realistic prototype interactions.",
                    "Use <strong>Styles</strong> for colors, text, effects, and grids. Name them systematically: <code>Primary/500</code>, <code>Text/Body</code>, <code>Shadow/Medium</code>.",
                    "<strong>Dev Mode</strong> generates CSS, iOS, and Android code from designs. Use the Inspect panel for spacing, colors, and typography values during developer handoff."
                ]
            },
            {
                title: "UX Research & Strategy",
                badge: "Research",
                notes: [
                    "<strong>User personas</strong> represent target audience segments. Include demographics, goals, frustrations, and behaviors. Base them on real research, not assumptions.",
                    "<strong>User journey maps</strong> visualize the end-to-end experience: Awareness → Consideration → Onboarding → Usage → Retention. Identify pain points at each stage.",
                    "<strong>Usability testing:</strong> observe 5 users attempting tasks on your prototype. Follow the think-aloud protocol — ask users to narrate their thought process.",
                    "<strong>Heuristic evaluation</strong> uses Nielsen's 10 principles: visibility of system status, error prevention, recognition over recall, aesthetic minimalist design, and more.",
                    "<strong>Card sorting</strong> helps define information architecture: give users content cards and ask them to group and label categories for navigation design.",
                    "Measure UX with <strong>metrics:</strong> Task Success Rate, Time on Task, System Usability Scale (SUS) score (68+ is above average), and Net Promoter Score (NPS)."
                ]
            },
            {
                title: "UI Prototyping & Interaction",
                badge: "Interactive",
                notes: [
                    "<strong>Low-fidelity wireframes</strong> come first: sketch layouts with boxes and lines. Focus on structure and flow, not colors or fonts. Paper or Figma both work.",
                    "<strong>High-fidelity mockups</strong> add visual design: real colors, typography, images, and spacing. These represent the final look before development.",
                    "<strong>Micro-interactions</strong> improve UX: button hover effects, loading spinners, success animations, input field focus states. Use Figma Smart Animate for transitions.",
                    "<strong>Design tokens</strong> standardize values: colors, spacing (4px/8px grid), border-radius, shadows. Define once, use everywhere for consistency.",
                    "<strong>Responsive design:</strong> design for mobile-first, then scale up. Use breakpoints at 375px (mobile), 768px (tablet), 1024px (laptop), 1440px (desktop).",
                    "<strong>Accessibility (a11y):</strong> ensure touch targets are 44×44px minimum, use proper heading hierarchy (H1→H2→H3), and provide alt text for images."
                ]
            },
            {
                title: "Brand Identity & Design Systems",
                badge: "Branding",
                notes: [
                    "A <strong>brand identity</strong> includes: logo, color palette, typography, iconography, tone of voice, and imagery style. Consistency builds recognition and trust.",
                    "<strong>Logo design principles:</strong> keep it simple, make it scalable (works at 16px favicon to billboard), ensure it's recognizable in single-color and reversed versions.",
                    "<strong>Design systems</strong> are component libraries with documentation: buttons, inputs, cards, modals, navigation. They ensure consistency across teams and products.",
                    "Use <strong>atomic design methodology:</strong> Atoms (buttons, labels) → Molecules (search bar) → Organisms (header) → Templates → Pages.",
                    "<strong>Style guides</strong> document usage rules: minimum logo clear space, do/don't examples, color usage guidelines, and voice & tone for copy.",
                    "Popular design systems to study: <strong>Material Design</strong> (Google), <strong>Human Interface Guidelines</strong> (Apple), <strong>Carbon</strong> (IBM), <strong>Ant Design</strong> (Alibaba)."
                ]
            }
        ]
    },
    "Web Development": {
        modules: [
            {
                title: "HTML Fundamentals",
                badge: "Structure",
                notes: [
                    "<strong>HTML5 semantic elements</strong> improve accessibility and SEO: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>.",
                    "Every page needs: <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang=\"en\"&gt;</code>, <code>&lt;meta charset=\"UTF-8\"&gt;</code>, <code>&lt;meta viewport&gt;</code>, and a descriptive <code>&lt;title&gt;</code>.",
                    "<strong>Forms:</strong> <code>&lt;form action=\"/submit\" method=\"POST\"&gt;</code>. Use <code>&lt;label for=\"id\"&gt;</code> linked to inputs. Types: <code>text</code>, <code>email</code>, <code>password</code>, <code>number</code>, <code>date</code>.",
                    "<strong>Attributes matter:</strong> <code>alt</code> for images (accessibility), <code>required</code> for form validation, <code>placeholder</code> for hints, <code>id</code> for unique identification.",
                    "Use <code>&lt;a href=\"url\" target=\"_blank\" rel=\"noopener\"&gt;</code> for external links. Use <code>&lt;img src loading=\"lazy\"&gt;</code> for performance optimization.",
                    "<strong>Tables</strong> are for tabular data only: <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>. Never use tables for page layout."
                ]
            },
            {
                title: "CSS & Layout Systems",
                badge: "Styling",
                notes: [
                    "<strong>The Box Model:</strong> every element = content + padding + border + margin. Use <code>box-sizing: border-box</code> so width includes padding and border.",
                    "<strong>Flexbox</strong> for 1D layouts: <code>display: flex</code>. Key properties: <code>justify-content</code> (main axis), <code>align-items</code> (cross axis), <code>gap</code>, <code>flex-wrap</code>.",
                    "<strong>CSS Grid</strong> for 2D layouts: <code>display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;</code>. Use <code>grid-area</code> for named regions.",
                    "<strong>Responsive design:</strong> <code>@media (max-width: 768px) { }</code>. Mobile-first approach: write base styles for mobile, add media queries for larger screens.",
                    "<strong>CSS Variables:</strong> <code>:root { --primary: #6D28D9; }</code> then <code>color: var(--primary)</code>. Makes theming and maintenance much easier.",
                    "<strong>Transitions & animations:</strong> <code>transition: all 0.3s ease;</code> for hover effects. Use <code>@keyframes</code> for complex multi-step animations. Prefer <code>transform</code> and <code>opacity</code> for performance."
                ]
            },
            {
                title: "JavaScript Core Concepts",
                badge: "Logic",
                notes: [
                    "Use <code>const</code> by default, <code>let</code> when reassignment is needed. Never use <code>var</code> — it has function scope and hoisting issues.",
                    "<strong>Arrow functions:</strong> <code>const add = (a, b) => a + b;</code>. Use for callbacks and short functions. Regular functions for methods needing their own <code>this</code>.",
                    "<strong>Template literals:</strong> <code>`Hello ${name}, you are ${age} years old`</code>. Support multi-line strings and embedded expressions.",
                    "<strong>Destructuring:</strong> <code>const { name, age } = user;</code> for objects. <code>const [first, ...rest] = items;</code> for arrays with spread operator.",
                    "<strong>Array methods chain:</strong> <code>.filter()</code> → <code>.map()</code> → <code>.reduce()</code>. Also: <code>.find()</code>, <code>.some()</code>, <code>.every()</code>, <code>.forEach()</code>.",
                    "<strong>Async/Await:</strong> <code>const data = await fetch(url); const json = await data.json();</code>. Wrap in <code>try/catch</code> for error handling. Cleaner than Promise chains."
                ]
            },
            {
                title: "DOM Manipulation & Events",
                badge: "Interactive",
                notes: [
                    "Select elements: <code>document.getElementById('id')</code>, <code>document.querySelector('.class')</code>, <code>document.querySelectorAll('div.card')</code>.",
                    "Modify content: <code>el.textContent = 'text'</code> (safe), <code>el.innerHTML = '&lt;b&gt;bold&lt;/b&gt;'</code> (parses HTML — beware XSS). Use <code>el.style.color = 'red'</code> for inline styles.",
                    "Create elements dynamically: <code>const div = document.createElement('div'); div.className = 'card'; parent.appendChild(div);</code>.",
                    "<strong>Event listeners:</strong> <code>btn.addEventListener('click', handler)</code>. Common events: <code>click</code>, <code>submit</code>, <code>input</code>, <code>keydown</code>, <code>DOMContentLoaded</code>.",
                    "<strong>Event delegation:</strong> attach one listener to a parent element. Use <code>event.target</code> to identify which child was clicked. Much more efficient than individual listeners.",
                    "<strong>Prevent defaults:</strong> <code>event.preventDefault()</code> stops form submission or link navigation. <code>event.stopPropagation()</code> prevents event bubbling."
                ]
            },
            {
                title: "React Fundamentals",
                badge: "Framework",
                notes: [
                    "<strong>Components</strong> are functions that return JSX: <code>function Card({ title }) { return &lt;div&gt;{title}&lt;/div&gt;; }</code>. Keep them small and focused.",
                    "<strong>State</strong> with hooks: <code>const [count, setCount] = useState(0);</code>. State changes trigger re-renders. Never mutate state directly.",
                    "<strong>useEffect</strong> handles side effects: <code>useEffect(() => { fetchData(); }, [dependency]);</code>. Empty array <code>[]</code> = run once on mount.",
                    "<strong>Props</strong> are read-only inputs to components. Pass callbacks to children: <code>&lt;Button onClick={handleClick} /&gt;</code>. Lift state up to share between siblings.",
                    "<strong>Conditional rendering:</strong> <code>{isLogged && &lt;Dashboard /&gt;}</code> or ternary: <code>{loading ? &lt;Spinner /&gt; : &lt;Content /&gt;}</code>.",
                    "<strong>Lists:</strong> <code>{items.map(item => &lt;Card key={item.id} {...item} /&gt;)}</code>. Always provide a unique <code>key</code> prop for efficient re-rendering."
                ]
            },
            {
                title: "Node.js & Express",
                badge: "Backend",
                notes: [
                    "<strong>Node.js</strong> runs JavaScript on the server. Initialize projects with <code>npm init -y</code>. Install packages: <code>npm install express</code>.",
                    "<strong>Express setup:</strong> <code>const app = express(); app.listen(3000);</code>. Define routes: <code>app.get('/api/users', (req, res) => { res.json(users); });</code>.",
                    "<strong>Middleware</strong> processes requests: <code>app.use(express.json())</code> parses JSON bodies. Custom middleware: <code>app.use((req, res, next) => { next(); });</code>.",
                    "<strong>Route parameters:</strong> <code>app.get('/users/:id', (req, res) => { const { id } = req.params; });</code>. Query strings: <code>req.query.search</code>.",
                    "<strong>Error handling:</strong> <code>app.use((err, req, res, next) => { res.status(500).json({ error: err.message }); });</code>. Always handle errors in async routes.",
                    "Use <code>dotenv</code> for environment variables: <code>require('dotenv').config()</code>. Access with <code>process.env.DB_URL</code>. Never commit <code>.env</code> files."
                ]
            },
            {
                title: "SQL & Databases",
                badge: "Data",
                notes: [
                    "<strong>CRUD operations:</strong> <code>SELECT * FROM users WHERE age > 18;</code>, <code>INSERT INTO</code>, <code>UPDATE ... SET</code>, <code>DELETE FROM</code>.",
                    "<strong>Joins</strong> combine tables: <code>INNER JOIN</code> (matching rows), <code>LEFT JOIN</code> (all left + matching right), <code>RIGHT JOIN</code>, <code>FULL OUTER JOIN</code>.",
                    "<strong>Indexing</strong> speeds up queries: <code>CREATE INDEX idx_email ON users(email);</code>. Index columns used in WHERE, JOIN, and ORDER BY clauses.",
                    "<strong>Normalization</strong> reduces redundancy: 1NF (atomic values), 2NF (no partial dependencies), 3NF (no transitive dependencies). Balance with query performance.",
                    "<strong>Aggregation:</strong> <code>SELECT category, COUNT(*), AVG(price) FROM products GROUP BY category HAVING COUNT(*) > 5;</code>.",
                    "<strong>Security:</strong> always use parameterized queries to prevent SQL injection: <code>db.query('SELECT * FROM users WHERE id = ?', [userId])</code>."
                ]
            }
        ]
    },
    "Kotlin Android App Development": {
        modules: [
            {
                title: "Kotlin Intro, Syntax & Variables",
                badge: "Foundation",
                notes: [
                    "<strong>Kotlin Intro:</strong> Kotlin is a modern, cross-platform, statically typed language developed by JetBrains. It runs on the JVM, is fully compatible with Java, and is Google's preferred language for Android development since 2017.",
                    "<strong>Entry Point:</strong> Every Kotlin application must have a <code>main</code> function as its starting entry point: <code>fun main() { println(\"Hello World\") }</code>. Parameters <code>args: Array<String></code> are optional since Kotlin 1.3.",
                    "<strong>Outputting Text:</strong> Use <code>println()</code> to print message and append a new line. Use <code>print()</code> to print a message without moving to a new line (subsequent prints will appear on the same line).",
                    "<strong>Comments:</strong> Use single-line comments starting with <code>//</code> to document code. Use block/multi-line comments starting with <code>/*</code> and ending with <code>*/</code> to document larger sections or temporarily disable blocks.",
                    "<strong>Declaring Variables:</strong> Use <code>val</code> to declare read-only (immutable) variables that cannot be reassigned. Use <code>var</code> to declare mutable variables that can be modified later: <code>val pi = 3.14</code> and <code>var score = 0</code>.",
                    "<strong>Type Inference:</strong> Kotlin can automatically infer variable types from the assigned value: <code>val name = \"Alice\"</code> (inferred as String). Explicitly specify type if initialized later: <code>val age: Int</code>.",
                    "<strong>Variable Naming:</strong> Names are case-sensitive (<code>myVar</code> is distinct from <code>myvar</code>). Must start with a letter or underscore, and camelCase is the standard convention (e.g., <code>userAccountBalance</code>). Reserved keywords cannot be used.",
                    "<strong>Variables Reassignment:</strong> Reassigning a <code>val</code> variable generates a compilation error: <code>val x = 10; x = 20 // Val cannot be reassigned</code>. Reassigning a <code>var</code> is fully supported: <code>var y = 10; y = 20</code>."
                ]
            },
            {
                title: "Kotlin Data Types & Operators",
                badge: "Data Types",
                notes: [
                    "<strong>Data Types Overview:</strong> All types in Kotlin are treated as objects, which means they have member properties and functions. The basic types are Numbers, Characters, Booleans, Strings, and Arrays.",
                    "<strong>Integer Types:</strong> Kotlin provides <code>Byte</code> (8-bit, -128 to 127), <code>Short</code> (16-bit, -32768 to 32767), <code>Int</code> (32-bit, default for integers), and <code>Long</code> (64-bit, suffix with L: <code>150L</code>).",
                    "<strong>Floating-Point Types:</strong> Numbers with decimals are represented using <code>Float</code> (32-bit single-precision, suffixed with F: <code>5.75F</code>) or <code>Double</code> (64-bit double-precision, default for decimals: <code>19.99</code>).",
                    "<strong>Explicit Type Conversion:</strong> Implicit widening conversions (e.g., Int to Long) are NOT supported in Kotlin. You must explicitly convert using: <code>toInt()</code>, <code>toLong()</code>, <code>toFloat()</code>, <code>toDouble()</code>, etc.",
                    "<strong>Booleans and Characters:</strong> <code>Boolean</code> holds <code>true</code> or <code>false</code>. <code>Char</code> holds a single character in single quotes (e.g., <code>'A'</code>). Unlike Java, Char cannot be directly compared to numeric values.",
                    "<strong>Arithmetic Operators:</strong> Performs standard math: addition (<code>+</code>), subtraction (<code>-</code>), multiplication (<code>*</code>), division (<code>/</code>), modulus (<code>%</code> - returns division remainder), increment (<code>++</code>), and decrement (<code>--</code>).",
                    "<strong>Assignment & Compound Operators:</strong> Assign values using <code>=</code>. Compound operators combine math and assignment: <code>+=</code> (adds and assigns), <code>-=</code>, <code>*=</code>, <code>/=</code>, and <code>%=</code>.",
                    "<strong>Comparison Operators:</strong> Used in boolean testing and conditional execution: equal to (<code>==</code>), not equal to (<code>!=</code>), greater than (<code>&gt;</code>), less than (<code>&lt;</code>), greater/equal (<code>&gt;=</code>), and less/equal (<code>&lt;=</code>).",
                    "<strong>Logical Operators:</strong> Combine conditions: Logical AND (<code>&&</code> - true if both are true), Logical OR (<code>||</code> - true if either is true), and Logical NOT (<code>!</code> - reverses boolean state: <code>!true == false</code>)."
                ]
            },
            {
                title: "Kotlin Strings & Control Flow",
                badge: "Control Flow",
                notes: [
                    "<strong>Strings creation:</strong> Define standard strings in double quotes: <code>val s = \"Hello\"</code>. Multi-line or formatted strings are created using raw strings enclosed in triple double quotes: <code>\"\"\"line 1\\nline 2\"\"\"</code>.",
                    "<strong>String Properties & Operations:</strong> Access length using <code>s.length</code>. Find first character using index: <code>s[0]</code>. Change casing using helper functions <code>s.uppercase()</code> and <code>s.lowercase()</code>.",
                    "<strong>String Templates:</strong> Embed variables directly inside strings using the <code>$</code> prefix: <code>\"Hello, $name\"</code>. Evaluate expressions within brackets: <code>\"Length is ${name.length}\"</code>.",
                    "<strong>If...Else Expression:</strong> In Kotlin, <code>if</code> is an expression that returns a value: <code>val result = if (a > b) a else b</code>. The ternary operator <code>? :</code> is not used because of this.",
                    "<strong>If...Else Blocks:</strong> When a branch has multiple statements, the last line evaluates as the return value: <code>val max = if (a > b) { println(\"A is max\"); a } else { b }</code>.",
                    "<strong>When Expression:</strong> Replaces switch-case. Matches an expression sequentially: <code>when (x) { 1 -> println(\"one\"); 2 -> println(\"two\"); else -> println(\"other\") }</code>.",
                    "<strong>Multiple Match & Ranges in When:</strong> Group multiple options separated by commas: <code>0, 1 -> println(\"binary\")</code>. Use <code>in</code> to check ranges: <code>in 10..20 -> println(\"in range\")</code>.",
                    "<strong>When Without Arguments:</strong> Can act as an alternative to long if-else chains: <code>when { x > 0 -> print(\"positive\"); x < 0 -> print(\"negative\"); else -> print(\"zero\") }</code>."
                ]
            },
            {
                title: "Kotlin Loops & Arrays",
                badge: "Loops",
                notes: [
                    "<strong>While & Do...While Loops:</strong> <code>while (cond) { ... }</code> runs repeatedly as long as the condition evaluates to true. <code>do { ... } while (cond)</code> always runs at least once before checking condition.",
                    "<strong>For Loops:</strong> Iterates through ranges, arrays, or collections: <code>for (item in items) { println(item) }</code>. The loop variable is implicitly read-only (immutable).",
                    "<strong>Iterating Ranges:</strong> Create inclusive ranges using <code>..</code>: <code>for (i in 1..5)</code> loops 1, 2, 3, 4, 5. Use <code>until</code> to exclude the end value: <code>for (i in 1 until 5)</code> loops 1, 2, 3, 4.",
                    "<strong>Step & Reverse Ranges:</strong> Use <code>step</code> to configure custom increments: <code>for (i in 1..10 step 2)</code>. Use <code>downTo</code> to iterate backwards in reverse order: <code>for (i in 10 downTo 1)</code>.",
                    "<strong>Break & Continue:</strong> Use <code>break</code> to immediately exit the current loop. Use <code>continue</code> to skip execution of remaining statements in the block and proceed to next iteration.",
                    "<strong>Creating Arrays:</strong> Use the <code>arrayOf()</code> helper function to instantiate arrays: <code>val cars = arrayOf(\"Volvo\", \"BMW\", \"Ford\")</code>. Types can be inferred or explicitly specified.",
                    "<strong>Accessing and Modifying Arrays:</strong> Read elements using index: <code>val car = cars[0]</code>. Reassign values: <code>cars[0] = \"Tesla\"</code>. Check array size using the <code>size</code> property.",
                    "<strong>Array Membership & Loop:</strong> Check if an item exists using <code>in</code> or <code>!in</code>: <code>if (\"BMW\" in cars)</code>. Loop through elements directly: <code>for (car in cars) { println(car) }</code>."
                ]
            },
            {
                title: "Kotlin Functions & Null Safety",
                badge: "Functions",
                notes: [
                    "<strong>Declaring Functions:</strong> Functions are declared using the <code>fun</code> keyword, specifying parameters with explicit types, and an optional return type: <code>fun add(x: Int, y: Int): Int</code>.",
                    "<strong>Return Types:</strong> If a function does not return any value, its return type is <code>Unit</code> (which is optional to declare). Return values explicitly using the <code>return</code> keyword.",
                    "<strong>Default Parameter Arguments:</strong> Assign default values to parameters: <code>fun greet(name: String, msg: String = \"Hello\")</code>. If omitted in call, the default is used automatically.",
                    "<strong>Named Arguments:</strong> Specify parameter names when calling functions to improve clarity and change the argument order: <code>greet(msg = \"Welcome\", name = \"John\")</code>.",
                    "<strong>Single-Expression Functions:</strong> If a function body returns a single expression, omit curly braces and specify the body after <code>=</code>: <code>fun double(x: Int): Int = x * 2</code>.",
                    "<strong>Null Safety Principle:</strong> Kotlin prevents NullPointerExceptions by separating nullable from non-nullable types. Variables cannot hold null values by default: <code>var s: String = null // Error</code>.",
                    "<strong>Nullable Types:</strong> Mark a variable as nullable by adding a question mark <code>?</code> to its data type declaration: <code>var nullableString: String? = null</code>.",
                    "<strong>Safe Call Operator:</strong> Access properties on nullable objects using <code>?.</code>. It returns the value if the object is non-null, or returns null instead of crashing: <code>nullableString?.length</code>.",
                    "<strong>Elvis Operator:</strong> Use the Elvis operator <code>?:</code> to provide a default fallback value if the expression on the left is null: <code>val len = nullableString?.length ?: 0</code>.",
                    "<strong>Non-Null Assertion:</strong> Use the double exclamation <code>!!</code> operator to convert a nullable value to a non-null type. Throws a NullPointerException if value is null (use with extreme caution)."
                ]
            },
            {
                title: "Kotlin OOP (Classes & Objects)",
                badge: "OOP",
                notes: [
                    "<strong>Classes & Objects:</strong> Define a blueprint using the <code>class</code> keyword: <code>class Car { var brand = \"\" }</code>. Create instances without the <code>new</code> keyword: <code>val myCar = Car()</code>.",
                    "<strong>Properties & Dot Notation:</strong> Access class attributes and functions using dot syntax: <code>myCar.brand = \"Tesla\"</code>. Variables in class represent fields, auto-generating getters and setters.",
                    "<strong>Primary Constructors:</strong> Declare class properties directly in the header constructor: <code>class Person(val name: String, var age: Int)</code>. Properties are auto-initialized upon instantiation.",
                    "<strong>Initializer Block:</strong> The <code>init</code> block runs immediately when an object is created. Use it for validation or initialization logic since primary constructors cannot contain code.",
                    "<strong>Class Methods:</strong> Functions declared inside a class block define object behavior: <code>class Dog(val name: String) { fun bark() { println(\"$name says Woof!\") } }</code>.",
                    "<strong>Inheritance:</strong> Classes are final (non-inheritable) by default in Kotlin. To permit inheritance, mark the parent class with the <code>open</code> keyword: <code>open class Parent</code>.",
                    "<strong>Inheritance Syntax:</strong> Subclasses inherit using a colon <code>:</code> followed by parent class constructor call: <code>class Child(name: String) : Parent(name)</code>.",
                    "<strong>Overriding Methods:</strong> Functions must be explicitly marked as <code>open</code> in the parent class to be overridden. Subclasses must use the <code>override</code> keyword to modify behaviors.",
                    "<strong>Abstract Classes:</strong> Declared with the <code>abstract</code> keyword, abstract classes cannot be instantiated. Subclasses must implement all abstract functions and properties.",
                    "<strong>Interfaces:</strong> Define contracts using the <code>interface</code> keyword. Interfaces can contain abstract methods as well as concrete method implementations, but cannot store state.",
                    "<strong>Data Classes:</strong> Specially used for classes holding data. Mark with <code>data</code>: <code>data class User(val id: Int, val email: String)</code>. Automatically generates equals, toString, and copy methods."
                ]
            }
        ]
    },
    "Microsoft Office Productivity": {
        modules: [
            {
                title: "Word Document Essentials",
                badge: "Documents",
                notes: [
                    "<strong>Styles</strong> are the key to professional documents: use Heading 1, Heading 2, Body Text styles instead of manually formatting. This enables automatic Table of Contents.",
                    "<strong>Page layout:</strong> set margins (Normal: 1 inch), orientation, and paper size in Layout tab. Use <strong>Section Breaks</strong> for different layouts within one document.",
                    "<strong>Headers & Footers:</strong> Insert → Header/Footer. Use <code>Page X of Y</code> for page numbers. Check \"Different First Page\" for title pages without numbers.",
                    "<strong>Track Changes</strong> (<code>Ctrl+Shift+E</code>) for collaboration: reviewers can suggest edits. Accept/Reject changes individually or all at once. Add comments with <code>Ctrl+Alt+M</code>.",
                    "<strong>Mail Merge:</strong> create personalized letters, labels, or emails from a data source (Excel spreadsheet). Insert → Rules for conditional content in merged documents.",
                    "<strong>Essential shortcuts:</strong> <code>Ctrl+S</code> (save), <code>Ctrl+Z</code> (undo), <code>Ctrl+B/I/U</code> (bold/italic/underline), <code>Ctrl+Shift+V</code> (paste without formatting)."
                ]
            },
            {
                title: "Excel Formulas & Functions",
                badge: "Calculations",
                notes: [
                    "<strong>Essential functions:</strong> <code>=SUM(A1:A10)</code>, <code>=AVERAGE()</code>, <code>=COUNT()</code>, <code>=MAX()</code>, <code>=MIN()</code>. All formulas start with <code>=</code>.",
                    "<strong>VLOOKUP:</strong> <code>=VLOOKUP(lookup_value, table, col_index, FALSE)</code>. Use FALSE for exact match. Modern alternative: <code>=XLOOKUP()</code> which searches in any direction.",
                    "<strong>IF statements:</strong> <code>=IF(A1>100, \"High\", \"Low\")</code>. Nest for multiple conditions: <code>=IF(A1>90, \"A\", IF(A1>80, \"B\", \"C\"))</code>. Or use <code>=IFS()</code>.",
                    "<strong>COUNTIF/SUMIF:</strong> <code>=COUNTIF(range, criteria)</code> counts matching cells. <code>=SUMIFS(sum_range, criteria_range1, criteria1, ...)</code> for multiple conditions.",
                    "<strong>Cell references:</strong> <code>A1</code> (relative), <code>$A$1</code> (absolute — locked), <code>A$1</code> (mixed). Press <code>F4</code> to cycle through reference types while editing.",
                    "<strong>TEXT functions:</strong> <code>=LEFT(A1, 5)</code>, <code>=RIGHT()</code>, <code>=MID()</code>, <code>=TRIM()</code> (remove extra spaces), <code>=CONCATENATE()</code> or <code>&</code> operator for joining."
                ]
            },
            {
                title: "Excel Dashboards & Data Visualization",
                badge: "Analytics",
                notes: [
                    "<strong>PivotTables</strong> summarize large datasets: select data → Insert → PivotTable. Drag fields to Rows, Columns, Values, and Filters areas for dynamic analysis.",
                    "<strong>Chart types:</strong> Bar/Column for comparisons, Line for trends over time, Pie for proportions (limit to 5-6 slices), Scatter for correlations. Choose the right chart for your data.",
                    "<strong>Conditional Formatting:</strong> Home → Conditional Formatting. Use color scales for heat maps, data bars for in-cell charts, and icon sets for KPI status indicators.",
                    "<strong>Data Validation:</strong> restrict cell input to lists (<code>=INDIRECT()</code> for dynamic), numbers within ranges, or dates. Add input messages and error alerts for user guidance.",
                    "<strong>Named Ranges:</strong> select cells → Name Box → type name. Use in formulas: <code>=SUM(MonthlySales)</code> instead of <code>=SUM(B2:B13)</code>. Improves formula readability.",
                    "<strong>Sparklines:</strong> tiny charts inside cells — Insert → Sparklines. Great for showing trends in dashboards without taking up chart space."
                ]
            },
            {
                title: "PowerPoint Presentation Design",
                badge: "Presentations",
                notes: [
                    "<strong>Slide Master</strong> (View → Slide Master) controls global design: fonts, colors, logo placement, backgrounds. Edit once, apply to all slides for consistency.",
                    "<strong>The 6×6 rule:</strong> maximum 6 bullet points per slide, maximum 6 words per bullet. Slides support your speech — they're not a script. Less text = more impact.",
                    "<strong>Visual hierarchy:</strong> title (28-36pt), subtitle (20-24pt), body (18-20pt). Use contrast between heading and body. Stick to 2 fonts maximum throughout.",
                    "<strong>Animations:</strong> use Entrance animations sparingly (Fade and Appear are professional). Avoid Bounce, Spin, or Fly-In. Set timing to \"On Click\" or \"After Previous\" for control.",
                    "<strong>SmartArt</strong> converts bullet points into visual diagrams: process flows, hierarchies, cycles, and relationships. Right-click text → Convert to SmartArt.",
                    "<strong>Export options:</strong> Save as PDF for sharing (preserves formatting), PPTX for editing, MP4 for video presentations. Use <code>Ctrl+P</code> to print handouts (3 slides per page with note lines)."
                ]
            },
            {
                title: "Productivity Workflows & Integration",
                badge: "Efficiency",
                notes: [
                    "<strong>OneDrive integration:</strong> save files to OneDrive for automatic cloud backup, version history, and real-time co-authoring with colleagues.",
                    "<strong>Excel → Word linking:</strong> paste Excel tables into Word as linked objects. When the Excel source updates, right-click the Word table → Update Link.",
                    "<strong>Excel → PowerPoint:</strong> embed live Excel charts in presentations. Changes in the source spreadsheet automatically reflect in your slides.",
                    "<strong>Quick Access Toolbar:</strong> customize with your most-used commands (Save, Undo, Print Preview). Right-click any ribbon button → Add to Quick Access Toolbar.",
                    "<strong>Templates:</strong> create custom templates (.dotx for Word, .xltx for Excel, .potx for PowerPoint) for recurring documents. Save hours on formatting.",
                    "<strong>Keyboard mastery:</strong> <code>Ctrl+Home</code> (go to start), <code>Ctrl+End</code> (go to end), <code>Alt+Tab</code> (switch apps), <code>Ctrl+F</code> (find), <code>F5</code> (start slideshow in PPT)."
                ]
            },
            {
                title: "Advanced Automation & Macros",
                badge: "Advanced",
                notes: [
                    "<strong>Macros</strong> record and replay actions: View → Macros → Record Macro. Assign to a button or keyboard shortcut. Automates repetitive formatting and data entry.",
                    "<strong>VBA basics:</strong> macros generate VBA code. <code>Sub MyMacro() ... End Sub</code>. Open the VBA editor with <code>Alt+F11</code>. Add logic with <code>If...Then</code> and <code>For...Next</code>.",
                    "<strong>Excel Power Query:</strong> Data → Get & Transform. Import, clean, and reshape data from multiple sources (CSV, databases, web) with repeatable steps.",
                    "<strong>Power Pivot:</strong> create data models with relationships between tables. Write DAX formulas for advanced calculations: <code>=CALCULATE(SUM(Sales), FILTER(...))</code>.",
                    "<strong>Outlook integration:</strong> send personalized emails from Excel using VBA macros. Automate meeting scheduling, task tracking, and email follow-ups.",
                    "<strong>Security note:</strong> save macro-enabled files as <code>.xlsm</code> (Excel) or <code>.docm</code> (Word). Enable macros only from trusted sources to prevent malicious code execution."
                ]
            }
        ]
    },
    "Networking Fundamentals": {
        modules: [
            {
                title: "Network Basics & OSI/TCP-IP Models",
                badge: "Foundation",
                notes: [
                    "<strong>OSI 7-Layer Model:</strong> Physical → Data Link → Network → Transport → Session → Presentation → Application. Mnemonic: <strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way.",
                    "<strong>TCP/IP 4-Layer Model:</strong> Network Access → Internet → Transport → Application. This is the practical model used in real networks and the internet.",
                    "<strong>Network types:</strong> LAN (local, building), WAN (wide, cities/countries), MAN (metropolitan), PAN (personal, Bluetooth). The Internet is the largest WAN.",
                    "<strong>Protocols:</strong> HTTP/HTTPS (web, port 80/443), DNS (name resolution, port 53), DHCP (IP assignment, port 67/68), FTP (file transfer, port 21), SSH (secure shell, port 22).",
                    "<strong>Network devices:</strong> Hub (broadcasts to all), Switch (forwards to specific MAC), Router (routes between networks), Firewall (filters traffic by rules).",
                    "<strong>Data encapsulation:</strong> Data → Segment (TCP header) → Packet (IP header) → Frame (MAC header) → Bits. Each layer adds its own header."
                ]
            },
            {
                title: "IP Addressing & Subnetting",
                badge: "Addressing",
                notes: [
                    "<strong>IPv4:</strong> 32-bit address in dotted decimal: <code>192.168.1.1</code>. Each octet is 0–255. Total: ~4.3 billion addresses (now exhausted, hence IPv6).",
                    "<strong>Address classes:</strong> Class A (1–126, /8), Class B (128–191, /16), Class C (192–223, /24). Private ranges: <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, <code>192.168.0.0/16</code>.",
                    "<strong>Subnet mask</strong> separates network and host portions: <code>255.255.255.0</code> (/24) means 24 network bits, 8 host bits = 254 usable hosts per subnet.",
                    "<strong>Subnetting formula:</strong> Usable hosts = 2^(host bits) − 2 (subtract network and broadcast addresses). A /26 gives 2^6 − 2 = 62 usable hosts.",
                    "<strong>IPv6:</strong> 128-bit address in hexadecimal: <code>2001:0db8::1</code>. Provides 3.4×10^38 addresses. Features: auto-configuration, no NAT needed, built-in IPsec.",
                    "<strong>CIDR notation:</strong> <code>/24</code> means 24 bits for network. Allows variable-length subnets instead of rigid classful boundaries. Enables efficient IP allocation."
                ]
            },
            {
                title: "Routing Fundamentals",
                badge: "Routing",
                notes: [
                    "<strong>Routing</strong> is the process of forwarding packets between networks. Routers use routing tables to determine the best path to a destination network.",
                    "<strong>Static routes:</strong> manually configured: <code>ip route 10.0.0.0 255.255.255.0 192.168.1.1</code>. Simple but doesn't adapt to network changes. Good for small networks.",
                    "<strong>Dynamic routing protocols:</strong> RIP (distance-vector, max 15 hops), OSPF (link-state, uses cost metric), EIGRP (Cisco hybrid), BGP (inter-AS, runs the internet).",
                    "<strong>Default gateway:</strong> the router IP that hosts use to reach networks outside their own subnet. Typically the first or last usable IP in the subnet.",
                    "<strong>Routing table fields:</strong> Destination Network, Subnet Mask, Next Hop, Interface, Metric (cost). Lower metric = preferred route. Show with <code>show ip route</code>.",
                    "<strong>NAT (Network Address Translation):</strong> converts private IPs to public IPs for internet access. Types: Static NAT (1:1), Dynamic NAT (pool), PAT/Overload (many:1 using ports)."
                ]
            },
            {
                title: "Switching & VLANs",
                badge: "Layer 2",
                notes: [
                    "<strong>Switches</strong> operate at Layer 2, using MAC addresses to forward frames. They build a MAC address table by learning source MACs from incoming frames.",
                    "<strong>VLANs</strong> (Virtual LANs) logically segment a switch into separate broadcast domains. VLAN 10 cannot communicate with VLAN 20 without a router (inter-VLAN routing).",
                    "<strong>Trunk ports</strong> carry traffic for multiple VLANs between switches using 802.1Q tagging. Access ports belong to a single VLAN and connect to end devices.",
                    "<strong>STP (Spanning Tree Protocol):</strong> prevents switching loops by blocking redundant paths. Elects a Root Bridge (lowest Bridge ID). Ports: Root, Designated, Blocked.",
                    "<strong>Port security:</strong> limits MAC addresses per port to prevent unauthorized access: <code>switchport port-security maximum 2</code>. Violation modes: Protect, Restrict, Shutdown.",
                    "<strong>EtherChannel:</strong> bundles multiple physical links into one logical link for increased bandwidth and redundancy. Protocols: LACP (standard) and PAgP (Cisco)."
                ]
            },
            {
                title: "Wireless Networking",
                badge: "Wireless",
                notes: [
                    "<strong>Wi-Fi standards:</strong> 802.11n (Wi-Fi 4, 600 Mbps), 802.11ac (Wi-Fi 5, 6.9 Gbps), 802.11ax (Wi-Fi 6/6E, 9.6 Gbps). Higher standards = faster speeds and better efficiency.",
                    "<strong>Frequency bands:</strong> 2.4 GHz (longer range, more interference, 3 non-overlapping channels: 1, 6, 11) vs 5 GHz (shorter range, faster speeds, more channels).",
                    "<strong>Wireless security:</strong> WPA3 is current standard. WPA2-AES is still acceptable. Never use WEP (cracked in minutes) or WPA-TKIP (deprecated).",
                    "<strong>SSID</strong> is the network name. Can be hidden (not broadcast) but this is not real security. Use strong passwords (12+ characters) and WPA3-Personal or Enterprise.",
                    "<strong>Access Point (AP) placement:</strong> mount APs high on walls/ceilings, avoid metal obstructions. Use site survey tools for optimal coverage. 20% overlap between APs for roaming.",
                    "<strong>Wireless troubleshooting:</strong> check signal strength (dBm, closer to 0 = better), channel interference, firmware updates, and client driver compatibility."
                ]
            },
            {
                title: "Network Security Essentials",
                badge: "Security",
                notes: [
                    "<strong>Firewall types:</strong> Packet filtering (basic, checks headers), Stateful inspection (tracks connections), Application-layer/proxy (deep packet inspection). Defense in depth: use multiple layers.",
                    "<strong>CIA Triad:</strong> Confidentiality (encryption), Integrity (hashing — MD5, SHA-256), Availability (redundancy, backups). The foundation of all security decisions.",
                    "<strong>Common threats:</strong> Phishing (social engineering), DDoS (flood attacks), Man-in-the-Middle (intercepts traffic), Malware (viruses, ransomware), SQL Injection (database attacks).",
                    "<strong>VPN (Virtual Private Network):</strong> encrypts traffic over public networks. Types: Site-to-Site (connects offices) and Remote Access (connects individuals). Protocols: IPsec, SSL/TLS.",
                    "<strong>ACLs (Access Control Lists):</strong> filter traffic on routers: <code>permit tcp 192.168.1.0 0.0.0.255 any eq 80</code>. Standard ACLs filter by source; Extended ACLs filter by source, destination, protocol, port.",
                    "<strong>Best practices:</strong> principle of least privilege, regular patching, strong password policies (12+ chars, MFA), network segmentation, intrusion detection systems (IDS/IPS), and regular security audits."
                ]
            }
        ]
    }
};

const moduleSlideStates = {};

function updateSlider(moduleIdx) {
    const track = document.getElementById(`slider-track-${moduleIdx}`);
    const index = moduleSlideStates[moduleIdx];
    if (!track) return;
    track.style.transform = `translateX(-${index * 100}%)`;

    const total = track.children.length;
    const counter = document.getElementById(`slider-counter-${moduleIdx}`);
    if (counter) {
        counter.textContent = `${index + 1} / ${total}`;
    }

    const dotsContainer = document.getElementById(`slider-dots-${moduleIdx}`);
    if (dotsContainer) {
        Array.from(dotsContainer.children).forEach((dot, dotIdx) => {
            if (dotIdx === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    const prevBtn = document.getElementById(`slider-prev-${moduleIdx}`);
    const nextBtn = document.getElementById(`slider-next-${moduleIdx}`);
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === total - 1;
}

function prevSlide(moduleIdx) {
    if (moduleSlideStates[moduleIdx] > 0) {
        moduleSlideStates[moduleIdx]--;
        updateSlider(moduleIdx);
    }
}

function nextSlide(moduleIdx) {
    const track = document.getElementById(`slider-track-${moduleIdx}`);
    if (track && moduleSlideStates[moduleIdx] < track.children.length - 1) {
        moduleSlideStates[moduleIdx]++;
        updateSlider(moduleIdx);
    }
}

function goToSlide(moduleIdx, slideIdx) {
    moduleSlideStates[moduleIdx] = slideIdx;
    updateSlider(moduleIdx);
}

// Expose globally
window.courseNotesMap = courseNotesMap;
window.moduleSlideStates = moduleSlideStates;
window.updateSlider = updateSlider;
window.prevSlide = prevSlide;
window.nextSlide = nextSlide;
window.goToSlide = goToSlide;
