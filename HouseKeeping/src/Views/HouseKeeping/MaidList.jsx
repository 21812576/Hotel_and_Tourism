import React, { useEffect, useState } from "react";
import { MaidData } from "../../../Data/MaidData";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FetchMaids } from "../../Service/MaidAPI";
import AddButton from "./Components/AddButton";
import MaidDelete from "./MaidDelete";
import UpdateButton from "./Components/UpdateButton";

const MaidList = () => {
  const [maidData, setMaidData] = useState(MaidData);
  const [reFetch, setReFetch] = useState(false);

  const fetchData = async () => {
    try {
      const response = await FetchMaids();
      setMaidData(response.data);
      console.log("~ fetchData ~ response:", response);
    } catch (error) {
      console.log("fetchData ~ error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [reFetch]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Maid Name </TableCell>
              <TableCell>HK Number</TableCell>
              <TableCell >Relavant Area</TableCell>
              <TableCell >Phone Number</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {maidData.map((maid) => (
              <TableRow
                key={maid._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{maid.maidName}</TableCell>
                <TableCell>{maid.hkNumber}</TableCell>
                <TableCell >{maid.relavantArea}</TableCell>
                <TableCell >{maid.phoneNumber}</TableCell>
                
                <TableCell align="right">
                  <UpdateButton maidId={maid._id} />
                  <MaidDelete
                    maidId={maid._id}
                    reFetch={reFetch}
                    setReFetch={setReFetch}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddButton />
    </>
  );
};

export default MaidList;