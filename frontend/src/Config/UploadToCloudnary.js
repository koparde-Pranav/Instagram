
export const uploadToCloudinary = async (image) => {
    if (image) {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "Instagram");
        data.append("cloud_name", "zrspw57e");

        const response = await fetch("https://api.cloudinary.com/v1_1/zrspw57e/image/upload", {
            method: "POST",
            body: data
        });
        const fileData = await response.json();
        return fileData.url.toString();
    }
}