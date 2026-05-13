const cloudinary =
  require("cloudinary").v2;

const CloudinaryStorage =
  require("multer-storage-cloudinary")
    .CloudinaryStorage;


cloudinary.config({

  cloud_name:
    process.env.CLOUD_NAME,

  api_key:
    process.env.CLOUD_API_KEY,

  api_secret:
    process.env.CLOUD_API_SECRET,

});


const storage =
  new CloudinaryStorage({

    cloudinary,

    params: async (req, file) => {

      return {

        folder:
          "Wanderlust_DEV",

        format:
          file.mimetype.split("/")[1],

      };

    },

  });


module.exports = {

  cloudinary,

  storage,

};