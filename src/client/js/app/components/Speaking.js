import React from 'react';
import acss from '../utils/acss';
import EngagementsList from './EngagementsList'

const engagements = [
  {
    conference: "Little Rock Tech Fest",
    date: "October 21-22, 2016",
    title: "From Muggle to Software Engineer",
    abstract: "Bootcamp attendance is on the rise as more and more people are considering a career in software development. How does one go about actually learning how to program? How do you break into the market and convince someone to hire you?? In this talk, I will share my path from self learning to bootcamp to actual paid software engineer, and leave attendees with some advice on next steps on their own journey."
  },
  {
    conference: "Barcamp X",
    date: "October 15, 2016",
    title: "Mentee/Mentor Mashup",
    abstract: "In this interactive session, we will uncover where we can mentor and where we need mentorship in our lives! We will have a speed dating match maker session and hopefully have some attendees leave with a new mentor or mentee!! You don't have anything to offer though, right? WRONG. We all have something to offer. No matter where you are on the ladder of life, someone is one rung behind you and needs a hand up."
  }
]

export default class Speaking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      engagements
    };
  }
  render() {
    return (
      <div>
        <h1>My Speaking Engagements</h1>
        <EngagementsList engagements={this.state.engagements} />
      </div>
    );
  }
}
