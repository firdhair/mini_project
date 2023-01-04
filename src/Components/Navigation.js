import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    // const transitions = useTransition(showMenu, null, {
    //     from: {position: 'absolute', opacity: 0},
    //     enter: {opacity: 1},
    //     leave: {opacity: 0},
    // })
    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    const maskTransitions = useTransition(showMenu, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    // let menu = <div> This is the menu </div>
    // let menu 
    // let menuMask

    // if(showMenu){
    //     menu = <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">The menu</div>
    //     menuMask = <div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50" onClick={() => setShowMenu(false)}></div>
    // }

   
    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)}/>
            </span>
            {/* {
            transitions((style, item) => (
                item && <animated.div style={style} className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"  onClick={() => setShowMenu(false)}></animated.div>
            ))
            }  */}
            {
                maskTransitions(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }
            {
            menuTransitions((style, key, item) => (
                item && 
                key && 
                <animated.div key={key} style={style} className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">
                <NavigationMenu closeMenu={() => setShowMenu(false)}/>
                </animated.div>
            ))
            } 
        </nav>
    )
}

export default Navigation