import { Screens } from "../../types/navigation";
import { navigate } from "../../store/actions";
import { dispatch } from "../../store";
import { logoutUser } from "../../utils/Firebase";

class ExitAccount extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    async close(dialog: HTMLDialogElement) {
        dialog.close();
        this.remove();
    }

    async logout(dialog: HTMLDialogElement) {
        try {
            console.log("Attempting to log out...");
            await logoutUser();
            console.log("Successfully logged out");
            dispatch(navigate(Screens.LOGIN));
        } catch (error) {
            console.error("Error during logout:", error);
        } finally {
            this.close(dialog);
        }
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <dialog>
                <div class="modal-content">
                    <h2>Confirm Logout</h2>
                    <p>Are you sure you want to log out?</p>
                    <button id="cancel-btn">Cancel</button>
                    <button id="logout-btn">Log Out</button>
                </div>
            </dialog>
            `;

            const dialog = this.shadowRoot.querySelector('dialog') as HTMLDialogElement;

            if (dialog) {
                dialog.showModal();
            }
    
            this.shadowRoot.querySelector('#cancel-btn')?.addEventListener('click', () => {
                this.close(dialog);
            });
    
            this.shadowRoot.querySelector('#logout-btn')?.addEventListener('click', () => {
                this.logout(dialog);
            });
        }

    }
}
customElements.define("exit-account", ExitAccount);
export default ExitAccount;