import { createContext, useContext } from "react";

const Store = createContext();

function Grandchild() {
  const data = useContext(Store);
  return <h1>My name is: {data}</h1>;
}

function Child() {
  return <Grandchild />;
}

function Parent() {
  return <Child />;
}

export default function ContextApiDemo() {
  return (
    <Store.Provider value="Meghna">
      <Parent />
    </Store.Provider>
  );
}