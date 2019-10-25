import React from 'react';

import Select from 'react-select';
import { colourOptions } from './data.js';

export default () => (
  <Select
    isMulti
    name="colors"
    options={storedData}
    className="basic-multi-select"
    classNamePrefix="select"
    getOptionLabel={({ name }) => name}
    getOptionValue={({ symbol }) => symbol}
  />
);