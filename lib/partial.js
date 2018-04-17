var slice = Array.prototype.slice

export function partial (fn) {
  var partialArgs = slice.call(arguments, 1);
  return function() {
    return fn.apply(this, partialArgs.concat(slice.call(arguments)))
  }
}