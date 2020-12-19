import express from 'express';
const app = express();

app.get('/iecho', (req, res) => {
    res.json({ message: "ok" })
})

app.listen(3000, () => {
    console.log('Server started')
})

const invertir = (word='') => {
    let length = word.length;
    let inverseWord = "";

    while (x >= 0) {
        inverseWord = inverseWord + word.charAt(x);
        length--;
    }

    return inverseWord;
}

const reverse = (word='') => {
    if(word.length > 0){
        return reverse(word.slice(1)) + word.slice(0,1)
    } else {
        return ''
    }
}


const validateInverse = (original, inverse) => {
    if(original == inverse){
        return true
    } else {
        return false
    }
}