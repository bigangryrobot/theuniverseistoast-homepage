Post = React.createClass({
  getPostTitle() {
    let post = this.props.post;
    
    if ( this.props.singlePost ) {
      return <h4 className="post-title">{ post.title }</h4>;
    } else {
      return <h4 className="post-title"><a href={ `/posts/${ post.slug }`}>{ post.title }</a></h4>;
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
          return <a className="tag" href={ `/tags/${ tag }` }>#{ tag }</a>;
        })}
      </div>;
    }
  },
  render() {
    let { formatLastUpdate } = ReactHelpers,
        post                 = this.props.post;

    return <div className="post-preview">
      { this.getPostTitle() }
      <div className="post-body" dangerouslySetInnerHTML={ this.getHTML( post.content ) } />
      <p className="post-meta"><strong>Last Updated:</strong> { formatLastUpdate( post.updated ) } by { post.author }</p>
      { this.renderTags( post.tags ) }
    </div>;
  }
});
