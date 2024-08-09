"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState(null);

    const imageInput = useRef();
    function handlePickClick() {
        imageInput.current.click();
    }

    function handleOnChange(event) {


        const pickedFile = event.target.files[0];

        if (!pickedFile) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(pickedFile);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image Picked yet.</p>}
                    {pickedImage && (

                        <Image src={pickedImage} alt="The image selected by the user" layout="fill" objectFit="cover" />

                    )}
                </div>
                <input
                    ref={imageInput}
                    onChange={handleOnChange}
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    required
                />
            </div>
            <button className={classes.button} type="button" onClick={handlePickClick}>
                Pick an Image
            </button>
        </div>
    );
}
