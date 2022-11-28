export const RadioButtons = ({ changeHandler }) => {
  const clickHandler = (e) => {
    const newPicture = e.target.value;
    changeHandler(newPicture);
  };

  return (
    <div>
      <form onClick={clickHandler}>
        <label>
          <input type="radio" name={1} value="dawn" />
          Dawn
        </label>
        <label>
          <input type="radio" name={1} value="morning" />
          Morning
        </label>
        <label>
          <input type="radio" name={1} value="afternoon" />
          Afternoon
        </label>
        <label>
          <input type="radio" name={1} value="night" />
          Night
        </label>
      </form>
    </div>
  );
};
