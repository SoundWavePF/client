import React, { useState } from 'react';
import style from "./FileUpload.module.css"
import moreinfo from '../../../assets/more-info.webp'
import FormUploadSong from '../../commons/FormUploadSong/FormUploadSong';
import i1 from '../../../assets/i1.png'
import i2 from '../../../assets/i2.png'
import i31 from '../../../assets/i31.png'
import i32 from '../../../assets/i32.png'
import i33 from '../../../assets/i33.png'
import i35 from '../../../assets/i35.png'
import i4 from '../../../assets/i4.png'

let arr: any[] = [];
const FileUpload = (props: any) => {

  const [info, setInfo]: any = useState({
    moreInfo: false,
  })

  const handleInfo = (e: any) => {
    switch (e.target.name) {

      case "moreInfo":
        return setInfo({
          ...info,
          moreInfo: !info.moreInfo
        })
      case "close":
        return setInfo({
          ...info,
          moreInfo: !info.moreInfo
        })


      default:
        return info

    }
  }

  const [sound, setSound] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const uploadSound = async (e: any) => {
    const files = e.target.files;
    const data = new FormData();

    for (const property in files) {
      if (property === 'length') break
      data.append('file', files[property]);
      data.append('upload_preset', 'uploadMusic');
      setLoading(true); const res = await fetch(
        'https://api.cloudinary.com/v1_1/jonathanhortman/video/upload',
        {
          method: 'POST',
          body: data,
        }
      )
      const file = await res.json();
      setSound(file.secure_url)
      let objeto = {
        url: file.secure_url,
        duration: file.duration
      }

      arr.push(objeto)
      setLoading(false)

    }
  }





  function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <div className={style.container}>
      <div className={style.component}>
        <div className={style.titleContainer}>
          <h1 className={style.title}>Upload your music</h1>
          <button onClick={(e) => handleInfo(e)} name="moreInfo" className={style.moreInf}></button>
          <button onClick={(e) => handleInfo(e)} name="moreInfo" className={style.moreInfresponsive}></button>
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
        arr.map((a: any) => (
          <form className={style.formCont} >
            <FormUploadSong url={a.url} duration={a.duration} />
          </form>
        ))
      }
      {
        info.moreInfo === true ?
          <div className={style.modalBackground}>
            <div className={style.modalInfo}>
              <div className={style.titleCont}>
                <div className={style.title}>how to upload music ?</div>
                <button onClick={(e) => handleInfo(e)} name='close' className={style.xButton}>X</button>
              </div>
              <div className={style.index}>1. touch the button in the red circle.</div>
              <div><img className={style.instructionImage} src={i1} /></div>
              <div className={style.index}>2. select one or more songs from your directory.</div>
              <div><img className={style.instructionImage} src={i2} /></div>
              <div className={style.index}>3. write the name of your song and then assign an image.</div>
              <div><img className={style.instructionImage} src={i31} /></div>
              <div className={style.index}>4. you can preview your song in the player.</div>
              <div><img className={style.instructionImage} src={i32} /></div>
              <div className={style.index}>5. if you don't like it, you can delete it.</div>
              <div><img className={style.instructionImage} src={i33} /></div>
              <div className={style.index}>6. if you like it, you can upload your song.</div>
              <div><img className={style.instructionImage} src={i35} /></div>
              <div className={style.index}>7. if you see a poster like this, your song was uploaded.</div>
              <div><img className={style.instructionImage} src={i4} /></div>
            </div>
          </div>
          : null
      }
    </div>
  );
};
export default FileUpload;