import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('docs');
  return { props: { posts } };
}
export default function Home() {
  return (
    <div className="">
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Welcome 👋
          </h1>
          <p className="text-xl leading-10 text-gray-500 dark:text-gray-400">
            I'm Khoa - an open-minded Front-end Developer with a passion in
            creating beautiful and responsive websites. I currently focus on
            ReactJS and its ecosystem.{' '}
            <Link href={`/about`}>
              <a className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                More about me -{'>'}
              </a>
            </Link>
            <br />
            This is a space for me to keep and implement the technologies I have
            perceived on my career path.
          </p>
        </div>
      </div>
    </div>
  );
}
