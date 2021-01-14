const tipsCollection = [
    {
        words: "Keep the Tank Clean",
    },     
    {
        words: "Don't over feed your fish",
    },
    {
        words: " 'PuffPuffGive' is toxic",
    },
    {
        words: "Fish are slimey",
    },
    {
        words: "Don't kill your fish"
    }
]

export const useTips = () => {
    return tipsCollection.slice()
}