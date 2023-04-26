export const FieldValidator = (validationType, value, type) => {
  let data = {};
  switch (validationType) {
    case "purpose":
      if (value.length === 0) {
        data = {
          type: validationType,
          bool: false,
          message: "*Please select a Purpose",
        };
      } else {
        data = { type: validationType, bool: true, message: "" };
      }
      break;
    case "expense Category":
      if (value.length === 0) {
        data = {
          type: validationType,
          bool: false,
          message: "*Please select an expense Category",
        };
      } else {
        data = { type: validationType, bool: true, message: "" };
      }
      break;

    case "expense Name":
      if (value.length === 0) {
        data = {
          type: validationType,
          bool: false,
          message: "*Please enter a  expense Name",
        };
      } else {
        data = { type: validationType, bool: true, message: "" };
      }
      break;

    case "Reciept Date":
      if (value === null) {
        data = {
          type: validationType,
          bool: false,
          message: "*Please Select the Date",
        };
      } else {
        data = { type: validationType, bool: true, message: "" };
      }
      break;

    case "Project Id":
      if (value.length === 0) {
        data = {
          type: validationType,
          bool: false,
          message: "*Please Select Project Id",
        };
      } else {
        data = { type: validationType, bool: true, message: "" };
      }
      break;

    case "Currency":
      if (value.length === 0) {
        data = {
          type: validationType,
          bool: false,
          message: "*Please enter a Currency",
        };
      } else {
        data = { type: validationType, bool: true, message: "" };
      }
      break;

    case "Bill Amount":
      if (value.length === 0) {
        data = {
          type: validationType,
          bool: false,
          message: "*Please enter a Bill Amount",
        };
      } else {
        data = { type: validationType, bool: true, message: "" };
      }
      break;

    case "Claim Amount":
      if (value.length === 0) {
        data = {
          type: validationType,
          bool: false,
          message: "*Please enter a Claim Amount",
        };
      } else {
        data = { type: validationType, bool: true, message: "" };
      }
      break;
  }
  return data;
};
