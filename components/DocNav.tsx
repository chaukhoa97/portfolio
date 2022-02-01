const DocNav = () => {
  // const allPostsData = getSortedDocsData();
  // console.log(allPostsData);
  const allPostsData = [];
  return (
    <div className="hidden lg:block w-72">
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocNav;
