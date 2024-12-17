import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
  DialogActions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./AddressForm.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Address } from "../../../models/Address";

export default function AddressForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>();

  const onSubmit: SubmitHandler<Address> = (data) => {
    console.log("Submitted Address:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      
    </div>
  );
}
