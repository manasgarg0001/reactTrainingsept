import React, { useState } from "react";
import { nanoid } from "nanoid";
import { doc, setDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebase, db, storage } from "../../firebase";
export const useUploadPost = () => {
  const [isLoading, setIsLoading] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const postRef = collection(db, "posts");
  const uploadPost = async (payload) => {
    setIsLoading(true);
    let url = "";
    if (typeof payload.uploadFile === String) {
      url = payload.uploadFile;
    } else {
      const ImageResponse = await fetch(payload.uploadFile);
      url = await ImageResponse.blob();
    }

    const storageRef = ref(storage, `post/${nanoid()}`);
    await uploadBytes(storageRef, url).then(async (snapshot) => {
      await getDownloadURL(ref(storageRef))
        .then((url) => {
          setDoc(doc(postRef), {
            ...payload,
            uploadFile: url,
          });
          setIsSuccess(true);
        })
        .catch((error) => {
          console.log(error, "error");
        });
    });
    setIsLoading(false);
  };
  return { uploadPost, isLoading, isSuccess };
};
