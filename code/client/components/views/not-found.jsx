NotFound = React.createClass({
  render() {
    return <div className="not found">
    <AppHeader mainText="crash, clang, KA-BANG" subHeading="your space adventure has ended tragically"/>
    <GridRow>
      <GridColumn className="col-xs-12 col-sm-8 col-sm-offset-2">
	      <DangerAlert>
	      	<strong>Error [404]</strong>: { FlowRouter.current().path } does not exist.
	      </DangerAlert>
      </GridColumn>
    </GridRow>
    </div>;
  }
});
