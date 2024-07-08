const clientColumns = [
  { field: "_id", headerName: "ID" , width:40},
  { field: "clientName", headerName: " Name", width: 100 },
  { field: "clientEmail", headerName: "Email", width: 150 },
  { field: "phoneNumber", headerName: "Phone Number", width: 150 },
  { field: "secondaryNumber", headerName: "Secondary Number", width: 150 },
  { field: "companyLink", headerName: "Company Link", width: 150 },
  {
    field: "location",
    headerName: "Location",
    flex: 1,
  },
];
const projectColumns = [
  { field: "_id", headerName: "ID" },
  { field: "projectName", headerName: "Project Name", width: 300 },
  { field: "projectType", headerName: "Project Type", width: 200 },
  {
    field: "projectStatus",
    headerName: "Status",
    flex: 1,
  },
  { field: "startDate", headerName: "Start Date", width: 200 },
  { field: "expectedEndDate", headerName: "Expected End Date", width: 200 },
  { field: "liveLink", headerName: "Live Link", width: 300 },
  { field: "projectPrice", headerName: "Price", type: "number", flex: 1 },
  {
    field: "providingHosting",
    headerName: "Providing Hosting",
    type: "boolean",
    flex: 1,
  },
];

export const tableColumns = {
  clientColumns,
  projectColumns,
};
