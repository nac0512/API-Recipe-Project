import React, { useEffect, useState } from 'react';
import Drink from '../components/Drink';
import Footer from '../components/Footer';
import Header from '../components/Header';

function RandomDrink() {
    const [info, setinfo]= useState('');
    const [infoReady, setinfoReady] = useState(false);

    useEffect(() => {
        async function fetchAPI() {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const data = await (response.json());
            setinfo(data.drinks);
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
                    <Drink data={recipe} key={index} />
                ))
                :
                <p>Recipe Loading . . .</p>}
            </main>
            <Footer />
        </div>
    );
}

export default RandomDrink;

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