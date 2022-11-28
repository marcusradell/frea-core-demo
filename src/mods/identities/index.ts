import { Result } from "frea-core";

type GetById = (args: {
  id: string;
}) => Result<string, { code: "UNKNOWN_ERROR" }>;

export type IdentitiesMod = {
  getById: GetById;
};

export const createIdentitiesMod = (): IdentitiesMod => {
  let identitiesRepo: { [k: string]: string } = {
    a1z9t5: "marcus@example.com",
  };

  return {
    getById: (args) => {
      const data = identitiesRepo[args.id];
      return Promise.resolve({ ok: true, data });
    },
  };
};
