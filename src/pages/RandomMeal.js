import React, { useEffect, useState } from 'react';
import Food from '../components/Food';
import Footer from '../components/Footer';
import Header from '../components/Header';

function RandomMeal() {
    const [info, setinfo]= useState('');
    const [infoReady, setinfoReady] = useState(false);

    useEffect(() => {
        async function fetchAPI() {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const data = await (response.json());
            console.log(data);
            setinfo(data.meals);
            setinfoReady(true);
        }; 
        fetchAPI();
    }, []);

    return(
        <div style={styles.display}>
            <Header />
            <main style={styles.main}>
                {infoReady ? 
                info.map((recipe, index) => (
                    <Food data={recipe} key={index} />
                ))
                :
                <p>Recipe Loading . . .</p>}
            </main>
            <Footer />
        </div>
    );
}

export default RandomMeal;

const styles = {
    display: {
        minHeight: '100vh',
        display:'flex',
        flexDirection:'column',
    },
    main: {
        flexGrow:'1',
        textAlign:'center',
        color:'rgb(21, 21, 21)'
    },
}