import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import { marked } from 'marked';

export default function Snippets({ htmlString }) {
  return (
    <>
      <Head>
        <title>Snippets</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
    </>
  );
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs.readFileSync('data/snippets.md').toString();
  const htmlString = marked(matter(markdownWithMetadata).content);

  return {
    props: {
      htmlString,
    },
  };
};
