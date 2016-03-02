OrangeButton = React.createClass({
  render() {
    return <Button
      type={ this.props.type }
      style="orange"
      label={ this.props.label }
      href={ this.props.href }
      onClick={ this.props.onClick }
    />;
  }
});
