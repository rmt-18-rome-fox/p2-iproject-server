const formData = require("form-data");
const instanceAxios = require("../apis/axios");

const imageKitUpload = async (req, res, next) => {
  if (req.file === undefined) {
    next();
  } else {
    try {
    //   const fileType = req.file.mimetype.split("/")[0];
    //   if (fileType !== "image") {
    //     throw { name: "notImageFile" };
    //   }
    //   if (req.file.size > 255000) {
    //     throw { name: "imageTooBig" };
    //   }

      const sentData = req.file.buffer.toString("base64");
      let form = new formData();
      form.append("file", sentData);
      form.append("fileName", req.file.originalname);

      const response = await instanceAxios.post("/files/upload", form, {
        headers: form.getHeaders(),
      });

      req.additionalData = response.data.url;

      next();
    } catch (err) {
      next(err);
    }
  }
};

module.exports = imageKitUpload