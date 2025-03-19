/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { enrollments } from "./Database";
const initialState = {
  enrollments: enrollments,
  showEnrollments: false,
};
const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
        _id: uuidv4(),
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenroll: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => e._id !== enrollmentId);
    },
    getEnrollment: (state, { payload: enrollment }) => {
        state.enrollments.find((e: any) => 
            e.user === enrollment.user &&
            e.course === enrollment.course)
    },
    toggleEnrollments: (state) => {
        state.showEnrollments = !state.showEnrollments;
    }
  },
});
export const { enroll, unenroll, getEnrollment, toggleEnrollments } =
  enrollmentSlice.actions;
export default enrollmentSlice.reducer;