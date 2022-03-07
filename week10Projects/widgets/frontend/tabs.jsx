import React from 'react';
import TabTitle from './tab_title'

class Tabs extends React.Component {
	constructor(props) {
		super(props)
		this.state = {selectedIdx: 0}
		this.selectTab = this.selectTab.bind(this);
	}

	selectTab(num) {
		this.setState({selectedIdx: num});
	}

	render () {
		const currentTab = this.props.tabsArr[this.state.selectedIdx]
		return (
			<div>
				<h1>Tabs</h1>
				<div>
					<TabTitle currentIdx={this.state.selectedIdx} allTabs={this.props.tabsArr} selectTab={this.selectTab}/>
					<div className="tab-content">
						{currentTab.content}
					</div>
				</div>
			</div>
		)
	}
}

export default Tabs;