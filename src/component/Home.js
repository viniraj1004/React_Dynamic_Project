import React from 'react'
import Slider from './Slider'
import Courses from './Courses'
import Batches from './Batches'
import About from './About'
import TrainingsModes from './TrainingsModes'
import Welcomehit from './Welcomehit'
import Chooseus from './Chooseus'
import Placements from './Placements'



export const Home = () => {
  return (
    <div>
      <Slider />
      <Welcomehit />
      <Courses />
      <Batches />
      <TrainingsModes />
      <Chooseus />
      <Placements />

    </div>
  )
}
