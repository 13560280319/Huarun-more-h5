/* eslint-disable no-new */
export const animateCSS = (querySelectorAll, animationList = [], eleIndex = 0, removeAnimation = false, allElements = false) => {
  return new Promise((resolve, reject) => {
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

export const dealRemoveClass = (eleSelector, oSelector, allElements = false) => {
  if (allElements) {
    const animateDomList = document.querySelectorAll(eleSelector)
    for (const item of animateDomList) {
      item.classList.remove(oSelector)
    }
  } else {
    const animateDom = document.querySelector(eleSelector)
    animateDom.classList.remove(oSelector)
  }
}

export const dealAddClass = (eleSelector, oSelector, allElements = false) => {
  if (allElements) {
    const animateDomList = document.querySelectorAll(eleSelector)
    for (const item of animateDomList) {
      item.classList.add(oSelector)
    }
  } else {
    const animateDom = document.querySelector(eleSelector)
    animateDom.classList.add(oSelector)
  }
}
