const Input = (props: { inputValue: number;
    setNewValue :(btValue: number)=>void }) => {
  return (
    <input
      value={props.inputValue}
      onChange={(e) => {
        console.log('e',e.target.value);
        props.setNewValue(parseInt(e.target.value));
      }}
    />
  );
};

export default Input;
