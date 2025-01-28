```javascript
import { useState, useEffect } from 'react';
import isEqual from 'lodash.isequal'; // Or any other deep comparison library

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use deep comparison
    if (!isEqual(props.someObject, prevProps.someObject)) {
      console.log('Objects are different');
    }
  }, [props.someObject]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```