"use client";

import { createContext, useContext, type ReactNode } from "react";

export interface IUseThreadLineProperites {
  disableBend?: boolean;
  disableThreads?: boolean;
}
const ThreadLineContext = createContext<IUseThreadLineProperites | null>(null);
type TCommentThreadLineProviderProps = {
  children: ReactNode;
  properties: IUseThreadLineProperites;
};
export const CommentThreadLineProvider = ({
  children,
  properties,
}: TCommentThreadLineProviderProps) => {
  return (
    <ThreadLineContext.Provider value={properties}>
      {children}
    </ThreadLineContext.Provider>
  );
};

export const useThreadLine = () => {
  const context = useContext(ThreadLineContext);
  if (!context) {
    throw new Error(
      "useThreadLine` can only be used within components wrapped by CommentThreadLineProvider.",
    );
  }
  return context;
};
