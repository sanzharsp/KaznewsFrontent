import ImageUploading from 'react-images-uploading';
import ClearIcon from '@mui/icons-material/Clear';
import UpdateIcon from '@mui/icons-material/Update';
import Button from '@mui/material/Button';
import React, {useState  } from "react";


const ImageUpload=(props)=>{

  const [images, setImages] = useState([]),
         maxNumber = 3, 
         onChangeImage = (imageList) => {setImages(imageList)};

         try{
          props.formData.append('image1', images[0].file);
          props.formData.append('image2', images[1].file);
          props.formData.append('image3', images[2].file);
          }catch(e){
            console.log(e.message);
          }
    return(
<ImageUploading
    multiple
    value={images}
    onChange={onChangeImage}
    maxNumber={maxNumber}
    dataURLKey="data_url"
  >
    {({
      imageList,
      onImageUpload,
      onImageRemoveAll,
      onImageUpdate,
      onImageRemove,
      isDragging,
      dragProps,
    }) => (
      // write your building UI
      <div className="upload__image-wrapper">
        <Button variant="outlined"
          style={isDragging ? { color: 'red' } : undefined}
          onClick={onImageUpload}
          {...dragProps}
        >
          Загрузить изображение
          </Button>
        &nbsp;
        <Button variant="outlined" color="error" onClick={onImageRemoveAll}>Удалить все изображения</Button>
        {imageList.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image['data_url']} alt="" width="100" style={{ border: "1px solid black",borderRadius: "10px",padding: '2px', minHeight: '80px' }} />
            <div className="image-item__btn-wrapper">
              <Button onClick={() => onImageUpdate(index)} startIcon={<UpdateIcon />}/>
              <Button onClick={() => onImageRemove(index)} startIcon={<ClearIcon />} color="error"/>
            </div>
          </div>
        ))}
      </div>
    )}
  </ImageUploading>
    )
}

export default ImageUpload;