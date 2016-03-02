PreviewPost = React.createClass({
  getPostTitle() {
    let post = this.props.post;
    
    if ( this.props.singlePost ) {
      return <h1 className="post-title">{ post.title }</h1>;
    } else {
      return <h1 className="post-title"><a href={ `/posts/${ post.slug }`}>{ post.title }</a></h1>;
    }
  },
  getHTML( markdown ) {
    if ( markdown ) {
      return { __html: parseMarkdown( markdown ) };
    }
  },
  renderTags( tags ) {
    if ( tags ) {
      return <div className="tags">
        {tags.map( ( tag ) => {
          return <a className="label label-default" href={ `/tags/${ tag }` }># { tag }</a>;
        })}
      </div>;
    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        post                 = this.props.post;

    return <div className="post-preview">
      <div className="pull-left">{ this.getPostTitle() }</div>
      <div className="pull-right">{ this.renderTags( post.tags ) }</div>
      <div className="clearfix"/>
      <div className="post-body" />
      <p className="post-meta"><strong>Last Updated:</strong> { formatLastUpdate( post.updated ) } by { post.author }</p>
      
    </div>;
  }
});
