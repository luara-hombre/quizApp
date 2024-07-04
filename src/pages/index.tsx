import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import wave from '../assets/wave.svg';
import monster from '../assets/monstro-2.png';
import { getCategories, newRound } from '../services/api'
import Button from '../components/ButtonComponent/Button';
import Input from '../components/InputComponent/Input';
import Select from '../components/SelectComponent/Select';
import Card from '../components/CardComponent/Card';
import Spinner from '../components/SpinnerComponent/Spinner';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
    const router = useRouter();
    const [playerName, setPlayerName] = useState(' ');
    const [category, setCategory] = useState(' ');
    const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCategoriesGame = () => {

            getCategories().then((response: any) => {
                setCategories(response.categories);
            });
        };

        getCategoriesGame();
    }, []);


    const createRound = async () => {
        if (!playerName || !category) {
            alert('Por favor, preencha o nome do jogador e selecione uma categoria.');
            return;
        }
        setLoading(true);

        await newRound({
            "round": {
                "player_name": playerName,
                "category_id": category
            }

        }).then((response) => {
            router.push(`/rounds/${response.round.id}`);
        }).catch(() => setLoading(false))
    }

    return (
        <div className={styles.container}>
            <Card>
                <div className={styles.home}>
                    <Image src={wave} alt="Wave" className={styles.wave} />
                    <div className={styles.header}>
                        <h1>Quiz App</h1>
                        <p>Aprendendo de forma divertida</p>
                    </div>
                    <Image src={monster} alt="Monstro" className={styles.monster} />

                    <div className={styles.form}>
                        <Input
                            label="Nome do Jogador"
                            value={playerName}
                            onChange={(e: any) => setPlayerName(e.target.value)}
                        />

                        <Select
                            label="Selecione a Categoria"
                            value={category}
                            onChange={(e) => setCategory(e.target.value as string)}
                            options={categories}
                        />

                        <Button onClick={createRound}>
                            {!loading ? (
                                'JOGAR'
                            ) : (
                                <Spinner active={loading} overlay={false} />
                            )}
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Home;
