import React, { useState } from "react";
import { FormComponent } from "../../Components/FormComponent/FormComponent";
import { formDefinitions } from "../../Constants/formDefinition";
import { apiPayloads } from "../../Constants/payloads";
import { tableColumns } from "../../Constants/tableColumn";
import { Box, Button, TextField, Typography } from "@mui/material";
import DataTable from "../../Components/Common/DataTable";
import { useDispatch } from "react-redux";
import { createProjectFn, updateProjectFn } from "../../store/projectSlice";
import { useClients } from "../../Hooks/useClients";
import { useProjects } from "../../Hooks/useProjects";

const StageForm = ({ arr, i, setterFn }) => {
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const data = [...arr];
    data[i][name] = value;
    setterFn(data);
  };
  return (
    <Box display={"flex"} gap={2}>
      <TextField
        name='stageName'
        placeholder='Stage Name'
        value={arr[i].stageName}
        onChange={(e) => handleChange(e, i)}
      ></TextField>
      <TextField
        name='payment'
        placeholder='Payment Done'
        onChange={(e) => handleChange(e, i)}
        value={arr[i].payment}
      ></TextField>
    </Box>
  );
};
const { projectForm } = formDefinitions;
const { projectPayload } = apiPayloads;
const { projectColumns } = tableColumns;

export const Projects = () => {
  /*
  ########################################################################
          STATES
  ########################################################################
 */

  const dispatch = useDispatch();
  const [isForm, setForm] = useState(false);
  const [status, setStatus] = useState("CREATE");
  const [project, setProject] = useState({ ...projectPayload });

  const [milestonePayment, setMileStonePayment] = useState([
    { stageName: "", payment: "" },
  ]);
  const [investPayment, setInvestPayment] = useState([
    { stageName: "", payment: "" },
  ]);
  /*
  ########################################################################
          API HOOKS
  ########################################################################
 */
  const { data: projectData } = useProjects();
  const { data: clientData } = useClients();

  const clients = {
    name: "clientId",
    label: "Client",
    type: "select",
    options: clientData, // This would typically be populated with client data
    displayKey: "clientName", // Assumes that client objects have a clientName field
  };
  projectForm[0] = clients;
  console.log(project);

  /*
  ########################################################################
          HANDLER FUNCTIONS
  ########################################################################
 */
  const handleMilestoneChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMilestones = milestonePayment.map((milestone, i) => {
      if (i === index) {
        return { ...milestone, [name]: value };
      }
      return milestone;
    });
    setMileStonePayment(updatedMilestones);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...project };
    data[name] = value;
    setProject(data);
  };

  const handleEdit = (row) => {
    const data = { ...row };
    data.projectId = data._id;
    setProject(data);
    setMileStonePayment(data.milestonePayment);
    setInvestPayment(data.investMilestone);
    setStatus("EDIT");
    setForm(true);
  };
  console.log(projectData,"Data")

  const handleSubmit = () => {
    const submitPayload = {
      ...project,
      milestonePayment,
      investMilestone: investPayment,
    };
    status === "CREATE"
      ? dispatch(createProjectFn(submitPayload))
      : dispatch(updateProjectFn(submitPayload));
  };
  const handleDelete = () => {};

  const handleCancel = () => {
    setStatus("");
    setProject({ ...projectPayload });
    setForm(false);
  };
  return (
    <div>
      <Button
        onClick={() => {
          setStatus("CREATE");
          setForm(true);
        }}
      >
        Create
      </Button>
      <Box bgcolor={"white"} maxWidth={"90%"} mx={"auto"} p={5} my={5}>
        {isForm === false ? (
          <DataTable
            columns={projectColumns}
            rows={projectData}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ) : (
          <FormComponent
            status={status}
            formPayload={project}
            handleChange={handleChange}
            onCancel={handleCancel}
            handleSubmit={handleSubmit}
            formDefinition={projectForm}
          >
            <Box>
              <Typography>Milestone Payment</Typography>
              <Box>
                <Box>
                  {milestonePayment.map((milestone, i) => {
                    return (
                      <StageForm
                        arr={milestonePayment}
                        i={i}
                        setterFn={setMileStonePayment}
                        key={i}
                      />
                    );
                  })}
                </Box>
              </Box>
              <Button
                onClick={() => {
                  const data = [
                    ...milestonePayment,
                    { stageName: "", payment: "" },
                  ];
                  setMileStonePayment(data);
                }}
              >
                +
              </Button>
            </Box>

            {/* invest payment */}
            <Box>
              <Typography>Total Investment</Typography>
              <Box>
                <Box>
                  {investPayment.map((milestone, i) => {
                    return (
                      <StageForm
                        arr={investPayment}
                        i={i}
                        setterFn={setInvestPayment}
                        key={i}
                      />
                    );
                  })}
                </Box>
              </Box>
              <Button
                onClick={() => {
                  const data = [
                    ...investPayment,
                    { stageName: "", payment: "" },
                  ];
                  setInvestPayment(data);
                }}
              >
                +
              </Button>
            </Box>
          </FormComponent>
        )}
      </Box>
    </div>
  );
};
