```javascript
// bugSolution.js

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // Functional update
    console.log(count); // Now, this will show the CORRECT updated value (although not immediately)
  };

  // Or, use useEffect for side effects after state update:
  useEffect(() => {
    console.log('Updated count:', count); // This will log the count after update
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```