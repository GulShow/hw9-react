import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseMenu: true
    };

    this.showHide = this.showHide.bind(this);
  }

  showHide(e) {
    e.preventDefault();

    this.setState({
      collapseMenu: !this.state.collapseMenu
    });
  }

  render() {
    return (
      <div className="container">
        <p>
          <a
            onClick={this.showHide}
            className="btn btn-primary"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Link with href
          </a>
          <button
            onClick={this.showHide}
            className="btn btn-primary"
            type="button"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Button with data-target
          </button>
        </p>
        <Collapse in={!this.state.collapseMenu}>
          <div className="card card-body">
            {this.props.text}
          </div>
        </Collapse>
      </div>
    );
  }
}

MyComponent.propTypes = {
    text: PropTypes.string
}

export default MyComponent;