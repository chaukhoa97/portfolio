import DocLayout from "@/layouts/DocLayout";
import { getSortedDocsData, getAllDocIds, getDocData } from "@/lib/mdx";

// export async function getStaticProps() {
//   const allDocsData = getSortedDocsData();
//   return {
//     props: {
//       allDocsData,
//     },
//   };
// }

export async function getStaticProps({ params }) {
  const docData = await getDocData(params.id);

  const allDocsData = getSortedDocsData();
  return {
    props: {
      docData,
      allDocsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllDocIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ docData, allDocsData }) {
  return (
    <DocLayout allDocsData={allDocsData}>
      Title: {docData.title}
      <br />
      Date: {docData.date}
      <br />
      <br />
      <br />
      <div dangerouslySetInnerHTML={{ __html: docData.contentHtml }} />
    </DocLayout>
  );
}
