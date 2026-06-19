import React from 'react'
// Create a studentId dashboard(name, id, course, fees) using props

function Student({ name, id, course, fees }) {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <p>Name: {name}</p>
      <p>ID: {id}</p>
      <p>Course: {course}</p>
      <p>Fees: {fees}</p>
    </div>
  )
}

export default Student