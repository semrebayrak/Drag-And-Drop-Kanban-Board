import React, { useRef, useState,useEffect } from 'react';
import { StyleSheet, css } from "aphrodite";


function Button(props) {
    // const ourMediaQuery = useMediaQuery('(min-width:400px)');

  
    const styles = StyleSheet.create({
       
        button: {

            display: 'flex',
            backgroundColor: 'transparent',
            border: '2px 2px 2px 2px',
            boxShadow: 'none',
            color: 'rgba(255, 255, 255, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.75)',
            boxSizing: 'border- box',
            borderRadius: '2px',
            padding: '8px',
            marginTop: '3%',
          

        },

        buttonText: {
            color: 'rgba(255, 255, 255, 0.75)',
            margin: 'auto',
            fontFamily: 'SF Pro Text',

            fontSize: '0.8vw',

            "@media (max-width: 600px)": {
                fontSize: '100%',

              }
        }


    });




    return (

        <button

            className={css(styles.button)}>




            <p className={css(styles.buttonText)}>{props.text}</p>


        </button>

    );
};
export default Button;