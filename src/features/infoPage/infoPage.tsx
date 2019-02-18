import React from 'react'
import { connect } from 'react-redux'
import Chapter from '../coursePage/components/Chapter'

export function infoPage() {
  const app = () => {
    return (
      <div className="infoPageContainer">
        <div className="infoPageContainer-heading">
          <h2 className="infoPageContainer-subheading">Tietoa sivusta</h2>
          <p>todo</p>
        </div>
        <Chapter header="MITÄ ON TEHOSTETTU KISÄLLIOPPIMINEN?">
          <div>
            <p>todo</p>
          </div>
        </Chapter>
        <Chapter header="BETA-KURSSIHALLINTAPALVELU">
          <div>
            <p>todo</p>
          </div>
        </Chapter>
        <Chapter header="MITÄ OVAT AVOIMET OPPIMATERIAALIT?">
          <div>
            <p>todo</p>
          </div>
        </Chapter>
        <Chapter header="TIETOA TEKIJÖISTÄ">
          <div>
            <p>todo</p>
          </div>
        </Chapter>
      </div>
    )
  }

  const ConnectedInfoPage = connect()(app)

  return <ConnectedInfoPage />
}
