import React, { useState, useRef } from "react";
import { StyleSheet, css } from "aphrodite";

import Ticket from '../components/ticket';

function Drag({ data }) {


    const styles = StyleSheet.create({

        container: {

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            padding: '1%',
            position: 'relative',
            width: '20%',
            //  padding: '1.2vw',
            // width: '19.5vw',
            top: '25vh',
            marginBottom: '10%',
            /* gray / 2 */

            backgroundColor: '#262626',
            borderRadius: '3%',
            "@media (max-width: 600px)": {
                width: '80%',
                top: '3vh',
              }
          
        },



        containerH: {
            color: '#ffffff',
            position: 'static',
            width: '93%',
            height: '44px',


            /* heading / 37 */

            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '200%',
            lineHeight: '100%',

            "@media (max-width: 1000px)": {
                width: '100%',
              
                fontSize: '120%',
            },
            
            "@media (max-width: 600px)": {
                fontSize: '200%',
                paddingLeft: '10%',
          
            },
        }
    });


    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log("Drag", params);
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0)

    }
    const handleDragEnd = () => {
        console.log("Drag Ends");

        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null;
        dragNode.current = null;
    }

    const handleDragEnter = (e, params) => {
        console.log("Entering drag", params)
        const currentItem = dragItem.current
        if (e.target != dragNode.current) {

            setList(list => {


                list[params.groupIndex].items.splice(params.itemIndex, 0, list[currentItem.groupIndex].items.splice(currentItem.itemIndex, 1)[0])

                dragItem.current = params;


                setDragging(true);
                return list;
            })

        }
    }


    return (

        <>
            {data.map((item, groupIndex) => (

                <div
                    onDragEnter={dragging && !item.items.length ? (e) => handleDragEnter(e, { groupIndex, itemI: 0 }) : null}
                    key={item.title} className={css(styles.container)}>
                    <h1 className={css(styles.containerH)}> {item.title}</h1>
                    {item.items.map((board, itemIndex) => (

                        <div

                            draggable
                            onDragStart={(e) => handleDragStart(e, { groupIndex, itemIndex })}
                            onDragEnter={dragging ? (e) => { handleDragEnter(e, { groupIndex, itemIndex }) } : null}
                            key={itemIndex}
                        >

                            <Ticket


                                data={data}
                                key={itemIndex}
                                backgroundColor={board.color}
                                caption={board.caption}
                                text={board.description}
                                button={board.button}

                            />
                        </div>
                    ))}


                </div>
            )
            )}

        </>

    );
}

export default Drag