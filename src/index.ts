import { QuestionServices } from "./services/question.services";
import { StudentServices } from "./services/student.services";
import { StudentInfoServices } from "./services/studentInfo.services";

const studentServices = new StudentServices;
const studentInfoServices = new StudentInfoServices;
const questionServices = new QuestionServices;

const testCreate = async () => {
  const singleResponse = await studentInfoServices.create({
    phone: "555-5555",
    address: "Pirate Street, 55",
    studentId: 1
  });

  const manyResponse = await studentInfoServices.createMany([
    {
      phone: "777-7777",
      address: "Blade Street, 77",
      studentId: 2
    },
    {
      phone: "222-2222",
      address: "Jade Street, 22",
      studentId: 3
    }
  ]);

  console.log(singleResponse);
  console.log(manyResponse);
}

const testRead = async () => {
  const getOne = await studentServices.getStudent(1);
  const getSearch = await studentServices.searchStudents("jade");
  const getAll = await studentServices.getStudents();

  console.log(getOne);
  console.log(getSearch);
  console.log(getAll);
}

const testUpdate = async () => {
  const student = await studentServices.update(3, { email: "jempire@mail.com" });
  const studentInfo = await studentInfoServices.update(3, { phone: "333-3333", address: "Jade Street, 1234" });

  console.log(student);
  console.log(studentInfo);
}

const testCreateQuestions = async () => {
  const single = await questionServices.create({
    title: "Who?",
    content: "Who's there?",
    studentId: 1
  });

  const many = await questionServices.createMany([
    {
      title: "Where?",
      content: "Where is it??",
      studentId: 1
    },
    {
      title: "How?",
      content: "Seriously, just how??",
      studentId: 3
    }
  ]);

  console.log(single);
  console.log(many);
}

const testDelete = async () => {
  const single = await questionServices.delete(3);
  const many = await questionServices.deleteStudentQuestions(1);
  console.log(single);
  console.log(many);
}

//testCreate();
//testRead();
//testUpdate();
//testDelete();

//testCreateQuestions();
