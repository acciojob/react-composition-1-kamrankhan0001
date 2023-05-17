import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0 // Initialize the active tab as the first tab
    };
  }

  handleTabClick = (index) => {
    this.setState({ activeTab: index });
  };

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
<>
<ul>
    <li>
      <div>
        
        <div className="tab-list">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${index === activeTab ? 'active' : ''}`}
              onClick={() => this.handleTabClick(index)}
            >
              {tab.title}
             
            </div>
          ))}
           
        </div>
        <div className="tab-content">
          {tabs[activeTab].content}
        </div>
        
      </div>
      </li>
      </ul>
      </>
    );
  }
}

export default Tabs;
