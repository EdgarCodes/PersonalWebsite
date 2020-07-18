import React, {useRef, useEffect} from 'react';

export default function TextTyping(props) {
    const titleText = useRef(null);

    useEffect(() => {
        async function writingAll (){
            const stringsContainer = props.strings;
    
            for (let i=0; i < stringsContainer.length ; i++){
                const string = stringsContainer[i]
                await write(string)
                await sleep(500)
    
                if(stringsContainer.length -1 !== i)
                {
                    await erase()
                    await sleep(1000)
                }
            };
        };       
        //Sleep for ms
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

        async function write(text){    
            let index = 0
            try{
                while(index < text.length){
                        const timeout = 100
                        await sleep(timeout)
                        index++
                        titleText.current.innerText = text.substring(0, index);
                }
            }
            catch(e){}
        };

        async function erase() {
            try{
                while(titleText.current.textContent.length){
                    const timeout = 100
                    await sleep(timeout)
                    titleText.current.textContent = titleText.current.textContent.substring(0, titleText.current.textContent.length - 2)
                }
            }
            catch(e){}
        };

        writingAll();
    }, [props]);

    return (
        <div className="TextTyping">
            <div ref={titleText}></div>
        </div>
    )
}
