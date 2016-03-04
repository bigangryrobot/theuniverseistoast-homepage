Image = React.createClass({
  render() {
    return <div className="image">
      <img src={ this.props.imageUri } alt={ this.props.imageAlt } />
    </div>;
  }
});
