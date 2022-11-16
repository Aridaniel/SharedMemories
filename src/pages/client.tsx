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

    console.log("hallosmari", );
  }

  create();

  return <div>hallo vinur </div>;
}

export default Client;
