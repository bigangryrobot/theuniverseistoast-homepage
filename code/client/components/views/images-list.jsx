ImagesList = React.createClass({ 
  render() {
    return <div className="images">
    <AppHeader/>
    <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
        <PageHeader size="h4" label="Gallery" />
        <div id="blueimp-gallery" className="blueimp-gallery">
            <div className="slides"></div>
            <h3 className="title"></h3>
            <a className="prev">‹</a>
            <a className="next">›</a>
            <a className="close">×</a>
            <a className="play-pause"></a>
            <ol className="indicator"></ol>
        </div> 
        <div id="links">
            <a href="/header-background.jpg" title="Banana" data-gallery>
                <img className="thumbnail" src="/header-background.jpg" alt="Banana" height="42" width="42"/>
            </a>
            <a href="/header-background.jpg" title="Apple" data-gallery>
                <img className="thumbnail" src="/header-background.jpg" alt="Apple" height="42" width="42"/>
            </a>
            <a href="/header-background.jpg" title="Orange" data-gallery>
                <img className="thumbnail" src="/header-background.jpg" alt="Orange" height="42" width="42"/>
            </a>
        </div>
      </GridColumn>
    </GridRow>
    </div>;
  }
});
