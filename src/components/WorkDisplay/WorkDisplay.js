import React from 'react';
import Card from '../Card/Card';
import './WorkDisplay.css';

const WorkDisplay = (props) => {

  //pass through-filters out each time here, passes down into the card level
  let personal = props.items.filter((x => x.type === 'personal'));
  let work = props.items.filter((x => x.type === 'work'));

  return (
    <div className="workdisplay">
      <Card items={personal} type='Personal' />
      <Card items={work} type='Work' />
    </div>
  );

}

export default WorkDisplay;
