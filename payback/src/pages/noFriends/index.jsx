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
import search from '../../components/Assets/search.png'
import sadSmiley from '../../components/Assets/sad_smiley.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/nav_expense_default.png'
import navExpenseActive from '../../components/Assets/nav_expense_active.svg'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import { Link, useNavigate } from 'react-router-dom';



export const NoFriends = () => {

    // Use this hook to programmatically navigate to another page
    const navigate = useNavigate();

    // This function is used to navigate to the home page
    // It will be called when the button is clicked
    const goBack = () => {
      navigate(-1);
    };

    return (
        <>
            <div className="container">
                <div class="row mb-4">
                    <div className="col mt-4 mx-3 d-flex justify-content-between">
                        <a onClick={goBack} className="bold line-height">
                            <img src={backArrow} alt="back" className="topNavBack" />
                        </a>
                        <h1 id="friendsTitle" className="h6 bold">Friends</h1>
                        <img src={optionsIcon} alt="back" className="topNavOptions" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <div className="searchFriends">
                            <div clasName="form-outline">
                                <Link to="/pages/searchFriends">
                                    <input type="text" id="searchForm" class="form-control" placeholder="Search for friends" style={
                                        {
                                            paddingLeft: 25,
                                            background: `url(${search}) no-repeat left`,
                                            backgroundSize: 20,
                                        }
                                    }/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="noFriends d-flex flex-column justify-content-center align-items-center">
                        <img src={sadSmiley} alt="sadSmiley" className="sadSmiley" />
                        <h1 className='h1 bold' id="noFriends">No friends found yet.</h1>
                    </div>
                </div>
            </div>

            
            <div className="navbar">
                <div className="navStack">
                    <Link to='/' className="bold d-flex flex-column align-items-center">
                        <img src={navOverviewDefault} className="navIcons" alt="overview" />
                        Overview
                    </Link>
                </div>
                <div className="navStack">
                    <Link to='/pages/monthlyNetTotal' className="bold d-flex flex-column align-items-center">
                    <img src={navMonthlyDefault} className="navIcons" alt="monthly" />
                    Monthly
                    </Link>
                </div>
                <div className="navStack active">
                    <Link to='/pages/allGroups' className="bold d-flex flex-column align-items-center">
                        <img src={navExpenseDefault} className="navIcons" alt="expense" />
                        <img src={navExpenseActive} className="navIcons" alt="expense" id ="active" />
                        Expense
                    </Link>
                </div>
                <div className="navStack">
                    <Link to='/pages/groups' className="bold d-flex flex-column align-items-center">
                        <img src={navGroupsDefault} className="navIcons" alt="groups" />
                        Groups
                    </Link>
                </div>
                <div className="navStack">
                    <Link to='/pages/profile' className="bold d-flex flex-column align-items-center">
                        <img src={navProfileDefault} className="navIcons" alt="profile" />
                        Profile
                    </Link>
                </div>
        </div> 

        </>
         );
    }