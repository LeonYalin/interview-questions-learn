import { delimeterMsg, logF, logToHTML } from "./utils";

function reactQuestions() {
  logToHTML(`
    React questions:

    =========================================================
      
    - Major features of React:

    -> - VirtualDOM
      - Server-Side Rendering
      - Unidirectional data flow (data binding)
      - reusable/composable UI components
      - JSX
    
    =========================================================

    - Component types in React:

    -> - Function components: via function, react hooks
      - Class components: via class + lifecycle methods
      - Pure components: react handles shouldComponentUpdate for us, via shallow comparison on props & state
    
    =========================================================

    - State:

    -> - State object in class component or a useState react hook
      - Use setState and not directly work on the state object because it won't rerender
      - 'setState' is async, it uses a callback function
    
    =========================================================

    - How to bind methods or event handlers in JSX callbacks:

    -> - Binding in Constructor:
        this.handleClick = this.handleClick.bind(this);
      - Public class fields:
        handleClick = () => {
          console.log('this is:', this)
        }
      - Arrow functions in callbacks:
      <button onClick={() => this.handleClick()}>Click Me</button>

    - Ref and forwardRef:

    -> - Ref is reference to DOM element. Can be created using
      <div ref={this.myRef} />
      this.myRef = React.createRef()
      - Forward ref is a technique to pass ref inside another component
    
    =========================================================

    - Controlled components:

    -> - Controlled components are those who receive their value from parent via props.
      - Uncontrolled components are those who store their state internally
    
    =========================================================

    - High order components:

    -> - HOC components take a component as parameter and return a new, modified component. (a.k.a decorators)
    
    =========================================================

    - Children prop:

    -> - Children is a prop "this.props.children" that allows passing html content to component (like <ng-content>).
    
    =========================================================

    - Portals:

    -> - Portals are places to dynamically inject content "ReactDOM.createPortal(child, container)" (like <ng-template #tpl>)
    
    =========================================================

    - Props validation:

    -> - PropTypes are used to check a component's props types
      User.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
      }
    
    =========================================================

    - Error boundaries:

    -> - Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors and display a fallback UI
      class ErrorBoundary extends React.Component {
        constructor(props) {
          super(props)
          this.state = { hasError: false }
        }
      
        componentDidCatch(error, info) {
          // You can also log the error to an error reporting service
          logErrorToMyService(error, info)
        }
      
        static getDerivedStateFromError(error) {
          // Update state so the next render will show the fallback UI.
          return { hasError: true };
        }
      
        render() {
          if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>{'Something went wrong.'}</h1>
          }
          return this.props.children
        }
      }

      <ErrorBoundary>
        <MyWidget />
      </ErrorBoundary>

    =========================================================

    - Props validation:

    -> - PropTypes are used to check a component's props types
      User.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
      }

    =========================================================

    - Render props:

    -> - Render props is a technique for sharing code between components by passing the value as a function.
      <DataProvider render={data => (
        <h1>{\`Hello \${data.target}\`}</h1>
      )}/>

    =========================================================

    - Redux:

    -> - 3 core Redux principles:
      - Single source of truth
      - State is read-only
      - Changes are made with pure functions
      - "redux-saga" or "redux-thunk" can be used for handling side-effects (a.k.a "effects" in NGRX) 
    `);
}

export default function react() {
  delimeterMsg('REACT');
  logF(reactQuestions);
}