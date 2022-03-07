import React from 'react';

const TabTitle = (props) => {

  const currentIdx = props.currentIdx

  const titles = props.allTabs.map((tab, index) => {
    const isSelected = currentIdx === index ? 'active' : ''; 
      return (
        <li key={index} className={isSelected} onClick={() => props.selectTab(index)}>{tab.title}</li>
      )
  })

  return (
    <ul>
      {titles}
    </ul>
  )
}

export default TabTitle;