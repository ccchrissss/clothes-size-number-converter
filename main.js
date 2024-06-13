function sizeToNumber(size) {

  let sizes = {
    's': 36,
    'm': 38,
    'l': 40,
  }

  let sizeMods = 0,
      baseSize = ''

  for (const char of size.toLowerCase()) {
    
    if (char === 'x') sizeMods++
    else baseSize = char

  }
  // console.log(baseSize)
  // console.log(sizeMods)

  if (baseSize !== 's' && baseSize !== 'm' && baseSize !== 'l') return null

  if (size.indexOf(baseSize) !== size.lastIndexOf(baseSize)) return null

  if (size.includes('s') && size.includes('m')) return null
  if (size.includes('s') && size.includes('l')) return null
  if (size.includes('m') && size.includes('l')) return null

  if (baseSize === 'm' && sizeMods) return null

  let euroSize = sizes[baseSize]
  // console.log(euroSize)

  if (sizeMods) {
    if (baseSize === 's') return euroSize - (2 * sizeMods)
    else if (baseSize === 'l') return euroSize + (2 * sizeMods)
  }

  return euroSize
}

console.log(sizeToNumber('xs'))


// parameters: size   // a string 
// return: europeanSize   // a number
// e.g. sizeToNumber('xs') 
// results in 34