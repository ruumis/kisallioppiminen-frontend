import React from 'react'
import Light from './Light'

export default function Scoreboard() {
  return (
    <div className="scoreboard">
      <table>
        <tr>
          <th>username</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
        </tr>
        <tr>
          <td>testi Teppo</td>
          <td><Light color="green" /></td>
          <td><Light color="gray" /></td>
          <td><Light color="yellow" /></td>
          <td><Light color="gray" /></td>
          <td><Light color="gray" /></td>
          <td><Light color="red" /></td>
          <td><Light color="gray" /></td>
          <td><Light color="gray" /></td>
        </tr>
        <tr>
          <td>koehenkilo</td>
          <td><Light color="green" /></td>
          <td><Light color="gray" /></td>
          <td><Light color="gray" /></td>
          <td><Light color="green" /></td>
          <td><Light color="gray" /></td>
          <td><Light color="gray" /></td>
          <td><Light color="red" /></td>
          <td><Light color="yellow" /></td>
        </tr>
      </table>
    </div>
  )
}
