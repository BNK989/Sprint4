import  axios  from "axios"
export const uploadService = {
  uploadImg,
  cloudUpload,
  cloudUploadMany
}
async function uploadImg(ev) {
  const CLOUD_NAME = "dcwibf9o5"
  const UPLOAD_PRESET = "vt0iqgff"
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  try {
    const formData = new FormData()
    formData.append('upload_preset', UPLOAD_PRESET)
    formData.append('file', ev.target.files[0])

    const res = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData
    })
    const imgUrl = await res.json()
    return imgUrl
  } catch (err) {
    console.error('Failed to upload', err)
    throw err
  }
}

// MARK: CLOUDINARY UPLOAD
const PRESET_KEY = 'bnkPreset'
const CLOUD_NAME = 'dqwoykxjx'

async function cloudUpload(ev){

  const file = ev.target.files[0]
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', PRESET_KEY)
  try {
    const imgUrl = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, formData)
    return imgUrl.data.secure_url
  }
  catch (err) {
    console.error('err while upload:', err)
  }

}
async function cloudUploadOne(file){

  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', PRESET_KEY)
  try {
    const imgUrl = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, formData)
    return imgUrl.data.secure_url
  }
  catch (err) {
    console.error('err while upload:', err)
  }

}

async function cloudUploadMany(ev){

  const urls = []
  for (const file of ev.target.files) {
    const url = await cloudUploadOne(file)
    urls.push(url)
  }
  // console.log('urls:', urls)
  return urls


}

