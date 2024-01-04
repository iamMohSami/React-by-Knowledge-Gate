import MyNewButton from "./MyNewButton";
import DynamicComp from "./DynamicComp";
import RandomNum from "./RandomNum";

function Hello() {
  return (
    <div>
      <h1>Hello React..!!</h1>
      <button>Master!</button>
      <MyNewButton></MyNewButton>
      <DynamicComp></DynamicComp>
      <RandomNum></RandomNum>
      <RandomNum></RandomNum>
      <RandomNum></RandomNum>
      <RandomNum></RandomNum>
    </div>
  );
}

export default Hello;
