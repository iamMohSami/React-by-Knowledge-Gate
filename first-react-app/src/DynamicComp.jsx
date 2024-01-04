function DynamicComp() {
  let myName = "Mohammad Sami";
  let myAge = 20;
  let myClg = "IIIT Surat";

  return (
    <div>
      <h3>Hello Everyone..! Myself {myName}</h3>
      <h3>
        I am {myAge} years old and I study in {myClg}
      </h3>
    </div>
  );
}

export default DynamicComp;
