import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import { fetchImages } from 'services/api';

export class ImageGallery extends Component {
  state = {
    searchQuery: null,
    isLoading: false,
  };
  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.props;
    if (prevProps.query !== query) {
      try {
        this.setState({ isLoading: true });
        const fetchedImages = await fetchImages(query, page);
        this.setState({ searchQuery: fetchedImages.hits });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  render() {
    const { isLoading, searchQuery } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        <ul>
          {searchQuery &&
            searchQuery.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                prevImg={webformatURL}
                largeImg={largeImageURL}
                altImg={tags}
              />
            ))}
            </ul>
            
      </>
    );
  }
}
