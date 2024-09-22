'use client';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store'; // Custom hooks from your store
import { fetchConfiguration } from '@/redux/configuration/configuration.thunk'; // Import the thunk
import { fetchGenres } from '@/redux/genres/genres.thunk';

const Page = () => {
  const dispatch = useAppDispatch(); // Custom dispatch hook

  // Accessing the state using the custom selector
  const { languages, loading, error } = useAppSelector((state) => state.configuration);

  // Fetch languages when the component mounts
  useEffect(() => {
    dispatch(fetchConfiguration());
    dispatch(fetchGenres());
  }, [dispatch]);

  // Handling loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Languages</h1>

      <section>
        <h2>Available Languages</h2>
        <ul>
          {Object.values(languages).map((language) => (
            <li key={language.iso_639_1}>
              {language.english_name || language.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Page;
