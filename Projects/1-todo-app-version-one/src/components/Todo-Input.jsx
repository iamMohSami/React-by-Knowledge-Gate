function TodoEnter() {
  return (
    <div class="row my-4 ">
      <div className="col-5">
        <input type="text" placeholder="Enter Todo Here" />
      </div>
      <div className="col-4">
        <input type="date" name="date" id="date" />
      </div>
      <div className="col-3">
        <button type="button" class="btn btn-success mybtn">
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoEnter;
