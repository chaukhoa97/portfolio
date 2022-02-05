import { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  next?: { slug: string; title: string };
  prev?: { slug: string; title: string };
  allDocsData?;
  children: ReactNode;
}
const DocLayout = ({ children, allDocsData }: Props) => {
  return (
    <div className="flex ">
      <div className="hidden w-72 px-6 lg:block">
        <ul>
          {allDocsData.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/docs/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-auto">{children}</div>
    </div>
  );
};

export default DocLayout;
