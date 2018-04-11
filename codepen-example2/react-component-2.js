// React component
function Conversation(props) {
  return (
    <div class="hello-world">
      <b>{props.name} dice:</b>
      <p>Hola {props.person}!</p>
      </div>
  );
}

var app = (
  <div>
    <Conversation name="Marta" person="mundo"/>
    <Conversation name="Mundo" person="Marta"/>
  </div>
);
 
// Print html
ReactDOM.render(app, document.querySelector('#app'));

