const axios = require("axios")
const FormData = require("form-data")

async function uploadImage(image) {
  try {
    // construct form
    const form = new FormData()
    form.append("file", image.buffer.toString('base64'))
    form.append("fileName", image.originalname)

    // tembak upload imageKit
    const response = await axios({
      url: "https://upload.imagekit.io/api/v1/files/upload",
      method: "POST",
      data: form,
      headers: form.getHeaders(),
      auth: {
        username: process.env.IMAGEKIT_PRIVATE,
      },
    })
    
    // kalau berhasil ngembaliin fileId dan url
    return {
      fileId: response.data.fileId,
      url: response.data.url
    }

  } catch (error) {
    
    // klo gagal ngembaliin object error
    return error
  }
}

async function deleteImage(fileId) {
  // explore
  try {
    await axios({
      url: `https://api.imagekit.io/v1/files/${fileId}`,
      method: "DELETE",
      auth: {
        username: process.env.IMAGEKIT_PRIVATE,
      },
    })
  } catch (error) {
    return error
  }
}

module.exports = {
  uploadImage,
  deleteImage
}
