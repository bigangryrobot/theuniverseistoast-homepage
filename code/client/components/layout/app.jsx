App = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      loggingIn: Meteor.loggingIn(),
      hasUser: !!Meteor.user(),
      isPublic( route ) {
        return [
          'index',
          'singlePost',
          'tagIndex',
          'login',
          'recoverPassword',
          'resetPassword',
          'notFound'
        ].indexOf( route ) > -1;
      },
      canView() {
        return this.isPublic( FlowRouter.getRouteName() ) || !!Meteor.user();
      }
    };
  },
  renderHeader() {
    return <header className="intro-header">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="site-heading">
                        <h1>fire up the broadband</h1>
                        <hr className="small"/>
                        <span className="subheading">lets make some toast</span>
                      </div>
                    </div>
                   </div>
                </div>
              </header>;
  },  
  getView() {
    return this.data.canView() ? this.props.yield : <Login />;
  },
  render() {
    return <div className="app-root">
      <AppNavbar hasUser={ this.data.hasUser } />
        { this.renderHeader() }
        { this.data.loggingIn ? <Loading /> : this.getView() }
      <AppFooter/>
    </div>;
  }
});
