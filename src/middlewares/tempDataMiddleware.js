export function tempDataMiddleware(req, res, next) {
  Object.defineProperty(req, "tempData", {
    set(values) {
      req.session.tempData = values;
    },
    get() {
      return req.session.tempData;
    },
  });

  if (!req.session.tempData) {
    return next();
  }

  //Pass by reference each property of tempData to res.locals without deleting the existing data in locals(our users)
  Object.assign(res.locals, req.session.tempData);
  next();
}
