/* eslint-disable no-new */
/**
 * @description 为元素添加或删除动画
 * @param querySelectorAll CSS选择器
 * @param animationList animate.css动画库的类
 * @param eleIndex 获取元素列表中的第几个元素
 * @param removeAnimation 动画完成后是否移除动画类
 * @param allElements 是否为获取到的所有元素添加动画类
*/
export const animateCSS = (querySelectorAll, animationList = [], eleIndex = 0, removeAnimation = false, allElements = false) => {
  return new Promise((resolve, reject) => {
    const nodeList = document.querySelectorAll(querySelectorAll)

    if (allElements) {
      for (const item of nodeList) {
        item.classList.add('animate__animated', ...animationList)
      }
    } else {
      nodeList[eleIndex].classList.add('animate__animated', ...animationList)
    }

    function handleAnimationEnd (event) {
      event.stopPropagation()
      if (removeAnimation && !allElements) {
        nodeList[eleIndex].classList.remove('animate__animated', ...animationList)
      } else if (removeAnimation && allElements) {
        for (const item of nodeList) {
          item.classList.remove('animate__animated', ...animationList)
        }
      }
      resolve('Animation ended')
    }

    nodeList[eleIndex].addEventListener('animationend', handleAnimationEnd, { once: true })
  })
}

export const dealAddClass = (eleSelector, oSelector, eleIndex = 0, allElements = false) => {
  const nodeList = document.querySelectorAll(eleSelector)
  if (allElements) { // 所有元素
    for (const item of nodeList) {
      item.classList.add(oSelector)
    }
  } else { // 部分元素
    if (Array.isArray(eleIndex)) {
      for (const index of eleIndex) {
        nodeList[index].classList.add(oSelector)
      }
    } else {
      nodeList[eleIndex].classList.add(oSelector)
    }
  }
}

export const dealRemoveClass = (eleSelector, oSelector, eleIndex = 0, allElements = false) => {
  const nodeList = document.querySelectorAll(eleSelector)
  if (allElements) { // 所有元素
    for (const item of nodeList) {
      item.classList.remove(oSelector)
    }
  } else { // 部分元素
    if (Array.isArray(eleIndex)) {
      for (const index of eleIndex) {
        nodeList[index].classList.remove(oSelector)
      }
    } else {
      nodeList[eleIndex].classList.remove(oSelector)
    }
  }
}
