import blockFriend from '../../components/Assets/blockFriend.png'
import removeFriend from '../../components/Assets/removeFriend.png'
import close from '../../components/Assets/close.png'

import { BlockFriend} from '../../components/blockFriend'

export const FriendSettings = () => {

    return (
        <>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

        <div className="modal-body">

        <div className="friendSettings">
            <div class="row mx-5">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-center">
                    <h1 id="modalTitle" className="h6 bold">Friend Settings</h1>
                    <img src={close} alt="close" className="close" data-bs-dismiss="modal"/>

                </div>
            </div>

            <div className="col d-flex flex-column justify-content-center align-items-center">
                <div className="viewProfile">
                    <p className="h6 demiBold">View Profile</p>
                </div>
            </div>

            <div className="col d-flex flex-column justify-content-center align-items-center">
                <div className="blockRemove">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <p className="p demiBold" id="block">Block friend</p>
                        <img src={blockFriend} alt="back" className="blockFriend" data-bs-toggle="modal" data-bs-target="#myModal" />
                    </div>
                        <hr className="block"></hr>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <p className="p demiBold" id="remove">Remove from friends</p>
                        <img src={removeFriend} alt="back" className="blockFriend" />
                    </div>
                </div>
            </div>
        </div>

        </div>


        {/* FRIEND SETTINGS MODAL */}

        <div className="modal" id="myModal">
                    <div class="modal-dialog">
        
                    

                        <BlockFriend/>

                    </div>
                    </div>


            </>
         );
    }