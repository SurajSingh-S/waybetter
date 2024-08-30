 import { configureStore } from "@reduxjs/toolkit";

import todoreducer from " ../features/todo/todoslice";

 export const store = configureStore({
    reducer:todoreducer
 })
