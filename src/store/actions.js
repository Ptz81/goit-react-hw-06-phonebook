import { createAction, nanoid } from "@reduxjs/toolkit";

export const addNumber = createAction("tasks/addNumber", text => {
  return { payload: { text, id: nanoid(), completed: false, }, };
});
export const deleteNumber = createAction("tasks/deleteNumber");
export const setStatusFilter = createAction("filters/setStatusFilter");
