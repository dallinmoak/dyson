const encodeName = (name) => {
  return encodeURIComponent(name.replace(/\s+/g, "_"))
}

const decodeName = (coded) => {
  return decodeURIComponent(coded).replace(/_/g, " ");
}

export { encodeName, decodeName }