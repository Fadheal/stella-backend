function apiAuth(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;
  if (authHeader == process.env.API_KEY) {
    next()
  } else {
    res.json({
        message: "Invalid or Expired TOKEN. Percaya deh ini ga guna kalo ga ada token"
    })
  }
};

export default apiAuth;