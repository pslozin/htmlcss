let Vowels = ["a", "e", "i", "o", "u"]


function vovcount(word)
{
    //word = word.toLowerCase();
    length = word.length;
    vovelscount = 0;
    finalcount = 0;

    console.log(word.length)

    for(i = 0; i < word.length; i++)
    {
     
        for(j = 0; j < 5; j++)
        {
            if(word.charAt(i) === Vowels[j])
                vovelscount = vovelscount + 1
            else 
            {}
        }
    }
    word.length === word.length + 5
    console.log(`LETTER COUNT = ${word.length}`)
    console.log(`VOV COUNT  = ${vovelscount}`)
    length = length - vovelscount
    
    if(length < vovelscount)
    console.log("TRUE")
    else if(length === vovelscount)
        console.log("EQUAL")
    else
    console.log("FALSE")
}

vovcount("tuuuuuuAr")
