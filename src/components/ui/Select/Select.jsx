export const Select = ({options, defaultValue, selectedValue, onChange}) => {

  return (
  <div>
    <select value={selectedValue} style={{ marginTop: 20 }} onChange={onChange}>
      <option disabled value="">{defaultValue}</option>
      {options.map((option) => 
        <option key={option.value} value={option.value}>{option.name}</option>
        )}
    </select>
  </div>);
};
