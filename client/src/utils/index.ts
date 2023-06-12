export const convertLikes = (likes: number) => {
    if (likes < 1000) {
        return likes;
    } else if (likes >= 1000 && likes < 1000000) {
        return (likes / 1000).toFixed(1) + 'K';
    } else {
        return (likes / 1000000).toFixed(1) + 'M';
    }
}