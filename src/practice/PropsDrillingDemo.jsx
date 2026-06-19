function Parent(props) {
  return <Child name={props.name} />;
}

function Child(props) {
  return <Grandchild name={props.name} />;
}

function Grandchild(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default function PropsDrilling() {
  return <Parent name="Aman" />;
}