AppFooter = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {};
  },
  render() {
    return <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <ul className="list-inline text-center">
                                <li>
                                    <a href="https://plus.google.com/u/0/104657331697393504885/posts">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-google-plus fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/clark-beverlin-06053335">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/bigangryrobot">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-github-alt fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="skype:theuniverseistoast?call">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-skype fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#l">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-rebel fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <p className="copyright text-muted">Copyright &copy; the universe is toast 2016</p>
                        </div>
                    </div>
                </div>
            </footer>;
  }
});
