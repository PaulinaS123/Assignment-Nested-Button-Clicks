# Nested Button Clicks – Event Propagation Assignment

## Victoria Salomon

## Overview

This project demonstrates event propagation (bubbling) in React using nested elements.
The goal of the assignment is to show how a click event inside a child element can trigger the parent handler, and how to prevent this behavior using `event.stopPropagation()`.

The project was created using Vite + React and includes an outer container and an inner button, each with its own click event handler.

---

## Project Specifications

- React project created with Vite
- Functional component named `NestedButtons.jsx`
- Outer container with click handler
- Inner button with click handler
- Inner handler uses `event.stopPropagation()`
- Alerts and console logs used for feedback
- Component imported into `App.jsx`
- Demonstration includes normal test cases and edge cases

---

## Code Explanation

The component contains two nested elements:

- Outer container (`div`)
- Inner button (`button`)

Each element has its own event handler.

### Outer handler


handleOuterClick()


Runs when the outer container is clicked.

### Inner handler


handleInnerClick(e)


Runs when the inner button is clicked.

Inside this handler:


e.stopPropagation()


This prevents the click event from bubbling to the outer container.

Without this line, both handlers would run.

---

## How to Run the Project

1. Clone the repository


git clone (https://github.com/PaulinaS123/Assignment-Nested-Button-Clicks.git)


2. Go to project folder


cd event-propagation-assignment


3. Install dependencies


npm install


4. Run development server


npm run dev


5. Open the local URL shown in terminal

Example:


http://localhost:5173


---

## Normal Test Cases

### Test Case 1 — Click outer container

Action:
Click outside the button but inside the container

Expected:
Only outer alert appears

Result:
Pass

---

### Test Case 2 — Click inner button

Action:
Click the inner button

Expected:
Only inner alert appears

Result:
Pass

---

### Test Case 3 — Multiple inner clicks

Action:
Click the inner button multiple times

Expected:
Only inner alert appears each time

Result:
Pass

---

## Edge Cases

### Edge Case 1 — Click near the button

Action:
Click inside container but not on button

Expected:
Outer handler runs

Result:
Pass

---

### Edge Case 2 — Remove stopPropagation

Temporary code change:


const handleInnerClick = (e) => {
// e.stopPropagation();
}


Action:
Click inner button

Expected:
Inner handler runs
Outer handler also runs

This shows event bubbling.

Result:
Pass

---

### Edge Case 3 — Rapid clicking

Action:
Click inner button quickly multiple times

Expected:
Only inner handler runs

Result:
Pass

---

## Insights / What I Learned

This assignment helped me understand how event propagation works in React.
I learned that events bubble from child elements to parent elements by default, and that this behavior can be controlled using `event.stopPropagation()`.

I also learned the importance of handling events correctly in nested components, because incorrect handling can cause unexpected behavior in the UI.

Testing different cases helped me understand the difference between normal behavior and edge cases, especially when the stopPropagation line is removed.

