import styles from './post.css';

export enum Attributes {
    "uid" = "uid",
    "image" = "image",
    "photouser" = "photouser",
    "username" = "username",
    "region" = "region",
    "description" = "description",
    "hashtags" = "hashtags",
};

class AppPost extends HTMLElement {
    uid?: number;
    image?: string;
    photouser?: string;
    username?: string;
    region?: string;
    description?: string;
    hashtags?: string;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.keys(Attributes);
    }

    attributeChangedCallback(propName: Attributes, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case Attributes.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    connectedCallback() {
        this.render();

        const likeIcon = this.shadowRoot?.getElementById("like-icon");
        const likeCounter = this.shadowRoot?.getElementById("contador-likes");
        const agregarDeseados = this.shadowRoot?.getElementById("agregar-deseados");
        const followButton = this.shadowRoot?.querySelector("button");
        const commentInput = this.shadowRoot?.querySelector<HTMLInputElement>(".footer-card input");
        const commentSection = this.shadowRoot?.querySelector(".comment-section");
        const sendButton = this.shadowRoot?.querySelector(".footer-card .send-button");

        let isLiked = false;
        let likes = 0;
        let isAdded = false;
        let isFollowing = false;

        const addComment = () => {
            if (commentInput && commentInput.value.trim() !== "") {
                const newComment = document.createElement("div");
                newComment.classList.add("comment");

                newComment.innerHTML = `
                    <img src="${this.photouser}" alt="User profile">
                    <p>${commentInput.value}</p>
                `;

                commentSection?.appendChild(newComment);
                commentInput.value = ""; // Clear input after posting the comment
                commentSection?.scrollTo(0, commentSection.scrollHeight); // Scroll to the newest comment
            }
        };

        likeIcon?.addEventListener("click", () => {
            isLiked = !isLiked;
            likes = isLiked ? likes + 1 : likes - 1;
            likeCounter!.textContent = likes.toString();
            if (isLiked) {
                likeIcon.classList.add("liked");
            } else {
                likeIcon.classList.remove("liked");
            }
        });

        agregarDeseados?.addEventListener("click", () => {
            isAdded = !isAdded;
            if (isAdded) {
                agregarDeseados.classList.add("added");
            } else {
                agregarDeseados.classList.remove("added");
            }
        });

        followButton?.addEventListener("click", () => {
            isFollowing = !isFollowing;
            if (isFollowing) {
                followButton.textContent = "Following";
                followButton.classList.add("Following");
            } else {
                followButton.textContent = "Follow";
                followButton.classList.remove("Following");
            }
        });

        commentInput?.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                addComment();
            }
        });

        sendButton?.addEventListener("click", () => {
            addComment();
        });
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
                <div class="post-container">
                    <div class="card">
                        <div class="head-card">
                            <img src="${this.photouser}" alt="photo user">
                            <div class="ubi">
                                <h1>${this.username}</h1>
                                <p>${this.region}</p>
                            </div>
                            <button>Follow</button>
                        </div>
                        <div class="body-card">
                            <p>${this.description}</p>
                            <a>${this.hashtags}</a>
                            <img src="${this.image}" alt="image post">
                            <div class="icons">
                                <div class="left-icons">
                                    <svg id="like-icon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m13.11 5.72l-.57 2.89c-.12.59.04 1.2.42 1.66s.94.73 1.54.73H20v1.08L17.43 18H9.34a.35.35 0 0 1-.34-.34V9.82zM14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66a4.8 4.8 0 0 0-.88-1.22zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1"/></svg>
                                    <p>Likes <span id="contador-likes">0</span></p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z"/></svg>
                                    <p>Comments</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#147AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 4v4C6.425 9.028 3.98 14.788 3 20c-.037.206 5.384-5.962 10-6v4l8-7z"/></svg>
                                    <p>Share</p>
                                </div>
                                <div class="right-icon">
                                    <svg id="agregar-deseados" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class="footer-card">
                            <img src="${this.photouser}" alt="photo user">
                            <input type="text" placeholder="Write your comment..">
                            <svg class="send-button" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#147AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.698 4.034L21 12L4.698 19.966a.5.5 0 0 1-.546-.124a.56.56 0 0 1-.12-.568L6.5 12L4.032 4.726a.56.56 0 0 1 .12-.568a.5.5 0 0 1 .546-.124M6.5 12H21"/></svg>
                        </div>
                        <div class="comment-section">
                            <!-- Aquí se añadirán los comentarios -->
                        </div>
                    </div>
                </div>
            </section>
            `;
        }

        const cssPost = this.ownerDocument.createElement("style");
        cssPost.innerHTML = styles;
        this.shadowRoot?.appendChild(cssPost);
    }
}

customElements.define("app-post", AppPost);
export default AppPost;
