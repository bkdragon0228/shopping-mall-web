import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Dropzone from 'react-dropzone';
import { uploadProduct } from '../../_action/product_action';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    const [images, setImages] = useState([]); // 이미지 받아올 값

    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let body = {
            name,
            description,
            price,
            images,
        };
        dispatch(uploadProduct(body)).then((res) => {
            if (res.payload.success) {
                navigator('/');
            } else {
                alert('상품 업로드에 실패하였습니다.');
            }
        });
    };

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    };

    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
    };
    const priceChangeHandler = (e) => {
        setPrice(e.target.value);
    };

    const dropHandler = (files) => {
        let formData = new FormData();
        const config = {
            Headers: { 'content-type': 'multipart/form-data' },
        };
        formData.append('file', files[0]);

        axios.post('/api/products/images', formData, config).then((res) => {
            if (res.data.success) {
                setImages((prev) => [...prev, res.data.filePath]);
            } else {
                alert('fail to file upload');
            }
        });
    };

    const deleteHandler = (image) => {
        const currentIndex = images.indexOf(image);
        const newImages = [...images];
        newImages.splice(currentIndex, 1);
        setImages(newImages);
    };
    return (
        <div>
            <div>
                <h2> 상품 업로드</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <Dropzone onDrop={dropHandler}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        </section>
                    )}
                </Dropzone>

                <div>
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: 'flex',
                                width: '350px',
                                height: '240px',
                                overflowX: 'scroll',
                            }}
                            onClick={() => deleteHandler(img)} // 파라미터가 있는 함수를 쓸 땐 이렇게!
                        >
                            <img
                                style={{
                                    minWidth: '300px',
                                    width: '300px',
                                    height: '240px',
                                }}
                                src={`http://localhost:5000/${img}`}
                            />
                        </div>
                    ))}
                </div>
                <label>이름</label>
                <input value={name} onChange={nameChangeHandler} />

                <label>설명</label>
                <input value={description} onChange={descriptionChangeHandler} />

                <label>가격($)</label>
                <input value={price} onChange={priceChangeHandler} />

                <button type="submit">확인</button>
            </form>
        </div>
    );
};

export default UploadPage;
