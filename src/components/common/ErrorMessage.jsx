import React from 'react'

export default function ErrorMessage(props) {
  return (
    <>
      <span className="text-red-500">{props.msg}</span>
    </>
  );
}
