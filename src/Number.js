export default function Number(props) {
  console.log("Render Number");
  return (
    <div>
      <h2>Counter</h2>
      <p>The number is: {props.number}</p>
    </div>
  );
}
