
"use client";
import React, { useState, useEffect } from 'react';
import styles from '../../styles/Result.module.scss';
import Image from 'next/image';
import monster from '../../assets/monstro-2.png';
import Button from '../../components/ButtonComponent/Button';
import Card from '../../components/CardComponent/Card';
import starFilled from '../../assets/star-filled.png'
import star from '../../assets/star.png'
import { getResults } from '../../services/api'
import { useRouter } from 'next/router';

const Home: React.FC = () => {
    const router = useRouter();
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    useEffect(() => {

        const getResultsQuestions = () => {
            if (router && router.query.slug) {
                getResults(Number(router.query.slug)).then((response: any) => {
                    setCorrectAnswers(response.round.total_correct_answers)
                    setTotalQuestions(response.round.total_questions)
                });
            }
        };
        getResultsQuestions();
    }, [router]);

    return (
        <div className={styles.container}>
            <Card isGradient>
                <div className={styles.result}>

                    <Card className={styles.subcard}>
                        <div className={styles.infos}>
                            <h1>Quiz App</h1>
                            <span className={styles.congratulation}>{correctAnswers > 0 ? 'Parabéns!' : 'Não foi desta vez!'}</span>
                            <span>Você acertou {correctAnswers} de {totalQuestions} perguntas.</span>

                            <div className={styles.stars}>
                                {Array(totalQuestions).fill(0).map((_, index) => (
                                    <Image key={index} src={index < correctAnswers ? star : starFilled} alt="star" />

                                ))}
                            </div>

                            <Button
                                onClick={() => router.push('/')}
                                size='small'
                            >
                                Sair
                            </Button>

                        </div>


                        <Image src={monster} alt="Wave" className={styles.monster} />

                    </Card>

                </div>
            </Card>
        </div>
    );
};

export default Home;
