"use client";
import React, { useState, useEffect } from "react";
import MovieCart from "@/app/component/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "ad96b212famsh85ff86d09d5532cp1a6f50jsnc8181774025b",
            "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
          },
        };

        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const mainData = data.titles || [];

        setMainData(mainData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {mainData.map((item) => (
              <MovieCart key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
