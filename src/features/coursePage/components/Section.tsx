import React, { useState } from 'react'

const Section = ({ header, renderSection, selected }: { header: string; renderSection: number; selected: boolean }) => {
  const [coursePageTab, setCoursePageTab] = useState(1)

  return (
    selected ? (
      <div style={{ backgroundColor: '#30A491' }} className="section" onClick={() => setCoursePageTab(renderSection)}>
        {header}
      </div>
    ) : (
      <div className="section" onClick={() => setCoursePageTab(renderSection)}>
        {header}
      </div>
    )
  )
}

export default Section
