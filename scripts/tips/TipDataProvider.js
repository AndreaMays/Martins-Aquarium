const tipsCollection = [
    {
        Tip: "Keep the Tank Clean",
    },     
    {
        Tip: "Don't over feed your fish",
    },
    {
        Tip: " 'PuffPuffGive' is toxic",
    },
    {
        Tip: "Fish are slimey",
    },
    {
        Tip: "Don't kill your fish"
    }
]

export const useTips = () => {
    return tipsCollection.slice()
}