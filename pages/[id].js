import Link from 'next/link'

// [id].jsx -> các obj trong `paths[]` phải có dạng { params: { id: '1' } }
export const getStaticPaths = async () => {
  // Fetch or do something...
  const paths = [{ params: { id: '1' } }, { params: { id: '2' } }]
  return { paths, fallback: 'blocking' }
}

// `context` là object có nhiều property (đọc API của `getStaticProps`)
// Trong đó quan trọng nhất là `params` - Route params for pages using Dynamic routes.
// [id].jsx -> context = { params: { id: ... }, locales... }
export const getStaticProps = async (context) => {
  const {
    params: { id },
  } = context

  // `paths` ở đây ko dùng để lựa các page để pre-render như `getStaticPaths`, mà chỉ để render các Link trong NavBar
  const paths = [{ params: { id: '3' } }, { params: { id: '4' } }]

  // if (!id) {
  //   return {
  //     notFound: true,
  //     // hoặc
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: { id, paths }, // `id`, `paths` will be passed to the Page component as props
    revalidate: 1,
  }
}

export default function Page({ id, paths }) {
  return (
    <div className="flex">
      <div className="w-1/4">
        {paths.map((path) => (
          <Link href={path.params.id} key={path.params.id}>
            <a className="mx-4 text-primary-400">Link {path.params.id}</a>
          </Link>
        ))}
      </div>
      <h3 className="w-3/4 text-3xl">ID: {id}</h3>
    </div>
  )
}
