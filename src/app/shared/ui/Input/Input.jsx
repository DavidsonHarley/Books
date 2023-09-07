import React from 'react';

export default function Input({ props }) {
  const {
    type,
    className,
    onChange,
    placeholder,
    value,
    name,
  } = props;
  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      name={name}
    />

  );
}
