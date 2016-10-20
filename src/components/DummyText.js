import React, { Component } from 'react';
import './DummyText.scss';

export default class DummyText extends Component {
  constructor(props) {
    super(props);
    const words = props.lengths || Array(props.max || 5).fill(0).map(() => Math.ceil(Math.random() * 8));

    this.state = {
      words
    };
  }

  render() {
    return (
      <span className="dummy-text">
        {this.state.words.map((word, i) => <span key={i} className="dummy-text-word" style={{ width: `${word * 0.7}em` }}></span>)}
      </span>
    );
  }
}
