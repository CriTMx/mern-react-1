import { useState } from "react";

function TextField()
{
    var [wordCountNum, setWordCountNum] = useState(0);

    function HandleWordCount(event)
    {
        var str = event.target.value;
        var words = str.split(' ').filter(function (word) {
            return word.length > 0;
        });
        setWordCountNum(words.length);
    }

    return(
        <div className="text-field">
            <textarea rows="10" id="input" onChange={HandleWordCount}></textarea>
            <p id="wordCountTitle">Word Count: {wordCountNum}</p>
        </div>
    )
}

export default TextField;