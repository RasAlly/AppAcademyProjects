import React from "react";

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabIdx: 0};
    }

    render() {
        return(
            <div>
                <h1>Tabs</h1>
                <ul>
                    {this.props.tabsArr.map(tab => (
                        <h2>{tab.title}</h2>
                        // <article>{tab.content}</article>
                    ))}
                </ul>
            </div>

        )
    }
}

export default Tabs;