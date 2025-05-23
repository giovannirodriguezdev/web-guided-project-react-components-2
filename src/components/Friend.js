import React from 'react'
import PetsList from './PetsList'

export default function Friend(props) {
  // 👉 1- What does a Friend need?


  return (
    <div className='friend-friends container'>
      {/* 👉 2- Fix the JSX so it displays real info coming into the component */}
      <div className='friend-info'>
        <div >
          <h3>Name: {props.friend.name}</h3>
          <p>Age: {props.friend.age}</p>

          <p>Married: {props.friend.married ? "Yes" : "No"} <button onClick={() => props.changeStatus(props.friend.id)}>change</button></p>
          <div>Likes:
            <ul>
              {/* 👉 3- Loop over the friend's hobbies and generate <li/> elements as you go */}
              {props.friend.hobbies.map((hobby, idx) => {
                return <li key={idx}>{hobby}</li>
              })}
            </ul>
          </div>
        </div>

        <div>
          {/* 👉 3- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? */}
          {/* Is the data around here somewhere so I may pass it? */}
          <PetsList />
        </div>
      </div>
    </div>
  )
}
