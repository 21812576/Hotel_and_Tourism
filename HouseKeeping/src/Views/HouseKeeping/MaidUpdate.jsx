import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { FetchOneMaid, UpdateMaid } from "../Service/MaidAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const MaidUpdate = () => {
  const { maidId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    maidName: "",
    hkNumber: "",
    relavantArea: "Kitchen",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    // Make API call to get existing room data
    const fetchMaid = async () => {
      const response = await FetchOneMain(mainId);
      setFormData(response.data);
    };
    fetchMaid();
  }, [maidId]);

  const validate = () => {
    let tempErrors = {};
    

    if (!formData.hkNumber) {
      tempErrors.hkNumber = "hkNumber is required";
    } 

    if (!formData.phoneNumber) {
      tempErrors.phoneNumber= "phoneNumber type is required";
    }else if (isNaN(formData.phoneNumber)) {
        tempErrors.phoneNumber = "phoneNumber must be a number";
      }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setErrors({});
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    try {
      // Send a POST request to your server to add the room to the database
      const response = await UpdateMaid(formData, maidId);
      toast.success(response.message);

      // Reset the form after successfully adding the room
      setFormData({
        maidName: "",
    hkNumber: "",
    relavantArea: "Kitchen",
    phoneNumber: "",
      });
      navigate("/house-keeping/maid/");
    } catch (error) {
      toast.error("oops! something went wrong.");
      console.error("Error adding room:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" align="center">
        Add a New Maid
      </Typography>
      <Grid
        container
        rowGap={2}
        spacing={2}
        mt={1}
        component="form"
        onSubmit={handleSubmit}
      >
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Maid Name"
            name="name"
            value={formData.maidName}
            onChange={handleChange}
            error={errors.maidName}
            helperText={errors.maidName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="HK Number"
            name="maid Id"
            value={formData.hkNumber}
            onChange={handleChange}
            error={errors.hkNumber}
            helperText={errors.hkNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Relavant Area"
              name="relavantArea"
              value={formData.relavantArea}
              onChange={handleChange}
              error={errors.relavantArea}
              helperText={errors.relavantArea}
            />
          </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            error={errors.type}
            helperText={errors.type}
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MaidUpdate;