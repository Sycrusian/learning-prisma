import { StudentServices } from "./services/student.service";

const studentServices = new StudentServices;

const testCreate = async () => {
  const singleResponse = await studentServices.create({
    name: "Dirk Shelsher",
    email: "dshelsher@mail.com"
  });

  const manyResponse = await studentServices.createMany([
    {
      name: "Sarah Blade",
      email: "sblade@mail.com"
    },
    {
      name: "Jade Empire"
    }
  ]);

  console.log(singleResponse);
  console.log(manyResponse);
}

