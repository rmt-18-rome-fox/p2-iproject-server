const cloudinary = require("cloudinary");

function postCloudinary(req, res, next) {
  // console.log("msuk line 5");
  cloudinary.config({
    cloud_name: "yours",
    api_key: "116371841141165",
    api_secret: "CqpR91S9BkNAoUWiew6FePGmRk4",
    secure: true,
  });
  cloudinary.v2.uploader.upload(
    req.file.path,
    {
      resource_type: "image",
      public_id: "Home/yours",
      overwrite: true,
      notification_url: "http://localhost:3000",
    },
    function (error, result) {
      // console.log(result);
      //   console.log(error);
      req.imageUrl = result.url;
      next();
    }
  );
}

module.exports = postCloudinary;
