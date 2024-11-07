export type NewsArticle = { title: string, article_id: string, image_url: string, description?: string }

const wordsPerMinute = 8;

export const readingTime = (text: string) => {
    return Math.ceil(wordCounter(text) / wordsPerMinute);
};

const wordCounter = (input: string) => {
    const text = input.split(/\s+/);
    let wordCount = 0;
    for (const element of text) {
        if (element !== ' ' && isWord(element)) {
            wordCount++;
        }
    }
    return wordCount;
};

const isWord = (str: string) => {
    let alphaNumericFound = false;
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (
            (code > 47 && code < 58) || // numeric (0-9)
            (code > 64 && code < 91) || // upper alpha (A-Z)
            (code > 96 && code < 123)
        ) {
            // lower alpha (a-z)
            alphaNumericFound = true;
            return alphaNumericFound;
        }
    }
    return alphaNumericFound;
};
