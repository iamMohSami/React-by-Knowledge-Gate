function RandomNum() {
  let number = Math.random() * 100;
  return (
    <h1 style={{ "background-color": "#78ff69" }}>
      A Random Number : {Math.round(number)}
    </h1>
  );
}

export default RandomNum;
