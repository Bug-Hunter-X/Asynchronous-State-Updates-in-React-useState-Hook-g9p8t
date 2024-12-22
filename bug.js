```javascript
// In a React component

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // Potential issue here
    console.log(count); // This might show the OLD value of count
  };

  return (
    <div>
      <p>Count: {count}</p> 
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```