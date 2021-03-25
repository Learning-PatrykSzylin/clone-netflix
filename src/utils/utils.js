export function getRandomObject(array) {
  try {
    return array[Math.floor(Math.random() * array.length - 1)];
  } catch (error) {
    console.log(error);
  }
}

/**
 * Adds ellipsis to end of the text
 * @param {String} str The string to add ellipsis to
 * @param {Number} n Character threshold
 */
export function setEllipsisForText(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

export function getURLQueryValue(url, queryName) {
  const urlParams = new URL(url).search;
  const searchParams = new URLSearchParams(urlParams);
  return searchParams.get(queryName);
}
