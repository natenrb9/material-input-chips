export const TYPES = {
  ESCAPE: [27],
  LEFT: [37],
  RIGHT: [39],
  UP: [38],
  DOWN: [40],
  BACKSPACE: [8],
  TAB: [9],
  DELETE_CODES: [46, 8],
}

export function acceptedCharCodes(code) {
  return code > 64 && code < 123
}

export function validate(value, validators, selected) {
  if (!validators || validators.length === 0) {
    return false
  }

  return validators.reduce((acc, curr) => {
    if (!acc && curr.validator(value, selected)) {
      return curr.message
    }

    return acc
  }, false)
}


export function mimicFuseSearch(options) {
  return options.map(option => ({
    matches: [],
    item: option,
  }))
}
