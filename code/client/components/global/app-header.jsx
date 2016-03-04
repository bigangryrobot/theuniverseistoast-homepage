AppHeader = React.createClass({
  render() {
    if ( this.props.mainText ) {
    return <header className="intro-header" data-stellar-background-ratio="0.5">
                <div className="container">
                  <div className="row">
                        <div className="col-lg-12">
                      <div className="site-heading">
                        <h1>{ this.props.mainText }</h1>
                        <hr className="small"/>
                        <span className="subheading">{ this.props.subHeading }</span>
                      </div>
                    </div>
                   </div>
                </div>
              </header>;
      } else {

        return <header className="intro-header" data-stellar-background-ratio="0.5">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="site-heading">
                            <h1>fire up the broadband</h1>
                            <hr className="small"/>
                            <span className="subheading">lets make some toast</span>
                          </div>
                        </div>
                       </div>
                    </div>
                  </header>;
      }
  }
});
