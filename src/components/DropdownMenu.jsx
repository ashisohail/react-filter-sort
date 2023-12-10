import "./DropdownMenu.css";

function DropdownMenu({
  label,
  name,
  optionOne,
  optionTwo,
  dropDownValue,
  handleDropDownChange,
}) {
  return (
    <div className="dropdown-container">
      <label htmlFor="dropDown">{label}</label>
      <select
        onChange={handleDropDownChange}
        value={dropDownValue}
        id="dropDown"
        name={name}
      >
        <option className="invisible" value={dropDownValue} disabled>
          {dropDownValue}
        </option>
        <option value={optionOne}>{optionOne}</option>
        <option value={optionTwo}>{optionTwo}</option>
      </select>
    </div>
  );
}

export default DropdownMenu;
