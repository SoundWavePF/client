import React, { useEffect } from 'react';
import style from "./FileUpload.module.css"
import moreinfo from '../../../assets/more-info.webp'

let arr: any[] = [];
const FileUpload = (props: any) => {

  interface musicToSend {
    name: string
    preview: string
    image_small: string
    image_medium: string
    image_big: string
    duration: string
  }


  const [music, setMusic] = React.useState<musicToSend>({
    name: "",
    preview: "",
    image_small: "",
    image_medium: "",
    image_big: "",
    duration: "",
  })

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
      console.log(res)
      setSound(file.secure_url)
      console.log(file.secure_url) // url de la imagen subida
      setLoading(false)
      console.log(arr);   // [cancion, cancion, cancion]
    }
    arr.pop();



    // setArreglo(arr)



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
          <div className={style.formCont}>
            <label>Song name: </label>
            <input type="text" />
            <label>Image: </label>
            <input type="text" />
            
          </div>
        ))
      }
    </div>
  );
};
export default FileUpload;