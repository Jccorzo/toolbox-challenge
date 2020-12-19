export const reverse = (word = '') => {
    if (word.length > 0) {
        return reverse(word.slice(1)) + word.slice(0, 1)
    } else {
        return ''
    }
}

export const validatePalindrome = (original, inverse) => {
    if (original.replace(/\s/g, '').toLowerCase() == inverse.replace(/\s/g, '').toLowerCase()) {
        return true
    } else {
        return false
    }
}