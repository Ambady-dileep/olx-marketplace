export const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset", "olx_upload")
    data.append("cloud_name", "dr63tokpc");

    try{
        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method:"POST",
                body: data,
            }
        );
        const json = await res.json();
        console.log("Cloudinary Response:", json);
        return json.secure_url;
    }catch (err){
        console.error("Upload failed", err);
        return null;
    }
};
