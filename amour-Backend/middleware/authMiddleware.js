const { supabase } = require('../config/supabase');

const authMiddleware = async (req, res, next) => {
  // Implement Supabase JWT verification
  next();
};

module.exports = authMiddleware;
