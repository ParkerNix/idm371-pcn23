import optionsIconWhite from '../../components/Assets/optionsDotsWhite.png'
import groupImg from '../../components/Assets/groupImg.png'
import paybackLogo from '../../components/Assets/paybackLogo.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import molynaSmiley from '../../components/Assets/molyna_smiley.png'
import parkerSmiley from '../../components/Assets/parker_smiley.png'
import joeySmiley from '../../components/Assets/joey_smiley.png'
import meganSmiley from '../../components/Assets/megan_smiley.png'
import heartEmpty from '../../components/Assets/heartEmpty.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/new_expense_default.svg'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navGroupsActive from '../../components/Assets/nav_groups_active.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

export const Groups = () => {

    return (
        <>
            <motion.div className="container gradientContainerGroups px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {duration: 0.1} }}
                exit={{ opacity: 0, transition: {duration: 0.1} }}
            >
                <div className="mx-4 pt-4 mb-5 d-flex justify-content-between align-items-center">
                    <span>   </span>
                    <h1 className="h6 bold" id="profile">Groups</h1>
                    <img src={optionsIconWhite} alt="back" className="topNavOptionsWhite" />
                </div>
                <div className='mx-4 mb-4 d-flex justify-content-between'>
                    <h2 className="h4 bold" id="recentFriends">Recent Friends</h2>
                    <Link to='/pages/allFriends'>
                        <p className="p demiBold" id="viewAll">View All</p> 
                    </Link>
                </div>

                <div className="mx-4 mb-5 d-flex justify-content-between">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={smileySmiley} alt="smileyInScroll" className="smileyInScroll" />
                        <p className="p demiBold" id="smileyScrollName">Allie D.</p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <img src={joeySmiley} alt="smileyInScroll" className="smileyInScroll" />
                        <p className="p demiBold" id="smileyScrollName">Joey M.</p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <Link to='/pages/friendProfile'>
                            <img src={meganSmiley} alt="smileyInScroll" className="smileyInScroll" />
                            <p className="p demiBold" id="smileyScrollName">Megan L.</p>
                        </Link>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <img src={parkerSmiley} alt="smileyInScroll" className="smileyInScroll" />
                        <p className="p demiBold" id="smileyScrollName">Parker N.</p>
                    </div>
                </div>

                <div className="pageTab pb-6">
                    <div className="col px-4 pt-3">
                        <h2 className="h3 bold mb-3" id="transactionsHeader">All Groups</h2>
                        <div className ='card mb-3'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <div className='d-flex align-items-center'>
                                        <div className='groupsCardImg'>
                                            <img src={groupImg} alt="groupImg" className='groupImg' />
                                            <span className="placeholder"></span>
                                        </div>
                                        <div className='ms-2'>
                                            <h1 className="h4 bold">Roomies</h1>
                                            <p className="medium">Money money money</p>
                                        </div>
                                    </div>
                                    <div className="groupsCardHeart align-self-start">
                                        <img src={heartEmpty} alt="heart" className="heartIcon" />
                                    </div>
                                </div>
                                <div className ='d-flex align-items-center justify-content-between'>
                                    <div class="groupsCardIcons">
                                        <img src={smileySmiley} className="memberIcons" alt="member1" />
                                        <img src={molynaSmiley} className="memberIcons" alt="member2" />
                                        <img src={parkerSmiley} className="memberIcons" alt="member3" />
                                    </div>
                                    <div className="groupsCardButton">
                                        <Link to='/pages/viewGroup' className="button bold">
                                            View group
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ='card mb-3'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <div className='d-flex align-items-center'>
                                        <div className='groupsCardImg'>
                                            <img src={paybackLogo} alt="groupImg" className='groupImg' />
                                            <span className="placeholder"></span>
                                        </div>
                                        <div className='ms-2'>
                                            <h1 className="h4 bold">Payback Gang</h1>
                                            <p className="medium">You must pay!</p>
                                        </div>
                                    </div>
                                    <div className="groupsCardHeart align-self-start">
                                        <img src={heartEmpty} alt="heart" className="heartIcon" />
                                    </div>
                                </div>
                                <div className ='d-flex align-items-center justify-content-between'>
                                    <div class="groupsCardIcons">
                                        <img src={smileySmiley} className="memberIcons" alt="member1" />
                                        <img src={molynaSmiley} className="memberIcons" alt="member2" />
                                        <img src={parkerSmiley} className="memberIcons" alt="member3" />
                                        <img src={meganSmiley} className="memberIcons" alt="member3" />
                                        
                                        
                                    </div>
                                    <div className="groupsCardButton">
                                        <Link to='/pages/viewGroup' className="button bold">
                                            View group
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>     
                </div>
                <div className='stickyBtnG'>
                    <Link to="/pages/createGroup" className="button mediumCopy btmRightBtn bold">Create new group</Link>
                </div>  
            </motion.div>

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
            <div className="navStack">
                <Link to='/pages/allGroups' className="bold d-flex flex-column align-items-center">
                    <img src={navExpenseDefault} className="navIcons" alt="expense" />
                    Expense
                </Link>
            </div>
            <div className="navStack active">
                <Link to='/pages/groups' className="bold d-flex flex-column align-items-center">
                    <img src={navGroupsDefault} className="navIcons" alt="groups" />
                    <img src={navGroupsActive} className="navIcons" alt="groups" id="active" />
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
