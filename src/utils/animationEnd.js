/* eslint-disable no-new */
export const animateCSS = (querySelectorAll, animationList = [], eleIndex = 0, removeAnimation = false) => {
  new Promise((resolve, reject) => {
    const node = document.querySelectorAll(querySelectorAll)

    node[eleIndex].classList.add('animate__animated', ...animationList)

    function handleAnimationEnd (event) {
      event.stopPropagation()
      if (removeAnimation) {
        node[eleIndex].classList.remove('animate__animated', ...animationList)
      }
      resolve('Animation ended')
    }

    node[eleIndex].addEventListener('animationend', handleAnimationEnd, { once: true })
  })
}
