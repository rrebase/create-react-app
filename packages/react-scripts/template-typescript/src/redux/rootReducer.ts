import checklistReducer from "features/Checklist/checklistSlice";
import taskReducer from "features/Checklist/Task/taskSlice";
import { combineReducers } from "redux-starter-kit";
import { Action } from "redux-starter-kit";
import { ThunkAction } from "redux-thunk";

const rootReducer = combineReducers({
  checklist: checklistReducer,
  task: taskReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default rootReducer;
