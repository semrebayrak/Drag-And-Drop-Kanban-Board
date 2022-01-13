import React, { useRef, useState } from 'react';
import { StyleSheet, css } from "aphrodite";
import Button from './button';

function Ticket(props) {
    // const ourMediaQuery = useMediaQuery('(min-width:400px)');


    const styles = StyleSheet.create({


        ticket: {

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',

          

            position: 'static',





            background: props.backgroundColor,

            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12), 0px 16px 32px rgba(0, 0, 0, 0.08)',
            borderRadius: '8px  ',


            marginBottom: '2vh',


            "@media (max-width: 600px)": {
                width: '70vw',

            }
        },


        ticketAlign: {
            padding: '7% 0% 7% 7%',
        },


        caption: {
            position: 'static',



            fontFamily: 'SF Pro Text',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '100%',
            lineHeight: '150%',
            /* identical to box height, or 24px */


            color: '#FFFFFF',

            "@media (max-width: 1000px)": {
                fontSize: '50%',
               
              
            },
            "@media (max-width: 600px)": {
                fontSize: '100%',
               
              
            },
        },

        ticketInnerText: {


            position: 'static',
            height: '100%',

            /* caption / regular */
            // paddingBottom: '0vh',
            fontFamily: 'SF Pro Text',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineHeight: '100%',
            /* or 20px */


            /* overlay/white */

            color: 'rgba(255, 255, 255, 0.75)',


            /* Inside Auto Layout */




            "@media (max-width: 1000px)": {
                fontSize: '50%',
            },
            "@media (max-width: 600px)": {
                fontSize: '100%',
               
              
            },

        },


    });




    return (

        <div

            className={css(styles.ticket)}>
            <div className={css(styles.ticketAlign)}>

                <p className={css(styles.caption)}>
                    {props.caption}
                </p>


                <p className={css(styles.ticketInnerText)}>
                    {props.text}
                </p>


                {props.button != null ?
                    <Button
                        text={props.button}

                    ></Button> : <></>
                }

            </div>
        </div>

    );
};
export default Ticket;