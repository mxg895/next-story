import MuiSelect from '@material-ui/core/Select';
import React from 'react';

const Select: React.FC = () => {

  return (
    <MuiSelect variant='outlined' native>
      {/* Placeholder options -- to be replaced with real data once we have them */}
      <option value={1}>Option 1</option>
      <option value={2}>Option 2</option>
    </MuiSelect>
  );
};

export default Select;
