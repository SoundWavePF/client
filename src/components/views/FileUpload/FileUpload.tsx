import React, { useEffect } from 'react';
import style from "./FileUpload.module.css"
import moreinfo from '../../../assets/more-info.webp'
import FormUploadSong from '../../commons/FormUploadSong/FormUploadSong';

let arr: any[] = [];
const FileUpload = (props: any) => {

  const [sound, setSound] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  // const [arreglo, setArreglo]: any = React.useState(null);
  const uploadSound = async (e: any) => {
    const files = e.target.files;
    console.log("algo", files)
    const data = new FormData();




    for (const property in files) {
      arr.push("cancion")
      if (property === 'length') break
      console.log(files[property])
      data.append('file', files[property]);
      data.append('upload_preset', 'SoundWave');
      setLoading(true); const res = await fetch(
        'https://api.cloudinary.com/v1_1/cristian18u/video/upload',
        {
          method: 'POST',
          body: data,
        }
      )
      const file = await res.json();
      console.log('file', file.duration) // esta es la duration
      setSound(file.secure_url)
      console.log(file.secure_url) // url de la imagen subida
      setLoading(false)
      console.log(arr);   // [cancion, cancion, cancion]
    }
    arr.pop();
  }

  const onSubmitHandle = (e: any) => {
    e.preventDefault()
  }

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <div className={style.container}>
      <div className={style.component}>
        <div className={style.titleContainer}>
          <h1 className={style.title}>Upload your music</h1>
          <img src={moreinfo} alt="more info icon" />
        </div>

        <form className={style.uploadContainer} onSubmit={handleSubmit}>
          <label>Upload files</label>
          <input
            type="file"
            name="file"
            onChange={uploadSound}
            multiple
          />
        </form>

      </div>

      {
        arr.map((tema: any) => (
          <form className={style.formCont} onSubmit={(e) => onSubmitHandle(e)}>
            <FormUploadSong />
          </form>
        ))
      }

    </div>
  );
};
export default FileUpload;