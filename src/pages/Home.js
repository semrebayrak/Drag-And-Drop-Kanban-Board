

import { React, useEffect, useRef, useState } from 'react';
import NoteList from '../datamodel/data';
import { StyleSheet, css } from "aphrodite";

import Drag from '../components/drag';
const Home = () => {

  const styles = StyleSheet.create({



    columns: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      // alignContent: 'start',
      gap: '2%',
      // gap: '2vw',
      alignItems: 'start',
 
      "@media (max-width: 600px)": {
        flexDirection: 'column',
        alignItems: 'center',
       
      }

    },


  });





  const data = NoteList;










  return (

    <div className={css(styles.columns)}>

      <Drag data={data}></Drag>


    </div>

  );
}
export default Home;