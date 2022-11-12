export const serializeQueryParams = (
  params: { [x: string]: string | number | any; }
) => {
   
  if (!params || Object.keys(params).length === 0) {
    return ''
  }

  const query = Object.keys(params).map(key => key + '=' + params[key]).join('&')
  return `?${query}`
}

export default serializeQueryParams
  