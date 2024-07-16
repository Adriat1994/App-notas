

export const fileUpload = async(file) => {

    if (!file) throw new Error ('No hay archivo para subir');

    const cloudURL = 'https://api.cloudinary.com/v1_1/curso-react-adriat1994/upload';

    const formData = new FormData();

    formData.append('upload_preset', 'react-journalApp');
    formData.append('file', file);

    try {

        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        });

        //console.log(resp);

        if(!resp.ok) throw new Error('Error al subir la imagen');

        const cloudResp = await resp.json();
        //console.log({cloudResp});

        return cloudResp.secure_url;
        
    } catch (error) {
        //console.log(error);
        throw new Error(error.message);        
    }


}