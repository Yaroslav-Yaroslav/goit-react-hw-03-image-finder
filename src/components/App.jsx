import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    query: null,
    page: 1,
  };
  handleFormSubmit = query => {
    this.setState({ query });
  };
  render() {
    const { query, page } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={query} page={page} />
        <Toaster position="top-right" />
      </div>
    );
  }
}
