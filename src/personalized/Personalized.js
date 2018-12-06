import React, { Component } from "react";
import Cookies from "universal-cookie";

const SLA = 200; // ms to wait before using default bucket

function cookieKey(name) {
  return `_b_${name}`;
}

function getCookie(bucket) {
  const cookie = new Cookies();
  const value = cookie.get(cookieKey(bucket.name));
  if (bucket.choices.indexOf(value) !== -1) {
    return value;
  }
  return null;
}

function setCookie(bucket, choice) {
  const cookie = new Cookies();
  return cookie.set(cookieKey(bucket.name), choice);
}

function fetchChoice(bucket) {
  try {
    return Promise.resolve(bucket.choose());
  } catch (err) {
    return Promise.reject(err);
  }
}

function defaultChoice(bucket) {
  return bucket.choices[0];
}

export default class Personalized extends Component {
  constructor(props) {
    super(props);
    this.state = { choice: null, canceled: false };
  }

  componentWillMount() {
    const choice = getCookie(this.props.bucket);
    if (choice) {
      return this.setState({ choice });
    }
    fetchChoice(this.props.bucket).then(choice => {
      if (this.state.canceled) {
        return;
      }
      setCookie(this.props.bucket, choice);
      this.setState({ choice });
    });
    setTimeout(this.onSLA, SLA);
  }

  onSLA = () => {
    if (this.state.choice === null) {
      this.setState({
        choice: defaultChoice(this.props.bucket),
        canceled: true
      });
    }
  };

  render() {
    const { choice } = this.state;
    const { fallback } = this.props;

    return choice
      ? this.props.children(choice)
      : fallback || <div className="personalized-fallback" />;
  }
}
