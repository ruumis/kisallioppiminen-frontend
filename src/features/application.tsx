import React, { useState } from 'react'
import { InitialState, CoursePageState } from '../types/InitialState'
import Footer from './baseComponents/Footer'
import Navigation from './baseComponents/Navigation'
import Hero from './baseComponents/Hero'
import { getPage, watchPageChanges } from '../routes'
import { Provider, connect } from 'react-redux'
import { initStore } from '../reducers/store'

export function createApp(initialState: { pageState: InitialState; coursePageState: CoursePageState }) {
  const store = initStore(initialState)
  watchPageChanges(store)

  const mapStateToProps = (state: { pageState: InitialState; coursePageState: CoursePageState }) => {
    return { initialState: state.pageState }
  }

  const app = (props: { initialState: InitialState }) => {
    const [location, setLocation] = useState('')

    const { initialState: state } = props
    const page = resolvePageToRender(state, location, setLocation)
    return (
      <React.Fragment>
        <Navigation />
        <Hero location={location} />
        {page}
        <Footer />
      </React.Fragment>
    )
  }

  const ConnectedApp = connect(mapStateToProps)(app)

  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  )
}

function resolvePageToRender(initialState: InitialState, location: string, setLocation: any) {
  const { pageParams } = initialState
  const { path } = pageParams
  const page = getPage(path)

  // Hero sijaitilogiikkaa:
  console.log(initialState.pageParams.pathParams)
  const courses = initialState.courses

  if (initialState.pageParams.path !== '/') {
    let id: string

    // 50ms timeout saattaa olla riittämätön, jos on todella hidas kone?
    setTimeout(() => {
      id = initialState.pageParams.pathParams.id

      const course = courses.find(kurssielementti => {
        return kurssielementti.id === id
      })

      if (course) {
        console.log('You are in course page ', id, course.courseName)
        if (location !== course.courseName) {
          setLocation(course.courseName)
        }
      }
      console.log('you are in course page (could not find course)')
    }, 50)
  } else {
    console.log('You are in frontpage!')
    if (location !== 'Etusivu') {
      setLocation('Etusivu')
    }
  }

  // End lokaatiologiikkaa

  if (page === undefined) {
    return <h1>404 Not found :(</h1>
  }

  initialState.pageParams.pathParams = page.pathParams

  return page.component()
}
