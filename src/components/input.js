import React from 'react';

export default function Input (){
  return (
    <form>
      <input type="number" placeholder="Enter Your Guess" min="1" max="100"></input>
      <input type="submit" value="Guess"></input>
    </form>
  )
}