import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";

const DataTable = ({ rows, columns, handleEdit, handleDelete }) => {
  console.log(rows, "ROWS")
  const [selectionModel, setSelectionModel] = useState([]);
  const actionColumn = {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: (params) => (
      <div>
        <Button
          onClick={() => handleEdit(params.row)}
          style={{ marginRight: 10 }}
        >
          <EditSharpIcon sx={{ color: "gray" }} />
        </Button>
        <Button size='small' onClick={() => handleDelete(params.row._id)}>
          <DeleteForeverSharpIcon sx={{ color: "red" }} />
        </Button>
      </div>
    ),
  };

  return (
    <div className='flex justify-center items-center min-h-screen w-full'>
      <div className='w-full relative'>
        {rows && rows.length > 0 ? (
          <DataGrid
            rows={rows}
            columns={[...columns, actionColumn]}
            getRowId={(row) => row._id}
            className=''
            checkboxSelection
            selectionModel={selectionModel}
            onSelectionModelChange={(newSelection) =>
              setSelectionModel(newSelection)
            }
          />
        ) : (
          <Typography>Data Does Not Exist</Typography>
        )}
      </div>
    </div>
  );
};

DataTable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DataTable;
