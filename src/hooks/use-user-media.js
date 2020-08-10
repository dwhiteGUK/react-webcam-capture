import { useState, useEffect } from 'react';

export const useUserMedia = (requestedMedia) => {
  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    const enableStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          requestedMedia
        );
        console.log('enableStream -> stream', stream);
        setMediaStream(stream);
      } catch (error) {
        console.error('enableStream -> error', error)
      }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        })
      }
    }
  }, [mediaStream, requestedMedia]);

  return mediaStream;
}