import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useExcelToJSon } from "../../Hooks/useExcelToJson";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
export const AddLeads = () => {
  const [leadStatus, setLeadStatus] = useState("NEW_LEAD");
  const { jsonData, handleFileUpload } = useExcelToJSon();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(jsonData);
    if (!jsonData[0].hasOwnProperty("leadStatus")) {
      const addLeadStatusArr = jsonData.map((jsonObj) => {
        return { ...jsonObj, leadStatus };
      });
      console.log(addLeadStatusArr);
    }
  };
  return (
    <Box sx={{ bgcolor: "white", maxWidth: "90%" }} mx={"auto"} my={5} p={4}>
      <Typography variant='h5' mb={4} fontWeight={"bold"}>
        Upload Bulk Leads
      </Typography>
      <Box display={"flex"} justifyContent={"space-between"} gap={10}>
        <FormControl>
          <InputLabel id='demo-simple-select-label'>Lead Type</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={leadStatus}
            name='leadStatus'
            label='Lead Type'
            onChange={(e) => {
              setLeadStatus(e.target.value);
            }}
          >
            {["NEW_LEAD", "FOLLOW_UP"].map((leadValue, i) => {
              return (
                <MenuItem key={i} value={leadValue}>
                  {leadValue}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <input
          accept='*'
          style={{ display: "none", marginLeft: "auto" }}
          id='raised-button-file'
          type='file'
          onChange={handleFileUpload}
        />
        <label htmlFor='raised-button-file'>
          <Button
            fullWidth
            variant='contained'
            component='span'
            endIcon={<CloudUploadIcon />}
          >
            Select File
          </Button>
        </label>
      </Box>

      <Box>
        {jsonData.length > 0 && (
          <Box>
            <TableContainer component={Paper} style={{ marginTop: "20px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    {Object.keys(jsonData[0]).map((key) => (
                      <TableCell key={key}>{key}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jsonData.map((row, index) => (
                    <TableRow key={index}>
                      {Object.values(row).map((value, i) => (
                        <TableCell key={i}>{value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box display={"flex"} justifyContent={"flex-end"} py={4}>
              <Button variant='contained' onClick={() => handleSubmit()}>
                Upload Leads
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
