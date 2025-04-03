const encodeName = (name) => {
  if (name) {
    return encodeURIComponent(name.replace(/\s+/g, "_"))
  }
}

const decodeName = (coded) => {
  if (coded) {
    return decodeURIComponent(coded).replace(/_/g, " ");
  }
}

export { encodeName, decodeName }