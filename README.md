# My-dev-stack-project

A responsive React website for exploring development technologies and building a personal technology stack.

# Technologies Used
- React.js
- Tailwind CSS
- JavaScript (ES6+)
- React-Toastify
- JSON
- Vite

# Features

1. Loads 12 technology records from an external JSON file.
2. Remove individual technologies or clear the complete stack.
3. Responsive layout for desktop, tablet, and mobile.


# 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like UI inside JavaScript. React uses JSX because it makes component UI easier to read and write.

# 2. What is the difference between props and state?
Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

# 3. What does the useState hook do, and where did you use it?
useState creates state in a React component. I used it for the selected technology stack, loading state, and mobile navigation menu.

# 4. What does the useEffect hook do, and why did you need it?
useEffect runs side effects after rendering. I used it to fetch the technology JSON file when the application loads.

# 5. Why does every item in a .map() list need a unique key prop?
React uses the key to identify each item in a list. A unique key helps React update the correct item efficiently when the list changes.

# 6. What is conditional rendering?
Conditional rendering means showing different UI depending on a condition. I used it in the Your Stack section: when the stack is empty, an empty message is shown; otherwise, selected technologies are displayed.

# 7. How do you pass data from a parent to a child, and how does a child send something back?
A parent sends data to a child through props. The parent can also pass a function as a prop, and the child calls that function to send an action or information back to the parent.