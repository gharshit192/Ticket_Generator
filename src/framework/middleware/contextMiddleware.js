const cls = require('cls-hooked')
const uuidv4 = require('uuidv4')

const clsNamespace = cls.createNamespace('app')

const clsMiddleware = (req, res, next) => {
  // req and res are event emitters. We want to access CLS context inside of their event callbacks
  clsNamespace.bind(req)
  clsNamespace.bind(res)
  var oldSendFunction = res.send
  const traceID = req.headers ? (req.headers.traceid ? req.headers.traceid : uuidv4()) : uuidv4()
  res.send = function () {
    let stack = clsNamespace.get("errorStack")
    if(stack){
      arguments[0].logStack = stack
    }
    oldSendFunction.apply(this, arguments)
  }

  clsNamespace.run(() => {
    clsNamespace.set('traceID', traceID)
    if(req.query.includeLog == "true"){
      clsNamespace.set("errorStack", [])
    }
    else{
      clsNamespace.set("errorStck",null)
    }

    next()
  })
}


module.exports = {
  clsMiddleware: clsMiddleware,
  clsNamespace: clsNamespace
}