# React 19 useEffect Shallow Comparison Bug

This repository demonstrates a subtle bug related to shallow comparisons within the `useEffect` hook in React 19 when dealing with objects.  Incorrectly comparing objects directly within the dependency array can lead to unexpected behavior, such as infinite loops.

## Bug Description
The issue arises when comparing objects in the `useEffect` dependency array.  React's shallow comparison does not work as expected for objects; it compares references instead of values.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console logs and the component's behavior.

## Solution
The correct way to compare objects within useEffect is to use a deep comparison library or a custom comparison function that checks for changes in the object's properties instead of relying on reference equality.  This ensures that the effect only runs when the object's content actually changes, avoiding infinite loops or unnecessary re-renders.

## License
MIT