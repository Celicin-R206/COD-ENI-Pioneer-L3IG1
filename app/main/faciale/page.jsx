// components/WebcamCapture.js
"use client"
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import "./style.css"

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

//   const capture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setImage(imageSrc);
//   };

  const sendToBackend = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)

    if (!imageSrc) return;
    
    setLoading(true);

    try {
        // Convert base64 to Blob
      const blob = await fetch(imageSrc).then((res) => res.blob());
      const formData = new FormData();
      formData.append('photo_path', blob , "captured.jpg");

    //   for (let [key, value] of formData.entries()) {
    //     console.log(`${key}: ${value}`);
    //   }

      const response = await axios.post('http://192.168.0.100:8000/api/uploads/'+user.data.id_user, formData , {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization' : "Bearer "+user.data.token
        },
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='faciale'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        height="100%"
      />
      <button onClick={sendToBackend}>Enregistrer</button>
      {/* {image && (
        <div>
          <img src={image} alt="Captured" />
          <button onClick={sendToBackend} disabled={loading}>
            {loading ? 'Uploading...' : 'Send to Backend'}
          </button>
        </div>
      )} */}
    </div>
  );
};

export default WebcamCapture;
