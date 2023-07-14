import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { title, options } = this.props;

    return (
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={this.toggleDropdown}>
          {title}
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map(option => (
              <li key={option.value} onClick={() => this.props.onSelect(option.value)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
