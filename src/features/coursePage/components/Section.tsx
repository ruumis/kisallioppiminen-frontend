import React from 'react'

const Section = ({ header, renderSection, selected }: { header: string; renderSection: () => void; selected: boolean }) =>
  selected ? (
    <div style={{ backgroundColor: '#30A491' }} className="section" onClick={renderSection}>
      {header}
    </div>
  ) : (
    <div className="section" onClick={renderSection}>
      {header}
    </div>
  )

export default Section
