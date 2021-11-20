import React from 'react'

export default function Default ({ message }) {
  return (
<div className="alert alert-secondary alert-dismissible fade show" role="alert">
 {message}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
</div>

  )
}
