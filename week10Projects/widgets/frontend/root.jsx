import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const Root = (props) => {
    
    let tabsArr = [
        {title: "2", content: "y"},
        {title: "3", content: "2"},
        {title: "3", content: "y"}
    ];

        return(
            <div>
                <Clock />
                <Tabs tabsArr={tabsArr} />
            </div>
        )
}


export default Root;