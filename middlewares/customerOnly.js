const customerOnly = async (req, res, next) => {
    const user = req.user;
    try {
      if (user.role !== "customer") {
        throw { message: "You must be a customer to access this wishlist" };
      }
      // console.log(req.body);
      next();
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = customerOnly;