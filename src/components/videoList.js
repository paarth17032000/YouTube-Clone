import React from 'react'

export default function VideoList(videos) {
    return (
            {videos.map( video => {
                    <div>
                        <img alt="thumbnail" src={video.snippet.thumbnails.middle.url}/>
                        <h5>{video.snippet.title}</h5>
                    </div>
            })}
    )
}
