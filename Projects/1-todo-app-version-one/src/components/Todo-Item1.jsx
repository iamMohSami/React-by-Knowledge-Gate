function Item1() {
  let item = "Buy Milk";
  let date = "4/10/2023";

  return (
    <div class="row my-4">
      <div class="col-5">{item}</div>
      <div class="col-4">{date}</div>
      <div class="col-3">
        <button type="button" className="btn btn-danger mybtn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item1;
