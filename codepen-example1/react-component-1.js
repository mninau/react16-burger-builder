// React component
function Person(props) {
  return (
    <div class="hello-world">
      <b>{props.name} dice:</b>
      <p>Hola {props.person}!</p>
      </div>
  );
}
 
// Print html
ReactDOM.render(<Person name="Marta" person="mundo"/>, document.querySelector('#p1'));
ReactDOM.render(<Person name="Mundo" person="marta"/>, document.querySelector('#p2'));