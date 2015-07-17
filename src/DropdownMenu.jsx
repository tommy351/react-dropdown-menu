import React from 'react';

class DropdownMenu extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      offset: {}
    };
  }

  componentDidMount(){
    this.updatePosition();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render(){
    const {offset} = this.state;

    return (
      <ul {...this.props} ref="menu" style={{top: offset.y, left: offset.x}}>
        {this.props.children}
      </ul>
    );
  }

  handleWindowResize(){
    this.updatePosition();
  }

  updatePosition(){
    const menu = React.findDOMNode(this.refs.menu);
    const menuRect = menu.getBoundingClientRect();
    const parent = menu.parentNode;
    const parentRect = parent.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let x = parentRect.left;
    let y = parentRect.bottom;

    if (x + menuRect.width > windowWidth){
      x = x - menuRect.width;
    }

    if (y + menuRect.height > windowHeight){
      y = y - menuRect.height;
    }

    this.setState({
      offset: {x, y}
    });
  }
}

export default DropdownMenu;
