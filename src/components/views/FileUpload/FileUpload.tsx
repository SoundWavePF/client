import React from 'react';
// import { Container, FormGroup, input } from 'reactStrap';

const FileUpload = (props: any) => {


    const [sound, setSound] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const uploadImage = async (e: any) => {
        const files = e.target.files;
        console.log(files[0])
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'cristian18u');
        setLoading(true); const res = await fetch(
            'https://api.cloudinary.com/v1_1/cristian18u/video/upload',
            {
                method: 'POST',
                body: data,
            }
        )
        const file = await res.json();
        // console.log(res)
        setSound(file.secure_url)
        console.log(file.secure_url) // url de la imagen subida
        setLoading(false)
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
                    onChange={uploadImage}
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