import {initializeApp} from "firebase/app";
import {getStorage, ref, StorageReference, uploadBytes} from "firebase/storage";
import React, {useState} from "react";


const firebaseConfig = {
  apiKey: "AIzaSyCJbEIKuTmFw5sr_1JeVUU0klOR7vXlyY0",
  authDomain: "upload-storage-cjh.firebaseapp.com",
  projectId: "upload-storage-cjh",
  storageBucket: "upload-storage-cjh.appspot.com",
  messagingSenderId: "656073901842",
  appId: "1:656073901842:web:203739d9681c1cd1de95cb"
};

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState< File | undefined>()
  const handleUpload = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if(!selectedFile) {
      alert("Please select a file");
      return;
    }


    //connects to Fireproject
    const app = initializeApp(firebaseConfig);
    //connect to bucket
    const storage = getStorage(app);
    //connect to a reference to our file in the bucket
    const filename: string = selectedFile?.name;
    const imgRef: StorageReference = ref(storage, "photos/" + filename)
    //Todd's quick cheat - create the url from reference
    const url = `https://firebasestorage.googleapis.com/v0/b/upload-storage-cjh.appspot.com/o/photos%2F${filename}?alt=media`
    //create a file upload file to bucket
     uploadBytes(imgRef, selectedFile);
     //add an await or .then and then update our database with url 

  }
  return(
    <form onSubmit={handleUpload}>
      <input type="file" name="photo"
      onChange={(e: React.FormEvent<HTMLInputElement> | any) => setSelectedFile(e.currentTarget.files[0])}
      // value={selectedFile.name} 
      />
      <button type="submit">Upload</button>
    </form>
  )
}