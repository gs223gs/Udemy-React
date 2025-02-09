const TodoForm = ({ handleSubmit, onChange, value}) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input type="text" onChange={onChange} value={value} />
        <input type="submit" value="送信" />
      </form>
    </div>
  );
};

export default TodoForm;
