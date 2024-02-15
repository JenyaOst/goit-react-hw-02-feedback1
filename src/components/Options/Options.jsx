import React, { Component } from 'react'
import css from './Options.module.css';

export class Options extends Component {
  render() {
    return (
      <div className={css['btn-block']}>
        {this.props.options.map(option => {
          return (
            <button
              key={option}
              type="button"
              className={css.button}
              onClick={() => this.props.onLeaveFeedback(option)}
            >
              {option}
            </button>
          )
        })}
      </div>
    )
  }
}