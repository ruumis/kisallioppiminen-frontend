import React from 'react'
import Link from './Link'
import userService from '../../services/userService'
import { InitialState, User } from '../../types/InitialState'
import { fetchUser } from '../../reducers/actions/pageStateActions'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
interface Props {
  user: User | null
  fetchUser: () => Promise<void>
}

class Navigation extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchUser()
  }

<<<<<<< d3e24c0a91724a74cc570c737ba8403f536b0cf7
  render() {
    const url = process.env.NODE_ENV === 'PRODUCTION' ? 'http://localhost:8000/users/auth' : 'http://localhost:8000/users/auth'
    const { user } = this.props
    return (
      <nav className="navigator">
        <ul>
          <li className="navigator-item">
            <Link className="navigator-link" href="/">
              Materiaalit
            </Link>
          </li>
          <li className="navigator-item">
            <a className="navigator-link" href="https://blogs.helsinki.fi/kisallioppiminenlukiossa/">
              Blogi
            </a>
          </li>
          <li className="navigator-item">
            <Link className="navigator-link" href="/tietoa">
              Tietoa
            </Link>
          </li>
          {user ? (
            <li className="navigator-item">
              <a className="navigator-link" href={url}>
                {`Hei, ${user.name}`}
              </a>
              <div className="dropdown-content">
                <a href="/courseAdmin">Kurssihallinta</a>
                <a href="/omat">Omat kurssit</a>
                <a href="/">Kirjaudu ulos</a>
              </div>
            </li>
          ) : (
            <li className="navigator-item">
              <div className="dropdown">
                <a className="navigator-link" href={url} onClick={setUser()}>
                  Kirjautuminen
                </a>
                <div className="dropdown-content">
                  <a href="/courseAdmin">Kurssihallinta</a>
                  <a href="/omat">Omat kurssit</a>
                  <a href="/">Kirjaudu ulos</a>
                </div>
              </div>
            </li>
          )}
        </ul>
      </nav>
    )
  }
}
=======
export function Navigation() {
  return (
    <nav className="navigator">
      <ul>
      <li className="navigator-item">
          <a className="navigator-link" href="/courseAdmin">
            Kurssihallinta
          </a>
        </li>
        <li className="navigator-item">
          <Link className="navigator-link" href="/courseAdmin">
            Kurssihallinta
          </Link>
        </li>
>>>>>>> add link to courseAdmin (conditional rendering needed later)

const setUser = () => {
  return () => {
    const foo = userService.login()
    console.log(foo)
    return undefined
  }
}
const mapStateToProps = (state: { pageState: InitialState }) => ({
  user: state.pageState.pageParams.user
})
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  fetchUser: async () => {
    await dispatch(fetchUser())
  }
})

const ConnectedNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default ConnectedNavigation
