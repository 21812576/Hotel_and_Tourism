import React, { useState } from "react";
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
import { CreateMaid } from "../../Service/MaidAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MaidCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    maidName: "",
    hkNumber: "",
    relavantArea: "Kitchen",
    phoneNumber: "",
    
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.hkNumber) {
      tempErrors.hkNumber = "Maid  number is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setErrors({})
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    try {
      // Send a POST request to your server to add the maid to the database
      const response = await CreateMaid(formData);
      toast.success(response.message);

      // Reset the form after successfully adding the maid
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
          <FormControl fullWidth>
            <InputLabel>Relavant Area</InputLabel>
            <Select
              name="relavantArea"
              value={formData.relavantArea}
              onChange={handleChange}
            >
              <MenuItem value="Ground Floor:Parking Area">Ground Floor:Parking Area</MenuItem>
              <MenuItem value="First Floor:Reseption Area">First Floor:Reseption Area</MenuItem>
              <MenuItem value="First Floor:Living Area">First Floor:Living Area</MenuItem>
              <MenuItem value="First Floor:Wash Rooms">First Floor:Wash Rooms</MenuItem>
              <MenuItem value="Second Floor:L1 Rooms">Second Floor:L1 Rooms</MenuItem>
              <MenuItem value="Second Floor:L2 Rooms">Second Floor:L1 Rooms</MenuItem>
              <MenuItem value="Third Floor:A1 Area">Third Floor:A1 Area</MenuItem>
              <MenuItem value="Third Floor:A2 Area">Third Floor:A2 Area</MenuItem>
              <MenuItem value="Fourth Floor:A1 Area">Fourth Floor:A1 Area</MenuItem>
              <MenuItem value="Fourth Floor:A2 Area">Fourth Floor:A2 Area</MenuItem>
              <MenuItem value="Rooftop">Rooftop</MenuItem>
              <MenuItem value="Garden">Garden</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name=" phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
            helperText={errors.phoneNumber}
          />
        </Grid>
        
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Add Maid
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MaidCreate;