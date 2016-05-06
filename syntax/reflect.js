if (Reflect.defineProperty(obj, name, desc)) {
  // success
} else {
  // failure
}

Reflect.apply(f, obj, args)

var obj = Reflect.construct(F, args)

var loggedObj = new Proxy(obj, {
  get: function(target, name) {
    console.log("get", target, name);
    return Reflect.get(target, name);
  }
});

Reflect.getPrototypeOf(obj)

Reflect.setPrototypeOf(obj, newProto)
