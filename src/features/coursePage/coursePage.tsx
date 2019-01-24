import React from 'react'
import { InitialState } from '../../types/InitialState'
import Navigation from '../frontpage/Navigation'
import Hero from '../frontpage/Hero'
import Definition from './components/Definition'
import Chapter from './components/Chapter'
import Theorem from './components/Theorem'
import Exercise from './components/Exercise'

export function coursePage(initialState: InitialState) {
  const text = [<Definition header="Määritelmä" text="Hauki on kala" />,
  <Theorem header="Teoreema" text="Jotain syvälllistä" />,
  <Exercise header="Tehtävä 1" text="Laske kolmeen" />]

  return (
    <div >
      <Navigation />
      <Hero />
      <Chapter header="Tämä on luvun otsikko" text={text} />
    </div>
  )
}
