import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather'

const Root = (props) => {
    
    const tabsArr = [
        {title: "one", content: "This is the first pane"},
        {title: "two", content: "this is the second pane"},
        {title: "three", content: "this is the third pane"}
    ];

        return(
            <div>
                <Clock />
                <Tabs tabsArr={tabsArr} />
                <Weather />
            </div>
        )
}


export default Root;