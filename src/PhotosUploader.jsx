import axios from "axios";
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";


export default function PhotosUploader({ addedPhotos, onChange }) {
    const [photoLink, setPhotoLink] = useState('');


    async function addPhotoLink(e) {
        e.preventDefault();
        const { data: filename } = await axios.post('/upload-by-link', { link: photoLink });
        onChange(prev => {
            return [...prev, filename];
        })
        setPhotoLink("");
    }

    function uploadPhoto(e) {
        const files = e.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append('photos', files[i]);
        }
        axios.post('/upload', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => {
            const { data: filenames } = response;
            onChange(prev => {
                return [...prev, ...filenames];
            })
        })
    }


    return (
        <>
            <div className="flex gap-2">
                <input type="text" value={photoLink} onChange={(e) => setPhotoLink(e.target.value)} placeholder={'Add using a link ....jpg'} />
                <button onClick={addPhotoLink} className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo</button>
            </div>
            <div className="mt-2 grid gap-2 grid-cols-3 md:gridcols-4 lg:grid-cols-6">
                {addedPhotos.length > 0 && addedPhotos.map(link => (
                    <div key={link} className="h-44 flex">
                        <img className="rounded-2xl w-full object-cover" src={'http://localhost:4000/uploads/' + link} alt="" />
                    </div>
                ))}
                <label className="h-32 cursor-pointer border bg-transparent rounded-2xl p-8 text-gray-500 text-2xl items-center flex gap-2 justify-center">
                    <input type="file" className="hidden" onChange={uploadPhoto} /> <MdCloudUpload className="w-8 h-8" />Upload</label>
            </div>
        </>
    )
}
