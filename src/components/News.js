import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {

  static defultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  }


  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f26ca743a5644d98163f10b817c343d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }
  handlePreClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f26ca743a5644d98163f10b817c343d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0f26ca743a5644d98163f10b817c343d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  render() {
    const { articles, loading } = this.state;

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: '35px 0px' }}>
          Top Headlines For Today
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            {articles && articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ''}
                  description={element.description ? element.description : ''}
                  imageurl={element.urlToImage ? element.urlToImage : ''}
                  newsurl={element.url ? element.url : ''}
                  author={element.author ? element.author : ''}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>

        )}
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
export default News;
