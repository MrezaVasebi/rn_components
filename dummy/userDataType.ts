type gender = "Male" | "Female";

type marriedStatus = "Single" | "Married";

export interface IAddress {
  allay: string;
  postalCode: number;
  streetName: string;
  buildingName: string;
}

interface IEducation {
  uniName: string;
  average: number;
  endDate: string;
  startDate: string;
}

export interface IUser {
  _id: number;
  age: number;
  fName: string;
  lName: string;
  gender: gender;
  fullName: string;
  address: IAddress;
  education: IEducation[];
  marriedStatus: marriedStatus;
}
