const requests = new Map();

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  const windowMs = (process.env.RATE_LIMIT_WINDOW || 15) * 60 * 1000;
  const maxRequests = process.env.RATE_LIMIT_MAX || 100;

  if (!requests.has(ip)) {
    requests.set(ip, { count: 1, startTime: now });
    return next();
  }

  const requestData = requests.get(ip);

  if (now - requestData.startTime > windowMs) {
    requests.set(ip, { count: 1, startTime: now });
    return next();
  }

  if (requestData.count >= maxRequests) {
    return res.status(429).json({
      success: false,
      message: "Too many requests. Please try again later."
    });
  }

  requestData.count++;
  next();
};

export default rateLimiter;
