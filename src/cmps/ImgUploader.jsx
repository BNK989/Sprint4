import { useState } from 'react'
import { uploadService } from '../services/upload.service'
import { Input } from "@/components/ui/input"

export function ImgUploader({ onUploaded = null }) {
  const [imgData, setImgData] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  async function uploadImg(ev) {
    setIsUploading(true)
    const url = await uploadService.cloudUpload(ev)
    setImgData(url)
    setIsUploading(false)
    onUploaded(url)
  }


  function getUploadLabel() {
    if (imgData.imgUrl) return 'Upload Another?'
    return isUploading ? 'Uploading....' : 'Upload Image'
  }

  return (
    <div className="upload-preview">
      {imgData.imgUrl && <img src={imgData.imgUrl} style={{ maxWidth: '200px', float: 'right' }} />}
      <label htmlFor="imgUpload">{getUploadLabel()}</label>
      <Input type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
    </div>
  )
}

// 