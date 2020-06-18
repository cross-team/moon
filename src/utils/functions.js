import * as Scroll from 'react-scroll'
var scroll = Scroll.animateScroll

// Takes a nested array of elements and returns the first focusable element in the DOM tree
// Returns null if array contains no focusable elements
export function getFirstFocusableChild(children) {
  for (let child of children) {
    if (child.tabIndex == 0) return child
    if (child.children !== []) {
      let result = getFirstFocusableChild(child.children)
      if (result !== null) return result
    }
  }
  return null
}

// Takes two strings: a hex code and a number between 0 and 1 for the opacity and returns the rgba string for it
export function hexToRgbA(hex, opacity = '1') {
  var c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return `rgba(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${c & 255}, ${opacity})`
  }
  throw new Error('Bad Hex')
}

// Takes a react ref and sends focus to the first focusable DOM child of the ref
// If there are none, it sends focus to the ref itself
export function skipToMain(ref) {
  let child = getFirstFocusableChild(ref.current.children)
  if (child === null) {
    console.log('child is null')
    ref.current.focus()
    window.scrollTo(0, ref.current.offsetTop)
  } else {
    console.log(child)
    child.focus()
    let offset = child.offsetTop - 180
    scroll.scrollTo(offset, { duration: 1 })
  }
}
