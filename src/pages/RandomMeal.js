// Component created to generate random meal recipe 

import React, { useEffect, useState } from 'react';
import Food from '../components/Food';
import Footer from '../components/Footer';
import Header from '../components/Header';

function RandomMeal() {
    // States to be used and updated 
    const [info, setinfo]= useState('');
    const [infoReady, setinfoReady] = useState(false);

    // Api fetched and states updated 
    useEffect(() => {
        async function fetchAPI() {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const data = await (response.json());
            setinfo(data.meals);
            setinfoReady(true);
        }; 
        fetchAPI();
    }, []);

    // Once info is ready, recipe is shown to the user
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