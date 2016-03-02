SinglePost = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let sub = Meteor.subscribe( 'singlePost', this.props.slug );

    return {
      post: Posts.findOne( { slug: this.props.slug } ),
      ready: sub.ready()
    };
  },
  render() {
    let { formatLastUpdate } = ReactHelpers

    if ( !this.data ) { return <div />; }
    return <div className="singlepost">
    <AppHeader mainText={this.data.post.title} subHeading={this.data.post.author}/>
    <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <Post singlePost={ true } post={ this.data.ready && this.data && this.data.post } />
      </GridColumn>
    </GridRow>
    </div>;
  }
});
