import React from 'react'
import Button from './Button';

const ButtonList = () => {

  const name = ["All","Tech", "Gaming", "React", "Live", "Music", "Podcast", "College"]
  return (
    <div className='flex'>
      {
        name.map((button, index)=> (
          <Button button={button} key={index}/>
        ))
      }

    </div>
  )
}

export default ButtonList;