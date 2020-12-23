var channel1 = 'TEDEducation';  
var channel2 = 'TechGuyWeb';
var channel3 = 'khanacademy';
var channels = [channel1, channel2, channel3];
var ids = ["#id1","#id2","#id3"];
var vidHeight = 250;  
var vidWidth = 200;  
var vidMaxResult = 5; // Maximum can be 50
  
$(document).ready(function () {  

    $('h3.channel1').click(function() {

        $.get("https://www.googleapis.com/youtube/v3/channels", {  
            part: 'contentDetails',  
            forUsername: channel1,  
            key: 'AIzaSyBXuHd-GpOCVt9IBGToGbyBdnLNrcIkUMs' //Browser API Key  
        },  
            function (data) {  
                $.each(data.items, function (i, item) {  
                    console.log(item); // See in Browser Console  
                    pid = item.contentDetails.relatedPlaylists.uploads;  
                    getVideos(pid);  
                })  
            }  
            );  
        function getVideos(pid)  
        {  
            $.get("https://www.googleapis.com/youtube/v3/playlistItems", {  
                part: 'snippet',  
                maxResults: vidMaxResult,  
                playlistId:pid,  
                key: 'AIzaSyBXuHd-GpOCVt9IBGToGbyBdnLNrcIkUMs' //Browser API Key  
            },  
        function (data) {  
            var outputVideo;  
            $.each(data.items, function (i, item) {  
                console.log(item); // See in Browser Console  
                vidId = item.snippet.resourceId.videoId;  
                outputVideo = '<div style = "display:inline-block"><iframe height="' + vidHeight + '" width="' + vidWidth + '" src=\"//www.youtube.com/embed/' + vidId + '"> </iframe></div>';  
    
                //Append to result list  
                $("#id1").append(outputVideo);  
            })  
        }  
        );  
        }  
    });

    $('h3.channel2').click(function() {

        $.get("https://www.googleapis.com/youtube/v3/channels", {  
            part: 'contentDetails',  
            forUsername: channel2,  
            key: 'AIzaSyBXuHd-GpOCVt9IBGToGbyBdnLNrcIkUMs' //Browser API Key  
        },  
            function (data) {  
                $.each(data.items, function (i, item) {  
                    console.log(item); // See in Browser Console  
                    pid = item.contentDetails.relatedPlaylists.uploads;  
                    getVideos(pid);  
                })  
            }  
            );  
        function getVideos(pid)  
        {  
            $.get("https://www.googleapis.com/youtube/v3/playlistItems", {  
                part: 'snippet',  
                maxResults: vidMaxResult,  
                playlistId:pid,  
                key: 'AIzaSyBXuHd-GpOCVt9IBGToGbyBdnLNrcIkUMs' //Browser API Key  
            },  
        function (data) {  
            var outputVideo;  
            $.each(data.items, function (i, item) {  
                console.log(item); // See in Browser Console  
                vidId = item.snippet.resourceId.videoId;  
                outputVideo = '<div style = "display:inline-block"><iframe height="' + vidHeight + '" width="' + vidWidth + '" src=\"//www.youtube.com/embed/' + vidId + '"> </iframe></div>';  
    
                //Append to result list  
                $("#id2").append(outputVideo);  
            })  
        }  
        );  
        }  
    });

    $('h3.channel3').click(function() {

        $.get("https://www.googleapis.com/youtube/v3/channels", {  
            part: 'contentDetails',  
            forUsername: channel3,  
            key: 'AIzaSyBXuHd-GpOCVt9IBGToGbyBdnLNrcIkUMs' //Browser API Key  
        },  
            function (data) {  
                $.each(data.items, function (i, item) {  
                    console.log(item); // See in Browser Console  
                    pid = item.contentDetails.relatedPlaylists.uploads;  
                    getVideos(pid);  
                })  
            }  
            );  
        function getVideos(pid)  
        {  
            $.get("https://www.googleapis.com/youtube/v3/playlistItems", {  
                part: 'snippet',  
                maxResults: vidMaxResult,  
                playlistId:pid,  
                key: 'AIzaSyBXuHd-GpOCVt9IBGToGbyBdnLNrcIkUMs' //Browser API Key  
            },  
        function (data) {  
            var outputVideo;  
            $.each(data.items, function (i, item) {  
                console.log(item); // See in Browser Console  
                vidId = item.snippet.resourceId.videoId;  
                outputVideo = '<div style = "display:inline-block"><iframe height="' + vidHeight + '" width="' + vidWidth + '" src=\"//www.youtube.com/embed/' + vidId + '"> </iframe></div>';  
    
                //Append to result list  
                $("#id3").append(outputVideo);  
            })  
        }  
        );  
        }  
    });
}
);