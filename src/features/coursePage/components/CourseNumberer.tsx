import React from 'react'
import { filterChildren, mapChildren } from 'idyll-component-children'

/* const filtteri = (children: any) => {
  if (children) {
    return filterChildren(children, (c: any) => {
      console.log(c)
      if (c.props.children && c.props.children.length) {
        console.log('menee')
        filtteri(c.props.children)
      }
      return true
    })
  }
} */

const CourseNumberer = (props: any) => {
  // const arr = filterChildren(props.children, (c: any) => {
  //   return c.type.name && c.type.name.toLowerCase() === 'connect'
  // })

  /* filtteri(props.children) */

  // const arr2 = mapChildren(arr, (c: any) => {
  //   console.log(c)
  // if (c.props.children) {
  //   c.props.children.push('jotai')
  // }
  //   return c
  // })

  // console.log(arr2)

  return <div>{props.children}</div>
}

export default CourseNumberer
