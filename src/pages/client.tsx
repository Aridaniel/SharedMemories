// @filename: client.ts
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/trpc/router/register";
import React from "react";


const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});


function Client() {
  async function create() {
    const createdUser = await trpc.userCreate.mutate({ name: "sachinraja" });
    console.log("hallosmari", createdUser);
  }

  create();

  return <div>hallo </div>;
}

export default Client;
