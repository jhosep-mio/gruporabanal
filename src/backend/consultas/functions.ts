export const getOriginalFilename = (filename: string): string => {
  const [baseName, ext] = filename.split(/(\.[\w\d_-]+)$/i)
  return baseName.split('_').slice(0, -1).join('_') + ext
}
