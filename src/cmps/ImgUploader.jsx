import { useState } from 'react'
import { uploadService } from '../services/upload.service'

export function ImgUploader({ onUploaded = null }) {
  const [imgData, setImgData] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  async function uploadImg(ev) {
    setIsUploading(true)
    const url = await uploadService.cloudUpload(ev)
    // const { secure_url, height, width } = await uploadService.uploadImg(ev)
    setImgData(url)
    setIsUploading(false)
    // onUploaded && onUploaded(secure_url)
    onUploaded(url)
    // return url
  }


  function getUploadLabel() {
    if (imgData.imgUrl) return 'Upload Another?'
    return isUploading ? 'Uploading....' : 'Upload Image'
  }

  return (
    <div className="upload-preview">
      {imgData.imgUrl && <img src={imgData.imgUrl} style={{ maxWidth: '200px', float: 'right' }} />}
      <label htmlFor="imgUpload">{getUploadLabel()}</label>
      <input type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
    </div>
  )
}

// 