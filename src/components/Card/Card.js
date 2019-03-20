import React from 'react';
import './Card.css';

const Card = (props) => {

  //get time function will add up all the times from the props item(s)
  let totalTime = getTime();
  function getTime() {
    let total = 0;
    for (let x in props.items) {
      total += parseInt(props.items[x].time); // convert string to int
    }
    return formatTime(total); // return total amount of time as a number
  }

  // formatTime() will take in a number of minutes and return a formatted HH:MM time string
  function formatTime(time) {
    if (time < 60) {
      if (time < 10) {
        return `0:0${time}`;
      } else {
        return `0:${time}`;
      }
    } else {
      let hrs = Math.floor(time / 60);
      let min = time % 60;
      if (min === 0) {
        return `${hrs}:${min}0`;
      } else {
        return `${hrs}:${min}`;
      }
    }
  }

  //create a list inside of the card,
  //sort the items object first,
  //then map over it creating a new div in the cards body
  let list = props.items.sort(function (a, b) {
    return b.time - a.time
  }).map((itm, idx) => {
    return (
      <div className='card-body' key={idx}><span className='item-time'>{formatTime(itm.time)}</span>&nbsp;&nbsp;&nbsp;<span className='item-color'>{itm.desc}</span></div>
    )
  })

  return (
    <div className="card">
      <div className='card-header'><h1>{props.type}</h1>
        <h3 className='time'>{totalTime}</h3>
      </div>
      {list}
    </div>
  );

}

export default Card;
