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

  render() {
    const url = process.env.NODE_ENV === 'PRODUCTION' ? 'http://localhost:8000/users/auth' : 'http://localhost:8000/users/auth'
    const {user} = this.props
    return (
      <nav className="navigator">
        <ul>
          <li className="navigator-item">
            <Link className="navigator-link" href="/courseAdmin">
              Kurssihallinta
            </Link>
          </li>

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
                {`Hei, ${user.name}` }
              </a>
            </li>
          ) : (
            <li className="navigator-item">
              <a className="navigator-link" href={url} onClick={setUser()}>
                Kirjautuminen
              </a>
            </li>
          )}
        </ul>
      </nav>
    )
  }
}

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
