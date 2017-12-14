import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const style = {
  menu: {
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    left: '0px',
    width: '250px',
    paddingBottom: '1em',
    overflowY: 'scroll',
    borderRadius: '0'
  }
}

export default class SideMenu extends Component {
  // handleItemClick = name => this.setState({ activeItem: name })

  handleItemClick(name) {
    return this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu vertical fixed inverted left style={style.menu}>
        <Menu.Item>
          <Menu.Header>Sorting</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='Bubble' active={activeItem === 'enterprise'} onClick={this.handleItemClick} />
            <Menu.Item name='Insertion' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
            <Menu.Item name='Merge' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
            <Menu.Item name='Quick' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
            <Menu.Item name='Selection' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
            <Menu.Item name='Heap' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Searching</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='Binary' active={activeItem === 'rails'} onClick={this.handleItemClick} />
            <Menu.Item name='Interpolation' active={activeItem === 'python'} onClick={this.handleItemClick} />
            <Menu.Item name='php' active={activeItem === 'php'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

      </Menu>
    )
  }
}
