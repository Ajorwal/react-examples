import React from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDeb_qecgWCB_eUfuZNxOdM1Th0OJu9p3U'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('lane 8')

    }
    videoSearch(term) {
        YTsearch({ key: API_KEY, term: term }, videos => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }


    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}></SearchBar>
                <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));