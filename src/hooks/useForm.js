import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("upload_preset", "culturapp");
  formData.append("file", file);

  const res = await fetch("	https://api.cloudinary.com/v1_1/deildujgx/upload", {
    method: "POST",
    body: formData,
  });
  const json = await res.json();
  return json.secure_url;
};

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleImageFile = async ({ target }, uid) => {
    const file = target.files[0],
      res = await uploadFile(file);
    setForm({
      ...form,
      "img-url": res,
      uid,
    });
  };

  const handleSubmit = async (event, form) => {
    event.preventDefault();
    if (form["img-url"] !== "" && form.name !== "") {
      try {
        const docRef = await addDoc(collection(db, "eventsdb"), form);
        console.log("Document written with ID: ", docRef.id);
        window.alert("Evento añadido con éxito");
        event.target.reset();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      console.log("Faltan campos");
    }
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleImageFile,
  };
};
