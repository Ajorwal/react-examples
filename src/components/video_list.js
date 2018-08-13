import React, { Component } from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const VideoList = props.videos.map((video, index) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />)
    })

    return (
        <div>
            <ul className="col-md-4 list-group">
                {VideoList}
            </ul>
        </div>
    )

}

export default VideoList;
