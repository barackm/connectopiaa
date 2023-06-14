export const convertLikes = (likes: number) => {
    if (likes < 1000) {
        return likes;
    } else if (likes >= 1000 && likes < 1000000) {
        return (likes / 1000).toFixed(1) + 'K';
    } else {
        return (likes / 1000000).toFixed(1) + 'M';
    }
}

export const convertContent = (content: string) => {
    const contentArr = content.split(' ');
    const newContentArr = contentArr.map((word) => {
        if (word[0] === '#') {
            return `<span title="hastag" class="text-primary-500 font-semibold cursor-pointer">${word}</span>`;
        } else if (word[0] === '@') {
            return `<span class="text-green-500 font-semibold cursor-pointer">${word}</span>`;
        } else {
            return word;
        }
    }
    );
    return newContentArr.join(' ');
}