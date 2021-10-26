# Video On The Web

In html5 we can upload a video with a <video> tag. 

## Video Containers

A video file contain mutiple tracks, a video track (without audio), plus one or more audio tracks.

There are a lot of video containers. Some of the most popular include: *MPEG4, Ogg, Flash Video, WebM, ASF, AVI.*

## Video Codecs

A video codec is an algorithm by which a video stream is encoded and specifies how to decode a video stream and display a series of images on the screen.

There are differents video codecs, some of them are: *H.264, THEORA, VP8.*

## Audio Codecs

Audio codecs are algorithms by which an audio stream is encoded. For the web we only use three audo codecs which are: *MPEG-1, AAC, VORBIS*

## Encoding videos

In html5 we can upload a video to the web page with the <vide> tag, there are no restrictions on the video and audio codecs, or container format. But we need to know which browsers supports wich containers and codecs.

**Video Codec Support**

|       Codec/Container       |               Browsers              |  
|-----------------------------|-------------------------------------|
| Theora + Vorbis + Ogg       | Firefox, Chrome, Opera              |
| H.264 + AAC + MP4           | IE, Safari, Chrome, IPhone, Android |
| WebM                        | IE, Firefox, Chrome, Opera, Android |

To cover all kind of browsers, we use three encodings:

- WebM (vp8) is WebM video (VP8 video and Vorbis audio in a WebM container).
- Theora is Theora video and Vorbis audio in an Ogg container.
- iPhone is H.264 Baseline Profile video and AAC low-complexity audio in an MP4 container.

## Upload Video

After encoding the video correctly, we use the <video> tag, we specify the size, and the other atributtes, in this example I'm going to use ```controls``` atribute to be able to play it with all the fatures as a video player. After that we have to specify the video encoding. The syntax would be like this:

```
    <video 
        type="mp4"
        height="500px"
        width="500px"
        controls>
            <source src="Wednesday.mp4" type="video/mp4">
            <source src="Wednesday.webm" type="video/webm">
            <source src="Wednesday.ogv" type="video/ogv">
    </video>
```