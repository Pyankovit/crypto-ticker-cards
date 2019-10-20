import React from 'react';
import Select from 'react-select';
///import { colourOptions } from './Tickers'; 
let myOptions = [
  { id: 'chocolate', name: 'Chocolate', symbol: 'Chocolate' },
  { id: 'strawberry', name: 'Strawberry', symbol: 'Strawberry' },
  { id: 'vanilla', name: 'Vanilla', symbol: 'Vanilla' },
];
 
export default class SortableSelect extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    console.log(myOptions);
  };
  render() {

    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={myOptions}
        multi
        getOptionLabel={({ name }) => name}
        getOptionValue={({ symbol }) => symbol}
      />
    );
  }
}