import PageTitle from '@/components/PageTitle';
import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';

export default function Resume() {
  return (
    <div className="mt-24 text-center">
      <PageSEO
        title={'Resume - Khoa Chau'}
        description={"Khoa Chau's resume"}
      />
      <PageTitle>
        Under Construction{' '}
        <span role="img" aria-label="roadwork sign">
          🚧
        </span>
      </PageTitle>
    </div>
  );
}
