const Cloudinary = require('cloudinary').v2;
require('dotenv').config();
const fs = require('fs');

Cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    cloud_name: process.env.CLOUD_NAME,
    folder: process.env.CLOUDINARY_FOLDER_NAME,
});

const uploadSingleImage = async (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = Cloudinary.uploader.upload_stream(
            { folder: process.env.CLOUDINARY_FOLDER_NAME },
            (error, result) => {
                if (result) {
                    resolve({ public_id: result.public_id, imageUrl: result.secure_url });
                } else {
                    reject(error || new Error("Failed to upload image"));
                }
            }
        );
        stream.end(fileBuffer);
    });
};

const uploadImage = async (filePath) => {
    try {
        console.log('Attempting to upload file at:', filePath);

        if (await fs.access(filePath).then(() => true).catch(() => false)) {
            const result = await Cloudinary.uploader.upload(filePath, {
                folder: process.env.CLOUDINARY_FOLDER_NAME
            });
            return { image: result.secure_url, public_id: result.public_id };
        } else {
            throw new Error('File does not exist for upload');
        }
    } catch (error) {
        throw new Error('Failed to upload Image');
    }
};

const deleteImageFromCloudinary = async (public_id) => {
    try {
        await Cloudinary.uploader.destroy(public_id);
    } catch (error) {
        throw new Error('Failed to delete Image from Cloudinary');
    }
};

const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = Cloudinary.uploader.upload_stream(
            { folder: process.env.CLOUDINARY_FOLDER_NAME, resource_type: 'auto' },
            (error, result) => {
                if (result) {
                    resolve({ public_id: result.public_id, imageUrl: result.secure_url });
                } else {
                    reject(error || new Error("Failed to upload image"));
                }
            }
        );
        stream.end(fileBuffer);
    });
};

module.exports = {
    uploadSingleImage,
    uploadImage,
    deleteImageFromCloudinary,
    uploadToCloudinary
};
