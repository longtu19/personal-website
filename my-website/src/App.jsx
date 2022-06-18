import React, { Component, useRef, useEffect } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import $ from 'jquery';
import {data} from './data'


const App = () => {

    const GroupRef = useRef([])

    const onScroll = (el) => {
        const styles = GroupRef.current.map((group, i) => {
            const rect = group.getBoundingClientRect();
            
            return {group, rect};
        }).find((group) => group.rect.bottom >= window.innerHeight * 0.5);


        document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`
        document.body.style.color = styles.group.dataset.txtcolor;



    };

    useEffect(() =>{
        window.addEventListener("scroll", onScroll);
    }, []);

    

        

    
    
        return (
            <div>
                <> 
               
                    <div id = "bg">
                        <Header/>
    
                    </div>
                    <Nav/>
                  
                    
                    {data.map((group, i) => (
                        <div  
                            ref = {(el) => (GroupRef.current[i] = el)}
                            style = {{height: "100%", maxWidth: "cover"}}
                            data-bgcolor = {group.theme.background}
                        
                        >
                           {group.src}

   
                        
                          

                        </div>
                    ))}

                    <Footer/>
                   
                    


              

                    


                    
                    
                </>
            </div>
        )

    
   
}

export default App





