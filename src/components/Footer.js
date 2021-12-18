// Footer component to display logo, nav, and website links

import React from 'react';
import logo from '../images/logo.png';
import Nav from './Nav';
import { FaPinterestP } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return(
        <footer style={styles.footer}>
            <img src={logo} alt='Website Logo' style={styles.img}></img>
            <h2 style={styles.h2}>Anyone Can Cook</h2>
            <Nav />
            <ul style={styles.ul}>
                <li style={styles.li}><a href='https://www.pinterest.com' target="_blank" rel="noreferrer" style={styles.a}><FaPinterestP style={styles.icon}/>Go to pinterest page</a></li>
                <li style={styles.li}><a href='https://www.instagram.com' target="_blank" rel="noreferrer" style={styles.a}><FaInstagram style={styles.icon}/>Go to instagram page</a></li>
                <li style={styles.li}><a href='https://www.facebook.com' target="_blank" rel="noreferrer" style={styles.a}><FaFacebookF style={styles.icon}/>Go to facebook page</a></li>
                <li style={styles.li}><a href='https://www.twitter.com' target="_blank" rel="noreferrer" style={styles.a}><FaTwitter style={styles.icon}/>Go to twitter page</a></li>
            </ul>
            <div style={styles.div}>
                <p style={styles.footnote}>&copy; 2021 Anyone Can Cook</p>
                <p style={styles.footnote}>Terms &amp; Conditions | Privacy Policy</p>
            </div>
        </footer>
    );
}

export default Footer;

const styles = {
    footer: {
        color:'rgb(21, 21, 21)',
        textAlign:'center',
        paddingTop:'1rem',
        backgroundColor:'rgba(81,152,114,.5)'
    },
    img: {
        width:'75px',
        verticalAlign:'middle',
        paddingBottom:'1rem'
    },
    h2: {
        fontFamily:'Great Vibes',
        fontSize:'2.5rem',
        display:'inline',
    },
    ul: {
        listStyleType:'none',
    },
    li: {
        display:'inline-block',
        marginRight:'1.5rem',
    },
    a: {
        color:'rgb(253,255,252)',
        fontSize:'0'
    },
    icon: {
        fontSize:'1.5rem'
    },
    div: {
        borderTop:'solid .5px rgb(21, 21, 21)',
        padding:'0 5rem',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    footnote: {
        fontSize:'.8rem',
    }
}