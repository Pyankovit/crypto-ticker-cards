import React from 'react';
import Select from 'react-select';
import { storedData } from './data.js';

export default () => (
  <Select 
    defaultValue={[storedData[2], storedData[3]]}
    isMulti
    name="colors"
    options={storedData}
    className="basic-multi-select"
    classNamePrefix="select"
    getOptionLabel={({ name }) => name}
    getOptionValue={({ symbol }) => symbol}
  />
);