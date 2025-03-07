
import React, { ReactNode } from "react";

interface MainTemplateProps {
  children: ReactNode;
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <div className="pb-52">
      <header>
      </header>

      <main>{children}</main>

      <footer>
      </footer>
    </div>
  );
};
