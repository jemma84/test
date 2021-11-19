export default function Counter(props) {
  console.log("Render Counter");
  return (
    <div>
      <button onClick={props.incr}>Increase</button>
      <button onClick={props.decr}>Decrease</button>
    </div>
  );
}
