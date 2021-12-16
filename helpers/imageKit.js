const axios = require("axios")
const FormData = require("form-data")

async function uploadImage(image, identifier) {
  try {
    // construct form
    const form = new FormData()
    form.append("file", image)
    form.append("fileName", identifier)

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
    return error
  }
}

module.exports = uploadImage
