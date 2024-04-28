import { create } from "zustand";
import config from "./config.json";

export const useConfig = create(set => ({
  Authors: config.Authors,
  CoffeePot: config.CoffeePot,
  Environment: config.Environment,
  Vessel: config.Vessel
}));
