import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  Input,
} from "@mui/material";

export const useExcelToJSon = () => {
  const [jsonData, setJsonData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      setJsonData(json);
    };

    reader.readAsArrayBuffer(file);
  };

  return { jsonData, handleFileUpload };
  // return (
  //   <Container>
  //     <Typography variant='h4' gutterBottom>
  //       Excel to JSON Converter
  //     </Typography>
  //     <Input type='file' accept='.xlsx, .xls' onChange={handleFileUpload} />
  //     {jsonData.length > 0 && (
  //       <TableContainer component={Paper} style={{ marginTop: "20px" }}>
  //         <Table>
  //           <TableHead>
  //             <TableRow>
  //               {Object.keys(jsonData[0]).map((key) => (
  //                 <TableCell key={key}>{key}</TableCell>
  //               ))}
  //             </TableRow>
  //           </TableHead>
  //           <TableBody>
  //             {jsonData.map((row, index) => (
  //               <TableRow key={index}>
  //                 {Object.values(row).map((value, i) => (
  //                   <TableCell key={i}>{value}</TableCell>
  //                 ))}
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //     )}
  //   </Container>
  // );
};
