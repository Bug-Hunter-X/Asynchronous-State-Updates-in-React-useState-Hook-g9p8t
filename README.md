# Asynchronous State Updates in React useState Hook
This example demonstrates a common issue in React applications involving the asynchronous nature of state updates within the `useState` hook.  The problem arises when you try to access the updated state value immediately after calling `setCount`. Because updates are asynchronous, the value of `count` in the `console.log` statement might not reflect the updated value. This could lead to incorrect calculations or unexpected UI behavior.

## Solution
The solution involves using the updated state value from the functional update mechanism of `useState` or using useEffect hook to schedule side effects after the update completes.  See `bugSolution.js` for implementation.