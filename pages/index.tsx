import { GetServerSideProps, GetStaticProps } from "next";
import { useEffect, useState } from "react";

export default function Home({ repositories, date }) {
  return (
    <>
      <h1>{date}</h1>
      <ul>
        {repositories && repositories.map((repo) => <li key={repo}>{repo}</li>)}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/wenzler15/repos");

  const data = await response.json();
  const repositoryNames = data.map((item) => item.name);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 3600,
  };
};
