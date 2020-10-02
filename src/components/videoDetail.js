import React from 'react'

export default function VideoDetails({video}) {
    if(!video) 
        return <div><h1>Loading...</h1></div>
    const id = video.id.videoId;
    const url = `https://youtube.com/embed/${id}`;
    // console.log(video);
    return (
        <React.Fragment>
            <div className="h-25">
                <iframe width="100%" height="100%" frameBorder="0" src={url}/>  
            </div>
            <div className="pt-2">
                <h5>{video.snippet.title}</h5>
                <h6>{video.snippet.channelTitle}</h6>
                <div>{video.snippet.description}</div>
            </div>
        </React.Fragment>
    )
}
