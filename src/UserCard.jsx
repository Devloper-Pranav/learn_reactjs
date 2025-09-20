import React from 'react'

export default function UserCard(props) {
    console.log(props);

    //const {name, age, email} = props; //destructure

  return (
    <>
    <h1>Hello {props.name} {props.designation} </h1>

    {/* Example 2 */}
    {/* <h2>Name: {name}</h2>
    <p>Age: {age}</p>
    <p>Email: {email}</p> */}
    </>
  )
}
