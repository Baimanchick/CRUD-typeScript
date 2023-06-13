export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const dummyEmployeeList: IEmployee[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: "Baimurat",
    lastName: "Abdalimov",
    email: "baika132213@gmail.com",
  },
];

export enum PageEnum {
  list,
  add,
  edit,
}
