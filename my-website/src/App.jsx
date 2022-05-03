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

    // componentDidMount(){

    //     $(window).scroll(function(){
    //         var $window = $(window),
    //             $body = $('body'),
    //             $panel = $('.panel');
            
    //         var scroll = $window.scrollTop() + ($window.height() /3);
    //         $panel.each(function (){
    //             var $this = $(this);
    //             if($this.position().top <= scroll &&
    //             $this.position().top + $this.height() > scroll){
    //             $body.removeClass(function(index, css){
    //                 return (css.match(/(^|\s)color-\S+/g) || []).join('');
    //             })
        
    //             $body.addClass('color' + $(this).data('color'));
    //             }
        
            
    //         })
        
    //         }).scroll();

    // }

        // $(function () {
        //     'use strict';
        //       var view = $(window).height();
        //       $('.panel')
        //       .height(view)
        //       .scrollie({
        //         scrolloffset: -50,
        //         scrollingInView: function(elem) {
        //           var bgColor = elem.data('background');
        //           $('body').css('background-color', bgColor);
        //         }
          
        //       })
        //   })
        

    
    
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
                            style = {{height: "100%"}}
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





