import userRouter from "./users/router.js";
import regionRouter from "./regions/router.js";
import subjectRouter from "./subjects/router.js";
import universityRouter from "./universities/router.js";
import facultyRouter from "./faculties/router.js";
import questionRouter from "./questions/router.js";
import resultRouter from "./results/router.js";

export default [
  userRouter,
  regionRouter,
  subjectRouter,
  questionRouter,
  universityRouter,
  facultyRouter,
  resultRouter,
];
