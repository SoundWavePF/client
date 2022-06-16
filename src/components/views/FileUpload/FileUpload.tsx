import React from 'react';
// import { Container, FormGroup, input } from 'reactStrap';

const FileUpload = (props: any) => {


    const [sound, setSound] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const uploadSound = async (e: any) => {
        const files = e.target.files;
        console.log(files)
        const data = new FormData();
        for (const property in files) {
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

        }


    }

    // function handleChange(event) {
    //     const { name, value } = event.target;
    //     setInput({
    //       ...input,
    //       [name]: value,
    //     });
    //   }
    function handleSubmit(event: any) {
        event.preventDefault();
    }
    // const searchString = useSelector((state: any) => state.query)

    return (
        <div>
            <h1>Upload File</h1>
            <form onSubmit={handleSubmit}>
                <label>Upload</label>
                <input
                    type="file"
                    name="file"
                    onChange={uploadSound}
                    multiple
                />
                {loading ? (<h3>Loading sound...</h3>) : (<audio src={sound} controls></audio>)}
            </form>
            {/* <SearchBar />
            <SideBar />
            {
                !searchString ?
                    <GenrePage />
                    :
                    <SearchResults />
            }
            <Player /> */}
        </div>
    );
};
export default FileUpload;