import backArrow from '../../components/Assets/Back arrow.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import groupImg from '../../components/Assets/groupImg.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import allieSmiley from '../../components/Assets/allie_smiley.png'
import joeySmiley from '../../components/Assets/joey_smiley.png'
import meganSmiley from '../../components/Assets/megan_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'
import editIcon from '../../components/Assets/editIcon.png'
import link from '../../components/Assets/link.png'
import addFriend from '../../components/Assets/addFriend.png'
import sadSmiley from '../../components/Assets/sad_smiley.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'



export const NoFriends = () => {

    return (
        <>
        <div className="container">
        <div class="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <img src={backArrow} alt="back" className="topNavBack" />
                    <h1 id="friendsTitle" className="h6 bold">Friends</h1>
                    <img src={optionsIcon} alt="back" className="topNavOptions" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="searchFriends d-flex flex-row justify-content-center">
                        
                    <div className="input-group d-flex justify-content-center">
                        <div clasName="form-outline">
                            <input type="text" id="searchFormTwo" class="form-control" placeholder="Search for friends"/>
                        </div>
                    </div>
                    </div>
                    </div>
                        
                                
                    <div className="noFriends d-flex flex-column justify-content-center align-items-center">
                        <img src={sadSmiley} alt="sadSmiley" className="sadSmiley" />
                        <h1 className='h1 bold' id="noFriends">No friends found yet.</h1>
                    </div>
                </div>
                </div>

                <div class="navbar">
                <div class="navStack">
                    <img src={navOverviewDefault} className="navIcons" alt="overview" />
                    <a href="#home" className="active bold">Overview</a>
                </div>
                <div class="navStack">
                    <img src={navMonthlyDefault} className="navIcons" alt="monthly" />
                    <a href="#monthly" className="bold">Monthly</a>
                </div>
                <div class="navStack">
                    <img src={navExpenseDefault} className="navIcons" alt="expense" />
                    <a href="#expense" className="bold">Expense</a>
                </div>
                <div class="navStack">
                    <img src={navGroupsDefault} className="navIcons" alt="groups" />
                    <a href="#groups" className="bold">Groups</a>
                </div>
                <div class="navStack">
                    <img src={navProfileDefault} className="navIcons" alt="profile" />
                    <a href="#groups" className="bold">Profile</a>
                </div>
            </div>

            </>
         );
    }