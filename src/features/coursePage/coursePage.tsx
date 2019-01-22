import React from 'react'
import { InitialState } from '../../types/InitialState'
import Navigation from '../frontpage/Navigation'
import Hero from '../frontpage/Hero'
import Definition from './components/Definition'
import Chapter from './components/Chapter'

export function coursePage(initialState: InitialState) {
  return (
    <div >
      <Navigation />
      <Hero />
      {/* Saatavilla olevat kurssit: */}
      <Definition />
      <br />
      <Chapter />
    </div>
  )
}
