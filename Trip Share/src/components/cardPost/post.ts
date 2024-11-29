import styles from './post.css';
import { getFileCloudinary } from '../../utils/storageImage';
import { getFollowing, getUser, updateUserFollow } from '../../utils/Firebase';
import { appState } from '../../store';

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
                updateUserFollow(appState.user, this.getAttribute('username') || '', 'follow');

            } else {
                followButton.textContent = "Follow";
                followButton.classList.remove("Following");
                updateUserFollow(appState.user, this.getAttribute('username') || '', 'unfollow');
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

    createLikeIcon(): HTMLElement {
        const likeIcon = document.createElement('svg');
        likeIcon.id = 'like-icon';
        likeIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        likeIcon.setAttribute('width', '35');
        likeIcon.setAttribute('height', '35');
        likeIcon.setAttribute('viewBox', '0 0 24 24');
        likeIcon.innerHTML = `<path fill="#147AFF" d="m13.11 5.72l-.57 2.89c-.12.59.04 1.2.42 1.66s.94.73 1.54.73H20v1.08L17.43 18H9.34a.35.35 0 0 1-.34-.34V9.82zM14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66a4.8 4.8 0 0 0-.88-1.22zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1"/>`;
        return likeIcon;
    }

    createCommentIcon(): HTMLElement {
        const commentIcon = document.createElement('svg');
        commentIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        commentIcon.setAttribute('width', '35');
        commentIcon.setAttribute('height', '35');
        commentIcon.setAttribute('viewBox', '0 0 24 24');
        commentIcon.innerHTML = `<path fill="#147AFF" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z"/>`;
        return commentIcon;
    }

    createShareIcon(): HTMLElement {
        const shareIcon = document.createElement('svg');
        shareIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        shareIcon.setAttribute('width', '35');
        shareIcon.setAttribute('height', '35');
        shareIcon.setAttribute('viewBox', '0 0 24 24');
        shareIcon.innerHTML = `<path fill="none" stroke="#147AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 4v4C6.425 9.028 3.98 14.788 3 20c-.037.206 5.384-5.962 10-6v4l8-7z"/>`;
        return shareIcon;
    }

    createCommentInput(): HTMLElement {
        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Write your comment..';
        return commentInput;
    }



    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            const container = this.ownerDocument.createElement('section');

            const card = this.ownerDocument.createElement('div');
            card.classList.add('card');

            const headCard = this.ownerDocument.createElement('div');
            headCard.classList.add('head-card');
            const getImage = async (id: string) =>{
                const user = await getUser(id);
                return user?.photo || 'path_to_default_image';
            }
            const usernameAttr = this.getAttribute('username') || '';
            const imgUser = this.ownerDocument.createElement('img');
            getImage(usernameAttr).then((imgt) =>{
                const resolvedPhoto = imgt || 'path_to_default_image';
                imgUser.src = getFileCloudinary(resolvedPhoto || 'path_to_default_image') ;
            });


            imgUser.alt = 'photo user';

            const ubi = this.ownerDocument.createElement('div');
            ubi.classList.add('ubi');

            const h1 = this.ownerDocument.createElement('h1');
            const getName = async (id: string) =>{
                const user = await getUser(id);
                return user?.username || 'username_default';
            }

            getName(usernameAttr).then((usName) => {
                const resolvedName = usName || 'defaultUsername';
                h1.innerText = resolvedName; // Actualiza el contenido cuando se resuelva la promesa.
            });

            const p = this.ownerDocument.createElement('p');
            const region = this.getAttribute('region') || 'region_default';
            p.innerText = region;

            const getFollowingUsers = async (id: string) =>{
                const followingUsers = await getFollowing(id);
                return followingUsers;
            }
            getFollowingUsers(appState.user).then((users) =>{
                if (users.includes(usernameAttr)) {
                    followButton.innerText = 'Following';
                    followButton.classList.add('Following');
                } else{
                    followButton.innerText = 'Follow';
                    followButton.classList.remove('Following');
                }
            });
            const followButton = this.ownerDocument.createElement('button');
            followButton.innerText = 'Follow';

            ubi.appendChild(h1);
            ubi.appendChild(p);
            headCard.appendChild(imgUser);
            headCard.appendChild(ubi);
            headCard.appendChild(followButton);

            card.appendChild(headCard);

            const bodyCard = this.ownerDocument.createElement('div');
            bodyCard.classList.add('body-card');

            const description = this.ownerDocument.createElement('p');
            const descriptionPost = this.getAttribute('description') || 'description_default';
            description.innerText = descriptionPost;

            const hashtags = this.ownerDocument.createElement('a');
            const hashtagsPost = this.getAttribute('hashtags') || 'hashtags_default';
            hashtags.innerText = hashtagsPost;



            const postImage = this.ownerDocument.createElement('img');
            const photoPost = this.getAttribute('image') || 'path_to_default_image';
            postImage.src = getFileCloudinary(photoPost.toString());
            postImage.alt = 'post image';
            postImage.width = 500
            postImage.height = 500

            bodyCard.appendChild(description)
            bodyCard.appendChild(postImage)

            const icons = this.ownerDocument.createElement('div');
            icons.classList.add('icons');

            const leftIcons = this.ownerDocument.createElement('div');
            leftIcons.classList.add('left-icons');
            const likeIcon = this.createLikeIcon();
            leftIcons.appendChild(likeIcon);
            const commentsIcon = this.createCommentIcon();
            leftIcons.appendChild(commentsIcon);
            const shareIcon = this.createShareIcon();
            leftIcons.appendChild(shareIcon);

            icons.appendChild(leftIcons);

            const footerCard = this.ownerDocument.createElement('div');
            footerCard.classList.add('footer-card');
            const commentInput = this.createCommentInput();

            footerCard.appendChild(commentInput);

            card.appendChild(bodyCard);
            card.appendChild(icons);
            card.appendChild(footerCard);

            container.appendChild(card);
            this.shadowRoot.appendChild(container);
        }

        const cssPost = this.ownerDocument.createElement("style");
        cssPost.innerHTML = styles;
        this.shadowRoot?.appendChild(cssPost);
    }
}
customElements.define("app-post", AppPost);
export default AppPost;
