import React from 'react';

const types = {
  email: {
    regex:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: 'Invalid, please chose a correct email.',
  },
  // REGEX PARA PASSWORD
  // password: {
  //   regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  //   message:
  //     'The password must have at least eight characters and one letter and one number.',
  // },
  number: {
    regex: /^\d+$/,
    message: 'Use only numbers',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validation(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Fill a value.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validation(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validation: () => validation(value),
    onBlur: () => validation(value),
  };
};

export default useForm;
