import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className="max-w-6xl px-4 mx-auto sm:px-6 xl:max-w-7xl ">
      {children}
    </div>
  );
}
