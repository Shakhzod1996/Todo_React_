import React from 'react';
import './Select.css'

export default function Select() {
  return (
    <div>
      <select id="select">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  )
}
