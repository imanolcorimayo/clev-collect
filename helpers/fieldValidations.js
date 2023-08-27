export const required = (fieldName) => (value) =>
  !value && value !== 0 ? `${capitalize(fieldName)} is required` : false;

export const email = (value) =>
  value == "" || (value && !/^[A-Z0-9'._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? "Invalid email address" : false;

export const linkedinUrl = (value) => (value && !value.includes("linkedin.com") ? "Invalid linkedin's url" : false);

// check if the signature is equal to the full name (case insensitive)
export const signatureEquals = (fullName) => (value) => {
  return value && fullName && value.toLowerCase() !== fullName.toLowerCase()
    ? `Please sign by typing your full name (e.g. ${fullName})`
    : undefined;
};

export const isValidDate = (dateString) => {
  // First check for the pattern
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return "Please enter a valid date";

  // Parse the date parts to integers
  var parts = dateString.split("/");
  var day = parseInt(parts[1], 10);
  var month = parseInt(parts[0], 10);
  var year = parseInt(parts[2], 10);

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12) return "Year or month out of limits";

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;

  // Check the range of the day
  if (!(day > 0 && day <= monthLength[month - 1])) {
    return "Day out of range";
  }

  // Check if date is not after today
  const todaysDate = new Date();
  const pickedDate = new Date(year, month - 1, day);
  if (pickedDate <= todaysDate) {
    return "Date cannot be today or in the past";
  }

  return undefined;
};

export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value.replace(/[^\d]/g, ""))
    ? "Invalid phone number, Must be 10 digits"
    : false;

export const booking = (value) => {
  const REGEX = /([0-9A-Fa-f]{8})$/;
  return value && !REGEX.test(value.replace(/[^0-9A-Fa-f]/g, "")) ? "Invalid booking reference" : false;
};

export const number = (value) => (value && Number.isNaN(Number(value)) ? "Must be a number" : false);

export const zipLength = (value) => (value && value.length !== 5 ? `Must be 5 digits long` : false);

export const bioLength = (value) =>
  value && value.length < 400 ? `Your description must be at least 400 characters long` : false;

export const bioMinLength = (value) =>
  value && value.split(" ").filter((n) => n != "").length < 100
    ? `Your description must be at least ${100} words long`
    : undefined;

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const name = (value) => {
  //-z\/x{00C0}-\/x{00FF}][A
  let nameRgx = /^[\u00F1A-Za-z \-]*[\u00F1A-Za-z][\u00F1A-Za-z \-]*$/;
  return value && !nameRgx.test(value) ? "Names cannot contain numbers or special characters" : false;
};

export const scheduleConstraintsLength = (value) => value && value.split(" ").filter((n) => n != "").length > 40 ? `Your schedule constraints must be 40 words long or less` : undefined;


//export const name = (value) => {
//  return value &&  /^[A-Za-z]+$/
//    /^[A-Za-z\x{00C0}-\x{00FF}][A-Za-z\x{00C0}-\x{00FF}\'\-]+([\ A-Za-z\x{00C0}-\x{00FF}][A-Za-z\x{00C0}-\x{00FF}\'\-]+)*/u.test(
//      value
//    )
//    ? "Names cannot contain numbers or special characters"
//    : false;
//};

// Validation for names
// /\d/.test(value.value)
// First Name can only contain alphabetical characters.

export default {
  length: (length) => (value) => value && value.length !== length ? `Must be ${length} characters` : undefined,
  lengths: (lengths) => (value) =>
    value && !lengths.includes(value.length) ? `Must be ${lengths.join(" or ")} characters` : undefined,
  maxLength: (max) => (value) => value && value.length > max ? `Must be ${max} characters or less` : undefined,
  minLength: (min) => (value) => value && value.length < min ? `Must be ${min} characters or more` : undefined,
  minWordLength: (min) => (value) =>
    value &&
    value.split(" ").filter(function (n) {
      return n != "";
    }).length < min
      ? `Your description must be at least ${min} words long`
      : undefined,
  minValue: (min) => (value) => value !== undefined && value < min ? `Must be at least ${min}` : undefined,
  maxValue: (max) => (value) => value !== undefined && value > max ? `Must be at most ${max}` : undefined,

  alphaNumeric: (value) => (value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined),
  matches:
    (name1, inputName1 = null) =>
    (value, allValues) =>
      value && allValues[name1] && value !== allValues[name1] ? `Must match ${inputName1 || name1}` : undefined,
  lessThan:
    (name1, inputName1 = null) =>
    (value, allValues) =>
      value && allValues[name1] && parseInt(allValues[name1], 10) < parseInt(value, 10)
        ? `Must be less than ${inputName1 || name1}`
        : undefined,
  uppercaseCharacter: (value) =>
    value && value.search(/[A-Z]/) < 0 ? "Must contain an uppercase character" : undefined,
  specialCharacter: (value) =>
    value && !/[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/g.test(value) ? "Must contain a special character" : undefined,
  hasNumber: (value) => (value && value.search(/[0-9]/) < 0 ? "Must contain a number" : undefined),
  cardNumber: (value) => {
    if (value) {
      const firstTwo = value.substring(0, 2);
      if (firstTwo === "37" || firstTwo === "34") {
        if (!/^([0-9]{15})$/i.test(value)) {
          return "Invalid card number, Must be 15 digits";
        }
      } else if (!/^([0-9]{16})$/i.test(value)) {
        return "Invalid card number, Must be 16 digits";
      }
    }
    return undefined;
  },
  profile: (formResumeName) => (value) => {
    return formResumeName || value ? undefined : "LinkedIn profile or resume required";
  },
  signatureEquals: (fullName) => (value) =>
    value && fullName && value !== fullName ? `Please sign by typing your full name (e.g. ${fullName})` : undefined,
};
