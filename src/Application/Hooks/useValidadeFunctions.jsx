import { nameOfFunc } from "../Shared/Commons/Constants/NameIdFunctions";

export const validateFunctions = (field, state) => {

  if (state) {
    if (nameOfFunc[field] == state.filter((i) => i == nameOfFunc[field])) {
      return true;
    }
  }
  return false;
};
