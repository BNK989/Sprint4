import { Dialog } from "@radix-ui/react-dialog";
import 'animate.css'
export function Success({isDialogOpen}) {


    return (
        <dialog open className={`${isDialogOpen ? 'open' : ''} dialog  animate__animated animate__bounce`} >
            <div className="dialog-container flex-center flex-col rounded gap-4">
                <div className="img-container">
                    <img src="/img/checked.svg" alt="great"/>
                </div>
                <h2>Thank you!</h2>
                <p>Your payment was successful!</p>
                {/* <small><i>you are being transferred to the homepage</i></small> */}
            </div>
        </dialog>
    )
}