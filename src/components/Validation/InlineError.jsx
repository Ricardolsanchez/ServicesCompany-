import React from 'react'
import "./Validation.css";

function InlineError({ error }) {
  return (
    <div className='error-message'>
      <p className='my-1 text-sm text-re-600 font-subMain font-medium error-message'>{error}</p>
    </div>
  )
}

export default InlineError