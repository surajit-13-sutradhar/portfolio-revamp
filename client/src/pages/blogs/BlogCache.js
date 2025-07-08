// caching
const BlogCache = {
    blogs: {},
    list: null
};

export function getBlog(slug) {
    return BlogCache.blogs[slug] || null;
}

export function setBlog(slug, data) {
    return BlogCache.blogs[slug] = data;
}

export function getBlogList() {
    return BlogCache.list;
}

export function setBlogList(list) {
    BlogCache.list = list;
}