import gql from "graphql-tag";

export const GET_APPOINMENTS = gql`
  query MyQuery {
    getAppointments(ptId: "6b87d552-a2fe-465a-998c-1b288fee212f") {
      items {
        appointmentDate
        createdOn
        duration
        patientName
        ptId
        zoomUrl
      }
    }
  }
`;