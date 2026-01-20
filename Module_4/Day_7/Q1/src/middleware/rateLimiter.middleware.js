const requestCounts = {};
const LIMIT = 15;
const WINDOW = 60 * 1000; // 1 minute

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 1, startTime: now };
    return next();
  }

  const elapsed = now - requestCounts[ip].startTime;

  if (elapsed > WINDOW) {
    requestCounts[ip] = { count: 1, startTime: now };
    return next();
  }

  if (requestCounts[ip].count >= LIMIT) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  requestCounts[ip].count++;
  next();
};

export default rateLimiter;
