import React from 'react'
import { InitialState } from '../../types/InitialState'
import Navigation from '../frontpage/Navigation'
import Hero from '../frontpage/Hero'
import Definition from './components/Definition'
import Chapter from './components/Chapter'
import Theorem from './components/Theorem'
import Exercise from './components/Exercise'

export function coursePage(initialState: InitialState) {
  const text = [
  <Definition
    header="Määritelmä"
    text="Lukumäärien ilmaisemiseen käytettäviä lukuja 0, 1, 2, 3, 4, … kutsutaan luonnollisiksi luvuiksi. Luonnollisten lukujen joukkoa merkitään kirjaimella N."
   />,
  <Theorem
    header="Teoreema"
    text="Oletetaan, että a≥0 ja b≥0. Lukujen a ja b neliöjuurten tulo on luvun ab neliöjuuri"
    rationalization="perustelu"
  />,
  <Exercise
    header="Tehtävä 1: Luonnollisten lukujen yhteen- ja kertolasku"
    text="Tee piirros, joka havainnollistaa laskutoimitusta 2+4."
    answer="Placeholder tekstiä"
    open={false}
  />,
  <Exercise
    header="Tehtävä 1: Luonnollisten lukujen yhteen- ja kertolasku, auki"
    text="Tee piirros, joka havainnollistaa laskutoimitusta 2+4."
    answer="Placeholder tekstiä"
    open={true}
  />
]

  return (
    <div >
      <Navigation />
      <Hero />
      <Chapter header="Luonnolliset luvut ja kokonaisluvut (1.1 - 1.8)" text={text} />
    </div>
  )
}
