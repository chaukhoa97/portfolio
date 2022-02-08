import fs from 'fs';
import PageTitle from '@/components/PageTitle';
import generateRss from '@/lib/generate-rss';
import { MDXLayoutRenderer } from '@/components/MDXComponents';
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '@/lib/mdx';
import Link from 'next/link';
import ReactDOM from 'react-dom';

const DEFAULT_LAYOUT = 'DocLayout';

export async function getStaticPaths() {
  const posts = getFiles('docs');
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allDocs = await getAllFilesFrontMatter('docs');
  // console.log(allDocs);
  const allDocCategories = {};
  for (const post of allDocs) {
    if (!allDocCategories[post.category]) {
      allDocCategories[post.category] = [];
    }
    allDocCategories[post.category].push({
      title: post.title,
      slug: post.slug,
    });
  }
  // console.log(allDocCategories);

  const postIndex = allDocs.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join('/')
  );
  const prev = allDocs[postIndex + 1] || null;
  const next = allDocs[postIndex - 1] || null;
  const post = await getFileBySlug('docs', params.slug.join('/'));
  // console.log(post);
  const authorList = post.frontMatter.authors || ['default'];
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug('authors', [author]);
    return authorResults.frontMatter;
  });
  const authorDetails = await Promise.all(authorPromise);
  // console.log(post.frontMatter);
  // rss
  if (allDocs.length > 0) {
    const rss = generateRss(allDocs);
    fs.writeFileSync('./public/feed.xml', rss);
  }

  return { props: { post, authorDetails, prev, next, allDocCategories } };
}

export default function Blog({
  post,
  authorDetails,
  prev,
  next,
  allDocCategories,
}) {
  const { mdxSource, toc, frontMatter } = post;
  console.log(allDocCategories);

  const docNav = Object.keys(allDocCategories).map((category) => (
    <div key={category} className="xl:w-80">
      <h2>{category}</h2>
      <ul>
        {allDocCategories[category].map((doc) => (
          <li key={doc.slug}>
            <Link href={`/docs/${doc.slug}`}>
              <a>{doc.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <>
      {docNav}
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  );
}
