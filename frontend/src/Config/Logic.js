export const isPostLikedByUser = (post, userId) => {
    for (const item of post.likedByUsers) {
        if (item.id === userId) {
            return true;
        }
    }
    return false;
}

export const isCommentLikedByUser = (comment, userId) => {
    for (const item of comment.likedByUsers) {
        if (item.id === userId) {
            return true;
        }
    }
    return false;
}

export const isPostSavedByUser = (user, postId) => {
    for (const item of user.savedPost) {
        if (item.id === postId) {
            return true;
        }
    }
    return false;
}

export const isUserFollowing = (reqUser, user) => {
    if (reqUser && user) {
        for (const item of reqUser.following) {
            if (item.id === user.id) {
                return true;
            }
        }
    }
    return false;
}

export const timeDifference = (timestamp) => {
    const date = new Date(timestamp);
    const diff = Date.now() - date.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks > 0) {
        return weeks + "week" + (weeks > 1 ? "s" : "") + "ago";
    } else if (days > 0) {
        return days + "day" + (days > 1 ? "s" : "") + "ago";
    } else if (hours > 0) {
        return hours + "hour" + (hours > 1 ? "s" : "") + "ago";
    } else if (minutes > 0) {
        return minutes + "minute" + (minutes > 1 ? "s" : "") + "ago";
    } else {
        return seconds + "second" + (seconds > 1 ? "s" : "");
    }

}