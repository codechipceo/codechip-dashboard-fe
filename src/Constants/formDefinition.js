const clientForm = [
  {
    name: "clientName",
    label: "Client Name",
    type: "text",
  },
  {
    name: "clientEmail",
    label: "Client Email",
    type: "email",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "text",
  },
  {
    name: "secondaryNumber",
    label: "Secondary Number",
    type: "text",
  },
  {
    name: "companyLink",
    label: "Company Link",
    type: "text",
  },
  {
    name: "location",
    label: "Location",
    type: "select",
    options: [
      { label: "NATIONAL", _id: "NATIONAL" },
      { label: "INTERNATIONAL", _id: "INTERNATIONAL" },
    ],
    displayKey: "label",
  },
];

const projectForm = [
  {
    name: "clientId",
    label: "Client",
    type: "select",
    options: [], // This would typically be populated with client data
    displayKey: "clientName", // Assumes that client objects have a clientName field
  },
  {
    name: "projectName",
    label: "Project Name",
    type: "text",
  },
  {
    name: "projectType",
    label: "Project Type",
    type: "text",
  },
  {
    name: "projectStatus",
    label: "Project Status",
    type: "select",
    options: [
      { label: "Delivered", _id: "DELIVERED" },
      { label: "In Progress", _id: "IN_PROGRESS" },
    ],
    displayKey: "label",
  },
  {
    name: "startDate",
    label: "Start Date",
    type: "text",
  },
  {
    name: "expectedEndDate",
    label: "Expected End Date",
    type: "text",
  },
  {
    name: "liveLink",
    label: "Live Link",
    type: "text",
  },
  {
    name: "projectPrice",
    label: "Project Price",
    type: "number",
  },
  {
    name: "milestonePayment",
    label: "Milestone Payments",
    type: "array",
    itemSchema: [
      {
        name: "stageName",
        label: "Stage Name",
        type: "text",
      },
      {
        name: "payment",
        label: "Payment",
        type: "number",
      },
    ],
  },
  {
    name: "investMilestone",
    label: "Investment Milestones",
    type: "array",
    itemSchema: [
      {
        name: "stageName",
        label: "Stage Name",
        type: "text",
      },
      {
        name: "payment",
        label: "Payment",
        type: "number",
      },
    ],
  },

  {
    name: "providingHosting",
    label: "Providing Hosting",
    type: "select",
    options: [
      { label: "Yes", _id: "yes" },
      { label: "No", _id: "no" },
    ],
    displayKey: "label",
  },
];

const leadForm = [
  {
    name: "projectStatus",
    label: "Project Status",
    type: "select",
    options: [
      { label: "Delivered", _id: "DELIVERED" },
      { label: "In Progress", _id: "IN_PROGRESS" },
    ],
    displayKey: "label",
  },
];

export const formDefinitions = {
  clientForm,
  projectForm,
};
