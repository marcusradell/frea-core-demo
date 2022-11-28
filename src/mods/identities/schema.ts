import { ActionsSchema } from "frea-core";
import { IdentitiesMod } from ".";

export const createSchema = () => {
  const schema: ActionsSchema<IdentitiesMod> = {
    getById: { args: ["id", "fail"] },
  };
};
