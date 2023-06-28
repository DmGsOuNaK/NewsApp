import React, { Component } from 'react';

class NewsItem extends Component {

  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: '18rem' }}>
          <img src={!imageurl?"https://techcrunch.com/wp-content/uploads/2023/06/z8DWjftM.png?resize=1200,675":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
