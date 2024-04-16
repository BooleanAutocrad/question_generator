'use client'
import { useState } from "react";
import "./add-context-style.css";
import Dropdown from 'react-bootstrap/Dropdown';
const page = () => {

  const [selectedOption, setSelectedOption] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTextareaChange = (event) => {
    setTextValue(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dropdown value:', selectedOption);
    console.log('Text area value:', textValue);
  };

  const clearClicked = () => {
    setSelectedOption('');
    setTextValue('');
  }


  return (
      <div className="container">
        <form onSubmit={handleSubmit}>

          <select value={selectedOption} onChange={handleDropdownChange}>
            <option value="">Select an option</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Electrical">Electrical</option>
          </select>

          <textarea
            value={textValue}
            onChange={handleTextareaChange}
            placeholder="Enter context here"
          />

          <div>
            <button type="submit">Submit</button>
            <button className="clearButton" onClick={clearClicked}>Clear</button>
          </div>

          
        </form>
      </div>
  )
}

export default page
