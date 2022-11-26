// src/server/trpc/router/index.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import { registerRouter } from "./register";


export const appRouter = router({
  auth: authRouter,
 // register: registerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
