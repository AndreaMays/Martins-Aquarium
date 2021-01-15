const quoteCollection = [
    {
        Phrase: "It is better to travel well, than to arrive.",
        author: "(Buddha)",
    },     
    {
        Phrase: "Just keep swimming!",
        author: "(Dory Fish)",
    },   
    {
        Phrase: "Travel makes us modest, you see what a tiny place you occupy in the world.",
        author: "(Gustave Flaubert)",
    }   
]

export const useQuotes = () => {
    return quoteCollection.slice()
}