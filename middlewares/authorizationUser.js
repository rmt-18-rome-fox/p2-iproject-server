const authorizationCustomerOnly = async (req, res, next) => {
  try {
    if (req.user.role !== "customer") throw { name: "forbiddenAccess" };
    next();
  } catch (error) {
    next(error);
  }
};

const authorizationSellerOnly = async (req, res, next) => {
  try {
    if (req.user.role !== "seller") throw { name: "forbiddenAccess" };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authorizationCustomerOnly, authorizationSellerOnly };
