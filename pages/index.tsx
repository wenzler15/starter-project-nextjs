import { GetServerSideProps, GetStaticProps } from "next";
import { useEffect, useState } from "react";

export default function Home({ repositories, date }) {
  return (
    <>
      {/* <h1>{date}</h1> */}
      <table style={{ border: "1px solid #000" }}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Linguagem</th>
            <th scope="col">Visibilidade</th>
          </tr>
        </thead>
        <tbody>
          {repositories &&
            repositories.map((repo) => (
              <tr key={repo.id}>
                <th>{repo.id}</th>
                <td>{repo.name}</td>
                <td>{repo.language}</td>
                <td>{repo.visibility}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* {repositories &&
          repositories.map((repo) => <li key={repo.name}>{repo.name}</li>)} */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.github.com/users/wenzler15/repos");

  const data = await response.json();
  const repositoryNames = data.map((item) => item);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 3600,
  };
};
