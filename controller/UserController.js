const { User, Profile } = require('../models')
const { comparePassword } = require('../helper/bcryipt')
const { createToken } = require('../helper/jwt')

class UserController {
  static async register (req, res, next) {
    const { email, password } = req.body
    
    try {
      const data = await User.create({
        email, 
        password
      })

      res.status(201).json({
        id: data.id,
        email: data.email
      })
    } catch (error) {
      next(error)
    }
  }
  static async login (req, res, next) {
    const { email, password } = req.body

    try {
      if ( !email ) throw { name: "INVALID_EMAIL"}
      if ( !password ) throw { name: "INVALID_PASSWORD"}

      const data = await User.findOne({
        where: {
          email
        }
      })
      if ( !email ) throw { name: "INVALID" }
      
      const checkPass = comparePassword(password, data.password)
      if ( !checkPass ) throw { name: "INVALID" }

      const payload = {
        email: data.email,
        id: data.id
      }
      const access_token = createToken(payload)

      res.status(200).json({
        access_token
      })
    } catch (error) {
      next(error)
    }
  }
  static async postProfile (req, res, next) {
    const {
      namaLengkap,
      alamat,
      rtRw,
      kelurahan,
      kecamatan,
      kotaKab,
      provinsi,
      lat,
      long
    } = req.body
    const { id } = req.auth
    
    try {
      console.log(req.dataUpload.url);
      const profile = await Profile.create({
        UserId: id,
        namaLengkap,
        alamat,
        rtRw,
        kelurahan,
        kecamatan,
        kotaKab,
        provinsi,
        lat,
        long,
        imageUrl: req.dataUpload.url
      })
    
      res.status(201).json({
        message: "Your profile is created",
        data: {
          id: profile.id,
          UserId: profile.UserId,
          namaLengkap: profile.namaLengkap,
          imageUrl: profile.imageUrl,
          alamat: profile.alamat,
          rtRw: profile.rtRw,
          kelurahan: profile.kelurahan,
          kecamatan: profile.kecamatan,
          kotaKab: profile.kotaKab,
          provinsi: profile.provinsi,
          lat: profile.lat,
          long: profile.long,
        }
      })
      
    } catch (error) {
      next(error)  
    }
  }
  static async getProfile (req, res, next) {
    try {
      const data = await Profile.findOne({
        where: {
          id: req.auth.id
        },
        include: {
          model: User,
          attributes: {
            exclude: ["createdAt", "updatedAt", "password", "id"]
          }
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
      })

      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController