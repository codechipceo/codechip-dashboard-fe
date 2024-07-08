import { useState } from "react";
import { apiPayloads } from "../../Constants/payloads";
import { FormComponent } from "../../Components/FormComponent/FormComponent";
import { formDefinitions } from "../../Constants/formDefinition";
import DataTable from "../../Components/Common/DataTable";
import { tableColumns } from "../../Constants/tableColumn";
import { Box, Button } from "@mui/material";
import { useClients } from "../../Hooks/useClients";
import { useDispatch } from "react-redux";
import { createClientFn } from "../../store/clientSlice";

const { clientForm } = formDefinitions;
const { clientPayload } = apiPayloads;
const { clientColumns } = tableColumns;
export const Clients = () => {
  /*
  ########################################################################
          STATES
  ########################################################################
 */

  const [isForm, setForm] = useState(false);
  const [status, setStatus] = useState("CREATE");
  const [client, setClient] = useState({ ...clientPayload });
  const dispatch = useDispatch();

  /*
  ########################################################################
          API HOOKS
  ########################################################################
 */
  const { data: clientData } = useClients();

  /*
  ########################################################################
          HANDLER FUNCTIONS
  ########################################################################
 */

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...client };
    data[name] = value;
    console.log(name, value);
    setClient(data);
  };

  const handleEdit = (row) => {
    const data = { ...row };
    data.clientId = data._id;
    setClient(data);
    setStatus("EDIT");
    setForm(true);
  };

  const handleSubmit = () => {
    dispatch(createClientFn(client));
  };
  const handleDelete = () => {};

  const handleCancel = () => {
    setStatus("");
    setClient({ ...clientPayload });
    setForm(false);
  };
  return (
    <Box bgcolor={"white"} maxWidth={"95%"} mx={"auto"}>
      {isForm === false ? (
        <>
          <Button
            onClick={() => {
              setStatus("CREATE");
              setForm(true);
            }}
          >
            Create
          </Button>
          <Box maxWidth={"100%"}>
            <DataTable
              columns={clientColumns}
              rows={clientData}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </Box>
        </>
      ) : (
        <FormComponent
          formPayload={client}
          formDefinition={clientForm}
          status={status}
            onCancel={handleCancel}
            handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
    </Box>
  );
};
