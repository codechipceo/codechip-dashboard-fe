const clientPayload = {
  clientName: "",
  clientEmail: "",
  phoneNumber: "",
  secondaryNumber: "",
  companyLink: "",
  location: "", // Should be one of "NATIONAL" or "INTERNATIONAL"

};

const projectPayload = {
  clientId: "", // ID of the associated client
  projectName: "",
  projectType: "",
  projectStatus: "", // Should be one of "DELIVERED" or "IN_PROGRESS"
  startDate: "",
  expectedEndDate: "",
  liveLink: "",
  projectPrice: "",
  milestonePayment: [
    {
      stageName: "",
      payment: "",
    },
  ],
  investMilestone: [
    {
      stageName: "",
      payment: "",
    },
  ],
  providingHosting: false, // Boolean indicating whether hosting is provided

};
export const apiPayloads = {
    clientPayload, projectPayload
}
