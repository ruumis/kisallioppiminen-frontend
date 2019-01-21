import React from 'react'
import { InitialState } from '../../types/InitialState'
import Navigation from '../frontpage/Navigation'
import Hero from '../frontpage/Hero'

export function frontPage(initialState: InitialState) {
  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  )
}
