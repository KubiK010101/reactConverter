import React, {useState} from 'react';

const useInput = () => {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const inputObj = {
      value,
      onChange
  };
  return inputObj;
}

export default useInput;