/* eslint-disable no-new */
export const animateCSS = (querySelectorAll, animationList = [], eleIndex = 0, removeAnimation = false, allElements = false) => {
  new Promise((resolve, reject) => {
    const node = document.querySelectorAll(querySelectorAll)

    if (allElements) {
      for (const item of node) {
        item.classList.add('animate__animated', ...animationList)
      }
    } else {
      node[eleIndex].classList.add('animate__animated', ...animationList)
    }

    function handleAnimationEnd (event) {
      event.stopPropagation()
      if (removeAnimation && !allElements) {
        node[eleIndex].classList.remove('animate__animated', ...animationList)
      } else if (removeAnimation && allElements) {
        for (const item of node) {
          item.classList.remove('animate__animated', ...animationList)
        }
      }
      resolve('Animation ended')
    }

    node[eleIndex].addEventListener('animationend', handleAnimationEnd, { once: true })
  })
}
