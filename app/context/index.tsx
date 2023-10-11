import { StatesProvider } from "./states";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <StatesProvider>{children}</StatesProvider>;
};
