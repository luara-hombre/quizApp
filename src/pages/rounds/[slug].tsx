
import React, { useState, useEffect } from 'react';
import styles from '../../styles/Rounds.module.scss';
import Image from 'next/image';
import wave from '../../assets/wave-3.svg';
import monster from '../../assets/monstro-2.png';
import star from '../../assets/star.png';
import Button from '../../components/ButtonComponent/Button';
import Card from '../../components/CardComponent/Card';
import { getInfosRound, saveAnswer } from '../../services/api'
import { useRouter } from 'next/router';

interface Option {
    id: number;
    label: string;
}

interface Question {
    id: number;
    description: string;
    options: Option[];
}

const Home: React.FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

    useEffect(() => {

        const getQuestions = () => {
            setLoading(true)
            if (router && router.query.slug) {
                getInfosRound(Number(router.query.slug)).then((response: any) => {
                    setQuestions(response.round.questions)
                    setLoading(false)
                }).catch(() => setLoading(false))
            }
        };

        getQuestions();

    }, [router]);

    useEffect(() => {

        if (questions.length > 0) {
            setCurrentQuestion(questions[currentQuestionIndex])
        }

    }, [questions, currentQuestionIndex]);


    const changeQuestion = async (option_id: number) => {
        await saveAnswer(
            Number(router.query.slug),
            {
                "answer": {
                    "question_id": currentQuestion && currentQuestion.id,
                    "option_id": option_id
                }
            }
        ).then((response) => {
            if (response.answer.correct) {
                setCorrectAnswersCount(correctAnswersCount + 1)
            }
            if (currentQuestionIndex < 4) {
                setCurrentQuestionIndex(currentQuestionIndex + 1)

            } else {
                router.push(`/result/${router.query.slug}`);
            }
        })
    }

    return (
        <div className={styles.container}>
            <Card>
                <div className={styles.round}>
                    <Image src={wave} alt="Wave" className={styles.wave} />

                    <div className={styles.header}>
                        <h1>Quiz App</h1>

                        <div className={styles.infos}>
                            <span>Questão <b>{currentQuestionIndex + 1}/{questions.length}</b></span>
                            <div className={styles.points}>
                                <Image src={star} alt="star" className={styles.star} />
                                <span className={styles.count}>{correctAnswersCount}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.question}>
                        <div className={styles.baloon}>
                            <span>{currentQuestion && currentQuestion.description}</span>
                        </div>
                    </div>
                    <Image src={monster} alt="Monstro" className={styles.monster} />


                    <div className={styles.form}>
                        {currentQuestion && currentQuestion.options.map((option) => (
                            <Button
                                key={option.id}
                                onClick={() => { changeQuestion(option.id) }}
                                size='small'
                            >
                                {option.label}
                            </Button>
                        ))}

                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Home;
