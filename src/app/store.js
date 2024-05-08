import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
// import { serializableCheck } from "@reduxjs/toolkit/dist/middleware/defaultMiddleware";

const middleware = (getDefaultMiddleware) => {
  const defaultMiddlewares = getDefaultMiddleware({
    serializableCheck: false,
  });

  return [...defaultMiddlewares];
};

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware,
});

export default store;
