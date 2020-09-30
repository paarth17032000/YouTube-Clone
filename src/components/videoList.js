import React from 'react'

export default function VideoList({videos, selectedVideo, handlePlay}) {
    let list = videos.map( video => {
        if(video === selectedVideo)
            return;
        return(
            <div className="mb-2" key={video.id.videoId}>
                <img onClick={() => handlePlay(video)} alt="thumbnail" className="img-fluid" style={{height: '30%', width: '90%', cursor: 'pointer'}} src={video.snippet.thumbnails.medium.url}/>
                <p>{video.snippet.title}</p>
            </div>
        )
    })
    return (
        <div>
            {list}   
        </div>
    )
}

