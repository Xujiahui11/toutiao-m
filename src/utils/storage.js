/**
 * 本地存储封装模块
 */
export const getItem = name => {
  const data = window.localStorage.getItem(name)
  try {
    // 把data转为JS对象 -->data可能不是JSON格式字符串
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}
export const setItem = (name, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}
export const removeItem = name => window.localStorage.removeItem(name)
