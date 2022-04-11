import { useState } from 'react';
// import Button from '../cmponents/Button/Button';
import Footer from '../cmponents/Footer/Footer';
import Heading from '../cmponents/Heading/Heading';
import Input from '../cmponents/Input/Input';
import Output from '../cmponents/Output/Output';
import Output2 from '../cmponents/Output2/Output2';
import style from './pages.module.css';
const Pages = ()=>{
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [list, setList] = useState([]);
    const [option, setOption]= useState();
  
   
    const onchange= (event)=>{
        const selected = (event.target.value)
        setOption(selected)
    }
    // console.log(option)
   
 const handleText1 =(event)=>{
        const value = event.target.value;
        // console.log("Changing")
        setText1(value)
       
 }
 const handleText2 =(event)=>{
    const value2 = event.target.value;
    // console.log("Changing")
    setText2(value2)
    
}


const btnClickHandler = ()=>{
    const items = [...list];
    if(option==='Excellent'){
    if(text1.trim() && text2.trim()){
        items.push( text2 + " offers a tip of rs "  + (text1)/100*20 );
        setList(items)
         console.log(items)
    }

    }
else if(option==='Good'){
    if(text1.trim() && text2.trim()){
        items.push( text2 + " offers a tip of rs "  + (text1)/100 *10);
        setList(items) 
    }

}
else if(option==='Nice'){
    if(text1.trim() && text2.trim()){
        items.push( text2 + " offers a tip of rs "  + (text1)/100*5 );
        setList(items) 
    }

}
else if(option==='Bad'){
    if(text1.trim() && text2.trim()){
        items.push( text2 + " offers a tip of rs "  + (text1)/100*3 );
        setList(items) 
    }

}
    setText1('')
    setText2('') 
     
};

 


const clickHandle = () => {
       alert("You get your total customers")
    
} 


 

    return (
        <div className={style.page}>
                <Heading/>

                <Input value={text1}
                change={handleText1}
                change2= {handleText2}
                value2={text2}
                click={btnClickHandler}
                select= {onchange}
                vselect={option}/>

                <Output list = {list}/>

                <Output2 length={list.length}
                 clickHandle = {clickHandle} />
                  
                <Footer/>
                
        </div>
    )



}
export default Pages;