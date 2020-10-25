import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "styled-components";
import Button from "../Button";

const DEFAULT_FILM_DATA = {
    title: "",
    director: "",
    description: "",
    release_date: "",
    rt_score: "",
};

const override = css`
    display: block;
    margin: 0 auto;
    width: 50px;
    height: 50px;
`;

const GHIBLI_FILM_URL = "https://ghibliapi.herokuapp.com/films";

function Api() {
    const [filmData, setFilmData] = useState(DEFAULT_FILM_DATA);
    const [loading, setLoading] = useState(false);

    const getFilms = async () => {
        setLoading(true);
        const response = await axios.get(GHIBLI_FILM_URL);
        const data = response.data;

        // random number between 0 and 21
        const randomIndex = Math.floor(Math.random() * 20);
        // use attributes: title, director, description, release_date, rt_score
        const { title, director, description, release_date, rt_score } = data[
            randomIndex
        ];

        setLoading(false);
        setFilmData({
            title,
            director,
            description,
            release_date,
            rt_score,
        });
    };

    useEffect(() => {
        getFilms();
    }, []);

    const { title, director, description, release_date, rt_score } = filmData;
    return (
		<div>
			<Button handleClick={getFilms} title={"Randomize film!"} />
            {!loading ? (
                <>
                    <p>Random Studio Ghibli Film:</p>
                    <p>Title: {title}</p>
                    <p>Director: {director}</p>
                    <p>Description: {description}</p>
                    <p>Release Year: {release_date}</p>
                    <p>Rotton Tomato Score: {rt_score}</p>
                </>
            ) : (
                <ClipLoader
                    css={override}
                    size={150}
                    color={"#123abc"}
                    loading={loading}
                />
            )}
        </div>
    );
}

export default Api;
